# SEO Audit: www.sajjadahmad.site (re-audit)

**Date:** 2026-11-19
**Scope:**
- The current codebase as a local production build: 39 pages crawled, all returning 200, and the `/cv` → `/about` 308 redirect checked.
- Live checks of www.sajjadahmad.site and sajjadahmadai.vercel.app.

**Previous audit (2026-11-18):** 68/100.
**Data limits:** no Search Console, CrUX, GA4, Moz or DataForSEO access was configured, so rankings, traffic, field Core Web Vitals and backlinks are not measured. The performance score is an estimate.

## Executive summary

**SEO Health Score (code ready to deploy): 83 / 100**, up from 68.
**Live site today: much lower.** The new domain serves the **old build**, so none of these improvements are live yet (see Critical below).

**Business type:** personal-brand AI engineering freelancer/consultant, remote-first, with geo service pages.

| Category | Weight | Before | Now |
|---|---|---|---|
| Technical SEO | 22% | 78 | 85 |
| Content Quality | 23% | 62 | 76 |
| On-Page SEO | 20% | 65 | 90 |
| Schema / Structured Data | 10% | 70 | 85 |
| Performance (estimated) | 10% | 65 | 75 |
| AI Search Readiness | 10% | 70 | 85 |
| Images | 5% | 60 | 85 |

### Critical / top issues
1. **CRITICAL (live): the new domain runs the old build.**
   - `https://www.sajjadahmad.site` returns 200, but its canonical points to `https://sajjadahmadai.vercel.app`.
   - It has no `llms.txt` (404) and none of the 15 new articles.
   - `sajjadahmadai.vercel.app` **also** returns 200 with the same content, so search engines see two copies of the site.
   - **Fix:** deploy the current code, then redirect `sajjadahmadai.vercel.app` to `www.sajjadahmad.site` with a 308.
2. **The 5 location pages are thin, near-identical templates** (141–157 words). This is the remaining doorway-page risk.
3. **The 4 original blog posts cite no sources**, unlike the 15 new ones. `andrew-ng-biggest-opportunities-in-ai` is 482 words with no direct-answer block.
4. **3 first-person experience claims in new articles need your confirmation:**
   - "options I see most often in production work"
   - "In my experience it is a very good default"
   - "failure modes I see most often in inherited ML services"
5. **8 pages have fewer than 3 internal links pointing to them:** 5 location pages, plus the chatbot, Andrew Ng and YOLO posts.

### Quick wins
1. Deploy, then set up the vercel.app → www redirect in Vercel Domains.
2. Add a Search Console property for www.sajjadahmad.site and submit the sitemap there and in Bing Webmaster Tools.
3. Add 3–5 citations and a direct-answer block to each of the 4 original posts.
4. Link the location pages from relevant articles (e.g. the "hire an AI engineer" post → `/locations/pakistan`).
5. Add `Blog` + `ItemList` structured data to `/blog`.

## Technical SEO (85)

**What works**
- 39/39 pages return 200, with no broken internal links.
- Canonicals are self-referencing on the new domain.
- `/cv` 308 → `/about`.
- `robots.txt` names 11 AI crawlers and lists the sitemap.
- The sitemap uses real `lastmod` dates.
- `nosniff`, `Referrer-Policy`, `X-Frame-Options` and `Permissions-Policy` are set.
- The apex domain redirects to www (308).

| Severity | Finding | Fix |
|---|---|---|
| Critical | Live www domain serves the old build (canonical → vercel.app, `llms.txt` 404, new posts missing) | Deploy the current code |
| Critical | `sajjadahmadai.vercel.app` returns 200 alongside www (duplicate host) | Vercel → Domains → redirect it to `www.sajjadahmad.site` (308) |
| Medium | Google site verification token belongs to the old property | Verify the new property in Search Console and swap the token in `app/layout.tsx` |
| Low | No Content-Security-Policy | Add a CSP once the third-party widget's domains are known |

