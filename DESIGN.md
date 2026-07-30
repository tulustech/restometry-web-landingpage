# Restometry — Brand & Design Guidelines

**Version:** 1.0 (Phase 1)
**Owner:** Restometry
**Purpose:** Single source of truth for color, type, voice, and UI decisions across the marketing site and product. Every fix below traces back either to the logo mark or to the UX audit of restometry.com.

---

## 1. Brand Summary

Restometry positions itself as the **precision instrument for restaurant labor cost** — the "-metry" suffix (measurement) plus the "R" wordmark should read as *analytical, trustworthy, no-nonsense*. The brand voice is a calm operator, not a hype startup: it talks in the numbers owners already track (labor %, overstaffing, sales), not abstract SaaS jargon.

Everything in this doc should reinforce one idea: **Restometry makes an anxious number (labor cost) feel measured and under control.**

---

## 2. Logo

- Mark: a rounded hexagon/shield containing a bold serif-slab **"R"**, cut by a diagonal color split (navy field, red field) inside a navy ring.
- The hexagon shape reads as a **shield / gauge** — reinforce this metaphor elsewhere (badges, alert icons, threshold indicators) rather than introducing unrelated iconography (no generic clipboards, forks, or chef hats).
- Keep clear space around the mark equal to at least the width of the "R" stroke on all sides. Do not place the logo on busy photography — use it on solid navy, solid white, or solid red only.
- Minimum digital size: 32px diameter (favicon-safe). Below that, drop to a simplified "R" monogram only.

---

## 3. Color Palette

Extracted directly from the logo file (exact pixel values):

| Role | Hex | RGB | Usage |
|---|---|---|---|
| **Brand Red** | `#BF1E2E` | 191, 30, 46 | Primary CTA buttons, alerts/warnings, threshold-breach states, active nav state |
| **Brand Navy** | `#2B3C4E` | 43, 60, 78 | Headlines, nav bar, footer background, primary text |
| **Navy (lighter tint, from mark shading)** | `#324B5F` | 50, 75, 95 | Secondary backgrounds, hover states, section dividers |
| **White** | `#FFFFFF` | 255, 255, 255 | Base background, text on navy/red |

### Contrast check (WCAG)
- White text on Brand Red: **6.1:1** — passes AA for all text sizes. Fine for buttons and short labels; avoid for long paragraphs.
- White text on Brand Navy: **11.3:1** — passes AAA. This is your safest combination for body copy and long-form text.
- Red text on Navy (or vice versa): **1.85:1** — fails accessibility. **Never** pair red and navy directly as text/background; always separate them with white or a neutral gray.

