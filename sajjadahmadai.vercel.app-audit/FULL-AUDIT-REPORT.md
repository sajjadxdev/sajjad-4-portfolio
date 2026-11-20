# SEO Audit: sajjadahmadai.vercel.app

**Date:** 2026-11-18
**Scope:** current codebase as a local production build (25 pages crawled, all 200), plus live checks of sajjadahmadai.vercel.app (headers, redirects, robots, llms.txt).
**Note:** the live site still serves the older design. On-page findings describe the code about to ship.
**Data sources:** crawl of the local build, the source code, and public live responses. No Google Search Console, CrUX, GA4, Moz or DataForSEO data was configured, so traffic, rankings, field Core Web Vitals and backlinks are **not measured**. The performance score is an estimate from page weight.

## Executive summary

**SEO Health Score: 68 / 100**

**Business type:** personal-brand AI engineering freelancer/consultant. Remote-first service provider with geo-targeted service pages (Islamabad, Pakistan, UAE, Germany, USA). It is not a brick-and-mortar business, so a Google Business Profile and map-pack factors apply only partly.

| Category | Weight | Score |
|---|---|---|
| Technical SEO | 22% | 78 |
| Content Quality | 23% | 62 |
| On-Page SEO | 20% | 65 |
| Schema / Structured Data | 10% | 70 |
| Performance (estimated) | 10% | 65 |
| AI Search Readiness | 10% | 70 |
| Images | 5% | 60 |

### Top 5 issues
1. **The `/cv` page canonicalises to the homepage.** It has no canonical of its own and inherits `/` from the root layout. Google is told the CV is a duplicate of the homepage, while the sitemap lists it.
2. **18 of 25 pages have no Open Graph image.** Each page defines its own `openGraph` object without `images`, and in Next.js that replaces the layout's image. Links to Services, Locations and Blog pages share with no preview image.
3. **Thin, templated service and location pages** (143–211 words each). The five location pages share one template with only the place name swapped, which is a doorway-page pattern risk.
4. **Heavy unoptimised images on blog posts.** Cover images are 1.5–2.0 MB PNGs in plain `<img>` tags, and the 40px author avatar loads a 685 KB, 1000×1000 PNG. This likely hurts LCP on every article.
5. **The homepage H1 renders as "Build AI thatworks in the real world."** A `<br />` with no space merges the words in the text search engines and screen readers get.

### Top 5 quick wins
1. Add `alternates.canonical: "/cv"` to the CV page metadata (one line).
2. Add `images: [{ url: "/sajjad.png" }]` to every page-level `openGraph` (or a shared helper).
3. Add a space before the `<br />` in the homepage H1.
4. Swap the blog `<img>` tags for `next/image` (automatic WebP/AVIF and resizing).
5. Fix the About page Person schema: `addressRegion` says "Khyber Pakhtunkhwa" for Islamabad, contradicting the layout's "Islamabad Capital Territory" under the same `@id`.

## Technical SEO (78)

**What works**
- `robots.txt` allows all crawlers and points to the sitemap.
- The sitemap lists all 25 pages, including the four new service pages.
- HTTPS is enforced with a 308 from http, and HSTS is set with `preload`.
- Unknown URLs return a real 404.
- Every page is `index, follow` with `lang="en"`.
- Canonicals are correct on 24 of 25 pages.

**Findings**
| Severity | Finding | Fix |
|---|---|---|
| High | `/cv` canonical → `https://sajjadahmadai.vercel.app` (homepage) | Add `alternates: { canonical: "/cv" }` in `app/cv/page.tsx` metadata |
| Medium | No `Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy` or `X-Frame-Options` on the live site | Add a `headers()` block in `next.config.ts` |
| Low | Sitemap `lastmod` is the build time for 21 pages, so every deploy claims every page changed | Use real content dates, or omit `lastmod` for static pages |
| Low | A third-party chat widget (`qualzo.app/widget.js`) loads on every page | Already `lazyOnload`; keep it, but measure its cost |

## Content Quality (62)

**What works**
- Two blog articles are substantive (1,295 and 1,315 words), with a "Direct concise answer" box, a table of contents and an FAQ.
- An author box and bio exist.
- Real project and work history appear on the home and CV pages.