## Content Quality (76)

**What works**
- 15 new articles of about 2,000–2,400 rendered words each.
- Each one cites 5–11 sources, opens with a direct answer and includes a table, numbered steps and an FAQ.
- 10 service pages now have deliverables, a tech stack, a related real project and 5 FAQs.
- Overclaims ("zero-hallucination", "100% factual") are removed site-wide.

| Severity | Finding | Fix |
|---|---|---|
| High | 5 location pages are 141–157 words and templated | Merge into one page, or write genuinely local content (time zones, regulations such as GDPR, local examples) |
| Medium | 4 original posts cite 0 sources. The Andrew Ng post is 482 words with no answer block | Add citations, expand, add a direct-answer block |
| Medium | 3 first-person experience claims in new articles | Confirm they're true, or rephrase |
| Low | `/about` (250 words) and `/services` (265 words) are light | Add a short bio timeline to /about and an intro + FAQ to /services |

## On-Page SEO (90)

**What works**
- All titles are 60 characters or fewer and all descriptions are 110–160 characters.
- Every page has exactly one H1.
- No duplicate titles or descriptions.
- Every page has a 1200×630 OG image.
- Internal linking: home "Writing" section, related posts on every article, and footer links.

| Severity | Finding | Fix |
|---|---|---|
| Medium | 8 pages have fewer than 3 inbound internal links (5 locations, plus the chatbot, Andrew Ng and YOLO posts) | Link them contextually from related articles and service pages |

## Schema / Structured Data (85)

**Present:**
- Person and WebSite on every page.
- ProfilePage on the home page only.
- BreadcrumbList on About, Services and Locations.
- Service + FAQPage on all 10 service pages.
- BlogPosting (with image, wordCount and author `@id`) + FAQPage on all 19 posts.
- All JSON-LD parses.

| Severity | Finding | Fix |
|---|---|---|
| Low | `/blog` has no `Blog`/`CollectionPage` + `ItemList` | Add a list of posts |
| Low | Location pages have no `Service` + `areaServed` | Add it if the pages stay |
| Low | `sameAs` lists only GitHub and LinkedIn | Add other real profiles |

## Performance (75, estimated)

- Blog covers and avatars are now served through `next/image` as resized WebP/AVIF. The source PNGs (1.5–1.9 MB) stay in `public/` but aren't sent raw.
- The hero portrait uses `priority`, and fonts use `next/font`.
- The third-party chat widget (`qualzo.app`) loads on every page with `lazyOnload`. Measure its cost once field data is available.
- No Lighthouse or CrUX data was available.

## Images (85)

- 100% alt coverage, and the OG image is a correct 1200×630.
- **Low:** unused project screenshots remain in `public/` (`gulelx_crypto_scanner.jpg`, `lead_finder_dashboard.jpg`, `detection1.png`, `trafic.jpeg`, `voice-assistant.jpeg`, `pdf-reader.jpeg`).

## AI Search Readiness (85)

**What works**
- `/llms.txt` lists all key pages and articles and updates automatically.
- `robots.txt` explicitly allows the GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended and Bingbot crawlers.
- Answer-first sections with question headings, and FAQ structured data on 29 pages.
- Primary-source citations on the new articles.
- A consistent Person entity.

| Severity | Finding | Fix |
|---|---|---|
| Medium | None of this is live yet (old build deployed) | Deploy |
| Medium | Few off-site brand signals (only GitHub and LinkedIn) | Get mentioned and linked elsewhere: guest posts, open-source READMEs, community answers |
| Low | Original 4 posts lack citations | See Content |

## Limitations
- The live site runs an old build, so this audit scores the code about to ship.
- No field CWV, rankings, traffic, indexation or backlink data.
- AI-engine citation visibility (ChatGPT, Perplexity) was not measured. It needs DataForSEO or manual prompting after deploy.