### Suggested extended palette (not in the logo, needed for UI states)
- Success (used sparingly, e.g. "under threshold"): `#2E7D4F` (a muted green that doesn't fight the red)
- Neutral gray (secondary text, borders): `#6B7785`
- Background gray (cards, dashboard panels): `#F4F6F8`

**Rule of thumb:** Red = "pay attention" (alerts, primary action, overstaffing warnings). Navy = "this is stable/trusted" (structure, chrome, data). Don't let red become decorative — if everything is red, the overstaffing alert loses urgency.

---

## 4. Typography

**Logotype only:** Lobster (as specified) — a bold script/display face. Use it **exclusively for the wordmark "Restometry"** in the header and footer, and optionally for large hero headlines if legibility at that size is confirmed.

**Do not use Lobster for:**
- Body copy, UI labels, buttons, forms, or dashboard data — script faces at small sizes or in dense text hurt legibility and feel decorative on a data-driven product.
- Numbers/KPIs (30%, labor %, etc.) — these need a clean, tabular-friendly sans-serif so figures don't wobble visually.

**Pairing recommendation:** A neutral, highly legible sans-serif for everything else:
- **Inter** or **Poppins** (headings/UI, weights 500–700)
- Same family at 400 for body text

**Hierarchy:**
| Element | Font | Weight | Notes |
|---|---|---|---|
| Logo / wordmark | Lobster | Regular | Header + footer only |
| H1 (hero headline) | Inter/Poppins | 700 | Navy or white depending on background |
| H2 (section headers) | Inter/Poppins | 600 | |
| Body copy | Inter/Poppins | 400 | Navy `#2B3C4E` on white, never red |
| Stat callouts (30%, 5min, Instant) | Inter/Poppins | 700, larger size | Red or navy depending on emphasis |
| Buttons/labels | Inter/Poppins | 600, uppercase or sentence case (pick one, stay consistent) | |

---

## 5. Voice & Tone

- Plain, numbers-first, confident — write like a restaurant operator, not a SaaS marketer. ("Labor cost as % of sales" beats "actionable workforce insights.")
- Short sentences. Owners are scanning between shifts, not reading whitepapers.
- Every feature description should answer **"why does this save me money or time"** in one line — the current site's "Why:" pattern under each feature is good; keep it everywhere new copy is added.

---

## 6. Website UX Fixes (from site audit)

These are the concrete fixes carried over from the restometry.com review, now tied to the palette/type system above so they ship consistently:

1. **Pricing gap:** Footer links to "Pricing" but no pricing exists. Either build a real pricing page or change the label to "Pricing — coming soon" styled as a disabled/secondary nav link (gray `#6B7785`, not navy) so it doesn't read as broken.
2. **"Phase 1" needs context:** Add a one-line roadmap strip near the hero, e.g. *"Phase 1: Labor & Scheduling → Phase 2: Menu Availability → Phase 3: POS."* Style as small navy-on-white text with red dot markers for shipped phases, gray for upcoming — reuses the shield/gauge motif from the logo.
3. **"See How It Works" CTA:** Must lead to an actual product screenshot, short video, or scroll-anchor showing the dashboard. If not ready, remove the button — a red primary CTA ("Get Started Today") should be the only CTA until a second one earns its place.
4. **No product visuals:** Add at least one annotated screenshot of the "Simple Dashboard Home" directly under the hero stats. Frame it in a navy or light-gray card (`#F4F6F8`) with a subtle shadow — do not float it directly on white with no container, it'll look unfinished.
5. **No trust signals:** Add a lightweight social-proof strip (pilot restaurant names/logos, or "Built with input from independent restaurant owners") between the feature grid and the closing CTA. Keep it in neutral gray text so it doesn't compete with red CTAs.
6. **Stat callouts ambiguity:** "30% Target Labor Cost Threshold" reads like a guarantee. Add a 1-line micro-caption underneath in gray, e.g. "Industry benchmark — your target may vary."

---

## 7. UI Component Guidelines

- **Primary button:** Brand Red background, white Inter/Poppins 600 text, generous horizontal padding, rounded corners matching the logo's rounded-hexagon softness (8–10px radius, not fully pill-shaped — keep it structured, not playful).
- **Secondary button:** White or transparent background, navy border and text.
- **Alerts (overstaffing warnings, threshold breaches):** Red background at low opacity (e.g. `#BF1E2E` at 10%) with full-opacity red left border and navy text — avoid solid red blocks for alert banners, they read as too aggressive for a recurring UI element.
- **Cards/panels (dashboard, feature blocks):** White or `#F4F6F8` background, subtle border or shadow, navy headings, gray body text. Never navy-background cards for dense text — reserve solid navy for nav/footer/hero only.
- **Icons:** If introducing icons, keep them geometric/line-based to match the shield mark's angularity — avoid rounded, "friendly" icon sets that clash with the precise/analytical brand feel.

---

## 8. Accessibility Notes

- Default body text: navy on white (`#2B3C4E` / `#FFFFFF`) — AAA compliant.
- Red is for emphasis and action only, never for long-form text.
- Any red-on-white text (e.g., "−30% labor cost") must stay large/bold (18px+) to stay safely within AA large-text thresholds.
- Never rely on red alone to signal "alert" — pair with an icon or label ("⚠ Over threshold") for colorblind users, since red/green distinctions are the most common color-vision deficiency.

---

## 9. Next Steps

- [ ] Apply palette + type system to live site (replace any ad hoc colors with the hex values above)
- [ ] Build or stub the pricing page
- [ ] Add roadmap strip and one dashboard screenshot
- [ ] Add social proof strip
- [ ] Audit all red/navy text combinations against the contrast table in Section 3