**Findings**
| Severity | Finding | Fix |
|---|---|---|
| High | The 10 service pages are 160–211 words each: overview, four steps and four problems. Too thin to rank for competitive terms like "RAG development services" | Expand to 600–1,000 words: a real project example, tech stack, timeline, FAQ, pricing approach |
| High | The 5 location pages (143–160 words) are near-identical templates (doorway-page pattern) | Merge into one "Who I work with" page, or give each real unique content: local clients, time-zone overlap, regulations (e.g. GDPR for Germany) |
| Medium | The CV makes specific claims ("100,000+ enterprise documents", "accuracy by 40%") with no supporting case study | Back them with a case study or soften them. Unverifiable numbers hurt E-E-A-T trust |
| Medium | Two of the four blog posts are thinner (588 and 750 words) | Expand, or add original diagrams and code |
| Low | Projects have no case-study pages. Each links out to GitHub or a video | Add `/work/<project>` case-study pages: the strongest E-E-A-T signal for a freelancer |

## On-Page SEO (65)

**What works**
- Every page has exactly one H1.
- Titles and descriptions are unique (no duplicates).
- Image alt text is present everywhere. The one empty alt is a decorative avatar, which is correct.

**Findings**
| Severity | Finding | Fix |
|---|---|---|
| High | 18 pages have no `og:image` (`/blog`, `/services`, all service and location pages) | Include `images` in every page's `openGraph` |
| Medium | 15 titles exceed 60 characters. Blog titles run 81–100 and get truncated in results | Shorten. Rely on the `| Sajjad Ahmad` suffix only where it fits |
| Medium | Homepage H1 text is "Build AI thatworks in the real world." | `Build AI that{" "}<br />` |
| Medium | Weak internal linking: each blog post has 2 inbound links, location pages 1–2, and 4 service pages only 1 | Add a "Latest articles" strip on the home page, link related services from blog posts, link locations from the footer |
| Low | 7 meta descriptions exceed 160 characters (max 211) | Trim to 140–155 |

## Schema / Structured Data (70)

**Present:** Person, WebSite, ProfilePage (sitewide), BreadcrumbList, Service (services), BlogPosting and FAQPage (articles). All JSON-LD parses.

| Severity | Finding | Fix |
|---|---|---|
| Medium | `ProfilePage` is injected by the root layout on **every** page, including blog posts and services | Move it to the home and About pages only. Keep `WebSite` and `Person` in the layout |
| Medium | Conflicting Person data under one `@id`: About says `addressRegion: "Khyber Pakhtunkhwa"`, the layout says "Islamabad Capital Territory" | Use one value: Islamabad Capital Territory |
| Low | Location pages have no `Service` with `areaServed` | Add `Service` + `areaServed` per location (if those pages stay) |
| Low | The homepage project list has no structured data | Optional: `ItemList` of `CreativeWork` for projects |

## Performance (65, estimated, not measured)

No Lighthouse or CrUX data was available. Signals from the build:
- **High:** blog cover images of 1.5–2.0 MB PNG (`AndrewNg.png` 1.96 MB, `agentic.png` 1.75 MB, `mcp.png` 1.59 MB) load through plain `<img>`, which likely makes them the LCP element on articles.
- **High:** the author avatar loads `sajjad.png` (685 KB, 1000×1000) to show at 40px.
- **Medium:** home page JavaScript is about 596 KB uncompressed across its chunks. Review it once field data exists.
- **Good:** the hero portrait uses `next/image` with `priority`. Fonts use `next/font`.

## Images (60)

- Alt coverage is 100%.
- Heavy PNG originals: convert to WebP/AVIF, or serve through `next/image`.
- **The OG image is declared as 1200×630, but `sajjad.png` is 1000×1000.** Social platforms crop or letterbox it. Create a real 1200×630 share image.
- Unused images remain in `public/` (the old project screenshots): `gulelx_crypto_scanner.jpg`, `lead_finder_dashboard.jpg`, `detection1.png`, `trafic.jpeg`, `voice-assistant.jpeg`, `pdf-reader.jpeg`. They're harmless for SEO but add repo weight.

## AI Search Readiness (70)

**What works**
- `robots.txt` allows all crawlers, including AI bots.
- Articles open with a direct answer box and end with FAQ sections, which suits passage-level citation.
- Clear entity data (Person schema with `sameAs` links to GitHub and LinkedIn).

| Severity | Finding | Fix |
|---|---|---|
| Low | No `/llms.txt` (404 locally and live). Optional; Google ignores it | Add a short llms.txt listing key pages |
| Medium | Few third-party brand signals in `sameAs` (GitHub and LinkedIn only) | Add other real profiles (e.g. Hugging Face, Upwork) if they exist |

## Limitations
- No field Core Web Vitals, rankings, traffic, indexation status or backlink data (no API credentials configured).
- The live site runs an older build, so live-only checks cover headers, redirects and robots only.
- Local business factors (Google Business Profile, NAP citations, reviews) were not assessed. Run `/seo local` if you want to pursue the Islamabad map pack.
