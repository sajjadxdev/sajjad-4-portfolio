# Technical SEO — 85/100

## What works
- 39/39 pages 200
- Self-referencing canonicals on new domain
- /cv 308 to /about
- AI crawlers named in robots.txt
- Real lastmod dates
- Security headers set
- Apex 308 to www

## Findings
| Severity | Finding | Evidence | Fix |
|---|---|---|---|
| Critical | Live site serves old build | www.sajjadahmad.site canonical points to vercel.app; llms.txt 404; new posts missing. | Deploy current code. |
| Critical | Duplicate host | sajjadahmadai.vercel.app returns 200 with same content. | 308 redirect to www.sajjadahmad.site. |
| Medium | Old verification token | Google verification token belongs to old property. | Verify new property, swap token. |
| Low | No CSP | Content-Security-Policy header absent. | Add CSP once widget domains are known. |
