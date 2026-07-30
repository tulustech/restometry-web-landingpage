import Image from "next/image";

const waitlistUrl = "https://forms.gle/oamr5eenUXN9bwdu7";

const pressures = [
  ["01", "Build the right schedule", "Match the shift to the day you expect, before names go on the board."],
  ["02", "Protect the margin", "See scheduled labor beside expected sales while there is still time to adjust."],
  ["03", "Put the spreadsheet away", "Keep the daily numbers in one clear view instead of rebuilding the same workbook."],
];

const benefits = [
  ["Plan with the full picture", "See sales, scheduled hours, and labor cost together before the shift starts."],
  ["Catch pressure early", "Notice when a shift looks heavy or thin while you can still make a calm change."],
  ["Close the day cleanly", "Record actual sales and attendance once, without chasing notes across spreadsheets."],
];

const workflow = [
  ["Set the day", "Add expected sales and check the schedule by role."],
  ["Check the shift", "Review the labor picture and make the call before service."],
  ["Close the loop", "Enter actual sales and attendance so tomorrow starts with better context."],
];

function WaitlistLink({ label = "Join the waitlist" }: { label?: string }) {
  return (
    <a
      className="button button-primary"
      href={waitlistUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label} (opens in a new tab)`}
    >
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="Restometry home">
            <Image
              src="/restometry-logo.png"
              alt="Restometry shield logo"
              width={48}
              height={48}
              priority
            />
            <span className="wordmark">Restometry</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#pressure">Why Restometry</a>
            <a href="#preview">Preview</a>
            <a href="#benefits">Benefits</a>
            <a href="#how-it-works">How it works</a>
          </nav>
          <WaitlistLink />
        </div>
      </header>

      <main id="top" data-restometry-page="landing">
        <section className="hero control-grid" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span aria-hidden="true" /> Labor control for independent restaurants</p>
              <h1 id="hero-title">Know your labor cost before it costs you.</h1>
              <p className="hero-lede">
                Payroll pressure is real. Staffing is never certain. And you do not have
                another hour for a spreadsheet. Restometry gives owners with 1–5 locations
                one clear place to plan the shift and protect the margin.
              </p>
              <div className="hero-actions">
                <WaitlistLink label="Join the early access waitlist" />
                <a className="button button-secondary" href="#preview">See the early access preview</a>
              </div>
              <p className="quiet-note">Built for the daily decisions independent restaurant owners make.</p>
            </div>

            <aside className="shift-sheet" aria-label="Today’s shift control sheet">
              <div className="sheet-header">
                <div>
                  <p className="sheet-label">Shift control / Thursday</p>
                  <p className="sheet-title">Dinner service</p>
                </div>
                <span className="status status-review">Review</span>
              </div>
              <dl className="sheet-numbers">
                <div><dt>Expected sales</dt><dd>$8,400</dd></div>
                <div><dt>Scheduled labor</dt><dd>$2,268</dd></div>
                <div><dt>Labor / sales</dt><dd>27.0%</dd></div>
              </dl>
              <div className="measure" aria-hidden="true">
                <span>Open</span><span>Prep</span><span>Rush</span><span>Close</span>
              </div>
              <p className="sheet-alert"><strong>Schedule check:</strong> The 5–7 PM window carries the most labor. Review it before posting.</p>
            </aside>
          </div>
        </section>

        <section className="pressure" id="pressure" aria-labelledby="pressure-title">
          <div className="shell">
            <div className="section-heading heading-split">
              <p className="eyebrow">The part no one sees</p>
              <div>
                <h2 id="pressure-title">The schedule is a margin decision.</h2>
                <p>It should not take three tabs, last week’s notes, and a late-night guess to make it.</p>
              </div>
            </div>
            <ol className="pressure-list">
              {pressures.map(([number, title, copy]) => (
                <li key={number}>
                  <span className="list-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="preview-section control-grid" id="preview" aria-labelledby="preview-title">
          <div className="shell">
            <div className="section-heading preview-heading">
              <div>
                <p className="eyebrow">Early access preview</p>
                <h2 id="preview-title">One shift. One labor picture.</h2>
              </div>
              <p>A focused home screen for the question owners ask before every service: does this schedule fit the sales we expect?</p>
            </div>

            <article className="dashboard" aria-labelledby="dashboard-title">
              <div className="dashboard-bar">
                <div className="dashboard-brand"><span className="logo-dot">R</span> Restometry</div>
                <p>Thursday, July 30 <span>•</span> Main Street</p>
              </div>
              <div className="dashboard-body">
                <div className="dashboard-title-row">
                  <div><p className="sheet-label">Today’s plan</p><h3 id="dashboard-title">Dinner shift overview</h3></div>
                  <span className="status status-ready">Ready to review</span>
                </div>
                <dl className="dashboard-totals">
                  <div><dt>Expected sales</dt><dd>$8,400<small>Entered for today</small></dd></div>
                  <div><dt>Scheduled hours</dt><dd>126<small>Across 18 team members</small></dd></div>
                  <div><dt>Scheduled labor</dt><dd>$2,268<small>27.0% of expected sales</small></dd></div>
                </dl>

                <div className="dashboard-grid">
                  <div className="schedule-table">
                    <div className="panel-heading"><h4>Staffing by service window</h4><span>4 windows</span></div>
                    <div
                      className="table-scroll"
                      tabIndex={0}
                      role="region"
                      aria-label="Staffing details by service window; scroll horizontally to view all columns"
                    >
                      <table>
                        <thead><tr><th scope="col">Window</th><th scope="col">Team</th><th scope="col">Hours</th><th scope="col">Labor</th><th scope="col">Check</th></tr></thead>
                        <tbody>
                          <tr><th scope="row">Open / prep</th><td>5</td><td>24</td><td>$432</td><td><span className="table-state okay">Set</span></td></tr>
                          <tr><th scope="row">Lunch</th><td>8</td><td>36</td><td>$648</td><td><span className="table-state okay">Set</span></td></tr>
                          <tr className="attention-row"><th scope="row">Dinner rush</th><td>13</td><td>48</td><td>$864</td><td><span className="table-state attention">Review</span></td></tr>
                          <tr><th scope="row">Close</th><td>5</td><td>18</td><td>$324</td><td><span className="table-state okay">Set</span></td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <aside className="shift-note" aria-label="Shift note">
                    <p className="sheet-label">Shift note</p>
                    <h4>Look at the rush before you post.</h4>
                    <p>Dinner carries 38% of scheduled labor. Check whether all 13 people need to overlap at 5 PM.</p>
                    <div className="mini-rule"><span>Expected sales</span><strong>$8,400</strong></div>
                    <div className="mini-rule"><span>Planned labor</span><strong>27.0%</strong></div>
                  </aside>
                </div>
              </div>
            </article>
            <p className="preview-caption">Illustrative early access view. Your targets and staffing decisions stay yours.</p>
          </div>
        </section>

        <section className="benefits" id="benefits" aria-labelledby="benefits-title">
          <div className="shell">
            <div className="section-heading heading-split">
              <p className="eyebrow">What changes</p>
              <div><h2 id="benefits-title">Less second-guessing between shifts.</h2><p>Restometry is built around the decisions you already make, not more software to manage.</p></div>
            </div>
            <div className="benefit-grid">
              {benefits.map(([title, copy], index) => (
                <article key={title}>
                  <span className="benefit-mark" aria-hidden="true">{index + 1}</span>
                  <h3>{title}</h3><p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-fit" id="trust-fit" aria-labelledby="trust-fit-title">
          <div className="shell trust-fit-inner">
            <h2 id="trust-fit-title">Made for restaurants where the owner still knows the schedule.</h2>
            <p>Restometry is built for independent teams of one to five locations, starting with labor and scheduling.</p>
          </div>
        </section>

        <section className="workflow" id="how-it-works" aria-labelledby="workflow-title">
          <div className="shell workflow-grid">
            <div className="section-heading workflow-intro">
              <p className="eyebrow">A daily rhythm</p>
              <h2 id="workflow-title">From first estimate to final number.</h2>
              <p>Three short checks keep the day connected without turning labor planning into a desk job.</p>
            </div>
            <ol className="workflow-list">
              {workflow.map(([title, copy], index) => (
                <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="roadmap" aria-labelledby="roadmap-title">
          <div className="shell roadmap-inner">
            <div><p className="eyebrow">Built in the open</p><h2 id="roadmap-title">Start with labor. Earn the next step.</h2></div>
            <ol aria-label="Restometry roadmap">
              <li className="current"><span aria-hidden="true" /> <strong>Now</strong> Labor &amp; scheduling</li>
              <li><span aria-hidden="true" /> <strong>Next</strong> Menu availability</li>
              <li><span aria-hidden="true" /> <strong>Later</strong> Point-of-sale connections</li>
            </ol>
            <p>No inflated promises. Early access begins with the daily labor decisions independent owners need to see clearly.</p>
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <div className="shell closing-inner">
            <div><p className="eyebrow eyebrow-light">A calmer look at tomorrow</p><h2 id="closing-title">Make the schedule with the numbers in front of you.</h2></div>
            <div><p>Join the early access list and help shape a practical labor control room for independent restaurants.</p><WaitlistLink label="Join the early access waitlist" /></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-inner">
          <a className="brand footer-brand" href="#top" aria-label="Back to top">
            <Image src="/restometry-logo.png" alt="" width={44} height={44} />
            <span className="wordmark">Restometry</span>
          </a>
          <p>Measured labor decisions for independent restaurants.</p>
          <nav aria-label="Footer navigation"><a href="#preview">Preview</a><a href="#benefits">Benefits</a><a href="#how-it-works">How it works</a></nav>
          <p className="copyright">© 2026 Restometry</p>
        </div>
      </footer>
    </>
  );
}
