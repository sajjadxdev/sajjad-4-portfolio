# SEO Action Plan: www.sajjadahmad.site

Score of the code ready to deploy: **83/100** (was 68). The live site will stay at its old score until you deploy.

## Critical (today)
| # | Action | Effort |
|---|---|---|
| 1 | Deploy the current code to www.sajjadahmad.site | 10 min |
| 2 | Vercel → Domains: redirect `sajjadahmadai.vercel.app` to `www.sajjadahmad.site` (308) | 5 min |
| 3 | Search Console: add the www.sajjadahmad.site property, verify it, replace the token in `app/layout.tsx`, submit `/sitemap.xml` | 15 min |
| 4 | Bing Webmaster Tools: add the site and submit the sitemap (Bing's index feeds ChatGPT search) | 10 min |

## High (this week)
| # | Action | Effort |
|---|---|---|
| 5 | Location pages: merge into one, or write unique content for each | half a day |
| 6 | Confirm or rephrase the 3 first-person experience claims (vector DB and FastAPI posts) | 15 min |
| 7 | Request indexing for the 15 new posts in Search Console | 15 min |

## Medium (this month)
| # | Action | Effort |
|---|---|---|
| 8 | Add citations and a direct-answer block to the 4 original posts; expand the Andrew Ng post | 2–3 h |
| 9 | Add contextual internal links to the 8 weakly linked pages | 1 h |
| 10 | Build off-site signals: post articles to LinkedIn, Dev.to and Medium with canonical links, plus GitHub READMEs linking back | ongoing |

## Low (backlog)
- `Blog` + `ItemList` structured data on `/blog`.
- `Service` + `areaServed` structured data on location pages.
- A Content-Security-Policy header.
- Delete unused images in `public/`.
- Add any other real profiles to `sameAs`.

## Monitoring
- Connect a Search Console API key so the next audit includes indexation and real Core Web Vitals.
- After deploy, ask ChatGPT, Perplexity and Gemini the target questions (e.g. "RAG vs fine-tuning", "how to hire an AI engineer in Pakistan") monthly and note whether you get cited.
- Re-audit 4–6 weeks after deploy.
