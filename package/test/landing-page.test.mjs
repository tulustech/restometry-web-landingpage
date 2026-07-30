import assert from "node:assert/strict";
import { spawn, spawnSync } from "node:child_process";
import { once } from "node:events";
import { createServer } from "node:net";
import { setTimeout as delay } from "node:timers/promises";
import test from "node:test";

const waitlistUrl = "https://forms.gle/oamr5eenUXN9bwdu7";

function textContent(value) {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

async function availablePort() {
  const socket = createServer();
  socket.listen(0, "127.0.0.1");
  await once(socket, "listening");
  const address = socket.address();
  assert.notEqual(address, null);
  assert.equal(typeof address, "object");
  // Closing before Next binds leaves a minimal unavoidable allocation race.
  await new Promise((resolve, reject) => socket.close((error) => error ? reject(error) : resolve()));
  return address.port;
}

async function stopServer(server) {
  if (server.exitCode !== null) return;

  const exited = once(server, "exit");
  server.kill("SIGTERM");
  await Promise.race([
    exited,
    delay(2_000).then(() => {
      if (server.exitCode === null) server.kill("SIGKILL");
    }),
  ]);
  if (server.exitCode === null) await exited;
}

test("the production landing page provides a complete early-access journey", async (t) => {
  const build = spawnSync("npm", ["run", "build"], {
    cwd: process.cwd(),
    encoding: "utf8",
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
  });

  assert.equal(
    build.status,
    0,
    `next build failed:\n${build.stdout}\n${build.stderr}`,
  );

  const port = await availablePort();
  const baseUrl = `http://127.0.0.1:${port}`;
  const server = spawn(
    process.execPath,
    ["node_modules/next/dist/bin/next", "start", "-H", "127.0.0.1", "-p", String(port)],
    {
    cwd: process.cwd(),
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
    stdio: "ignore",
    },
  );
  const serverExited = once(server, "exit").then(([code, signal]) => ({ code, signal }));
  t.after(() => stopServer(server));

  let response;
  for (let attempt = 0; attempt < 40; attempt += 1) {
    const result = await Promise.race([
      fetch(baseUrl).then((value) => ({ response: value })).catch(() => ({})),
      serverExited.then((exit) => ({ exit })),
    ]);
    if (result.exit) {
      assert.fail(`production server exited before readiness: ${JSON.stringify(result.exit)}`);
    }
    if (result.response) {
      response = result.response;
      break;
    }
    await delay(250);
  }

  assert.ok(response, "production server did not become ready");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /<main\b[^>]*data-restometry-page="landing"/i);
  assert.match(html, /<title>Restometry \| Restaurant labor costs, under control<\/title>/i);
  assert.match(html, /<meta\b[^>]*name="description"[^>]*content="[^"]+"/i);
  assert.match(html, /<link\b[^>]*rel="icon"[^>]*href="\/favicon\.svg"/i);
  assert.match(html, /<img\b[^>]*alt="Restometry shield logo"/i);

  const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  assert.equal(headings.length, 1, "page should render exactly one h1");
  assert.equal(
    textContent(headings[0][1]),
    "Know your labor cost before it costs you.",
  );

  const internalLinks = [
    ...html.matchAll(/<a\b[^>]*href="(#[^"]+)"[^>]*>/gi),
  ].map((match) => match[1].slice(1));
  assert.ok(internalLinks.length >= 3, "navigation should link to page sections");
  for (const id of internalLinks) {
    assert.match(html, new RegExp(`id="${id}"`), `#${id} should resolve`);
  }

  assert.match(html, /<section\b[^>]*id="preview"/i);
  assert.match(html, /Early access preview/i);
  assert.match(html, /<article\b[^>]*class="dashboard"[^>]*aria-labelledby="dashboard-title"/i);
  assert.match(html, /<table\b/i, "dashboard preview should use a semantic table");
  assert.doesNotMatch(html, /<\/dd>\s*<small\b/i, "dashboard captions should be inside their values");
  assert.match(html, /<section\b[^>]*id="benefits"/i);
  assert.match(html, /<section\b[^>]*id="trust-fit"[^>]*aria-labelledby="trust-fit-title"/i);
  assert.match(html, /<h2\b[^>]*id="trust-fit-title"[^>]*>Made for restaurants where the owner still knows the schedule\.<\/h2>/i);
  assert.match(html, /Restometry is built for independent teams of one to five locations, starting with labor and scheduling\./i);
  assert.match(html, /<section\b[^>]*id="how-it-works"/i);
  assert.ok(
    html.indexOf('id="benefits"') < html.indexOf('id="trust-fit"') &&
      html.indexOf('id="trust-fit"') < html.indexOf('id="how-it-works"'),
    "trust and fit should appear between benefits and workflow",
  );

  const tableScroll = html.match(/<div\b([^>]*class="table-scroll"[^>]*)>/i);
  assert.ok(tableScroll, "staffing table should have a scroll container");
  assert.match(tableScroll[1], /tabindex="0"/i);
  assert.match(tableScroll[1], /role="region"/i);
  assert.match(tableScroll[1], /aria-label="[^"]*staffing[^"]*horizontal[^"]*"/i);

  const externalAnchors = [
    ...html.matchAll(/<a\b([^>]*href="https:\/\/forms\.gle\/oamr5eenUXN9bwdu7"[^>]*)>([\s\S]*?)<\/a>/gi),
  ];
  assert.ok(externalAnchors.length >= 3, "primary actions should join the waitlist");
  for (const [, attributes, content] of externalAnchors) {
    assert.match(textContent(content), /^Join (the )?(early access )?waitlist$/i);
    assert.match(attributes, /target="_blank"/i);
    assert.match(attributes, /rel="[^"]*noreferrer[^"]*"/i);
    assert.match(attributes, /aria-label="[^"]+\(opens in a new tab\)"/i);
    assert.match(attributes, new RegExp(`href="${waitlistUrl}"`, "i"));
  }

  const [logo, favicon] = await Promise.all([
    fetch(`${baseUrl}/restometry-logo.png`),
    fetch(`${baseUrl}/favicon.svg`),
  ]);
  assert.equal(logo.status, 200);
  assert.match(logo.headers.get("content-type") ?? "", /^image\/png/i);
  assert.ok((await logo.arrayBuffer()).byteLength > 1_000);
  assert.equal(favicon.status, 200);
  assert.match(favicon.headers.get("content-type") ?? "", /^image\/svg\+xml/i);
  assert.ok((await favicon.text()).includes("<svg"));
});
