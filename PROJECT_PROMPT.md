# Full Project Prompt: Sajjad Ahmad — AI Engineer Portfolio

> Copy everything below this line into an AI coding assistant to rebuild the full project from scratch.

---

## 1. Role and goal

You are a senior full-stack engineer and designer. Build a production-ready personal portfolio and lead-generation website for **Sajjad Ahmad, an AI Engineer based in Islamabad, Pakistan**, plus a small Python RAG chatbot backend. The site must look premium and editorial, load fast, be fully responsive (320px phones to 4K), score well on Google SEO, and be easy for AI search engines (ChatGPT, Claude, Perplexity, Google AI Overviews) to read and cite.

- **Live domain:** `https://www.sajjadahmad.site` (always use the `www` version for canonical URLs)
- **Hosting:** Vercel (frontend), auto-deploy from GitHub `main`
- **Owner details:**
  - Name: Sajjad Ahmad
  - Title: AI Engineer — Generative AI, Agentic AI & RAG
  - Location: Islamabad, Pakistan (available remote worldwide)
  - Email: sajjadxdev@gmail.com
  - Phone: +92 316 6400174
  - GitHub: https://github.com/sajjadxdev
  - LinkedIn: https://linkedin.com/in/sajjadxdev
  - Current role: AI Engineer at Apptex Software Solution (Aug 2025 – Present)

---

## 2. Tech stack

**Frontend**
- Next.js 16 (App Router, React Server Components by default, static generation)
- React 19, TypeScript 5 (strict)
- Tailwind CSS v4 (`@import "tailwindcss"`, `@theme inline`), `tw-animate-css`, shadcn base styles
- `lucide-react` icons, `clsx` + `tailwind-merge`, `class-variance-authority`, `radix-ui`, `gsap` (optional animations)
- `next/font/google` (Geist + Geist Mono), `next/image` for all images
- `@vercel/analytics` (`<Analytics />` in the root layout)
- Third-party chat widget: Qualzo (`https://qualzo.app/widget.js`, loaded with `next/script` `strategy="lazyOnload"`)

**Backend (folder `/backend`, deployed separately)**
- Python FastAPI + Uvicorn, ChromaDB (persistent, local folder `chroma_db`), Pydantic v2, httpx, python-dotenv
- LLM: Groq API, model `llama-3.3-70b-versatile` (OpenAI-compatible endpoint `https://api.groq.com/openai/v1/chat/completions`)
- Secrets in `backend/.env` (`GROQ_API_KEY`), never committed

---

## 3. Folder structure

```
app/
  layout.tsx              # root layout, global metadata, Person + WebSite JSON-LD, ThemeProvider, ChatTooltip, Qualzo, Analytics
  page.tsx                # homepage
  globals.css             # design tokens + all custom component CSS
  robots.ts               # robots.txt (allows AI crawlers)
  sitemap.ts              # dynamic sitemap.xml
  llms.txt/route.ts       # /llms.txt markdown map for LLMs
  api/indexnow/route.ts   # POST: submits URLs to IndexNow (Bing/Yandex)
  about/page.tsx
  services/page.tsx
  services/[slug]/page.tsx
  services/data/service-extras.ts
  locations/page.tsx
  locations/[slug]/page.tsx
  locations/data/location-extras.ts
  blog/page.tsx
  blog/[slug]/page.tsx
  blog/data/posts.ts            # BlogPost interface + core posts + BLOG_POSTS export
  blog/data/posts-agents.ts
  blog/data/posts-technical.ts
  blog/data/posts-business.ts
  components/
    Header.tsx  Footer.tsx  ChatTooltip.tsx  ThemeProvider.tsx
    ShadowCard.tsx  ShadowText.tsx  InnerShadowEffect.tsx  (soft neumorphic helpers used on sub-pages)
public/
  sajjad-ahmad-ai-engineer.jpg   # hero portrait (4:5)
  sajjad-ahmad-avatar.jpg        # square avatar
  og.png (1200x630)  mcp.png  agentic.png  AndrewNg.png  blog-banner.png
  project screenshots (*.jpg / *.jpeg / *.png)
  google4ecb985a18b1e318.html    # Google Search Console verification
  8c238e7bb3b94808b74bd61633f5ec31.txt  # IndexNow key file
backend/
  main.py  seed_db.py  requirements.txt  README.md  chroma_db/
```

---

## 4. Design system ("cream editorial" theme)

**Feel:** warm cream paper background, charcoal text, one strong brick-red accent, huge tight-tracked headlines, dark "ink" cards with soft red glows, pill buttons, generous whitespace. Light theme only for the main look (a dark toggle exists in ThemeProvider but the design is built for cream).

**CSS tokens (`:root`):**
```css
--gutter: clamp(24px, 10vw, 160px);   /* one horizontal gutter for every section */
--charcoal: #1c1c1c;
--bone: #ede6d8;      /* page background */
--red: #b3261e;       /* accent */
--muted: #8f887c;
--hairline: rgba(28, 28, 28, 0.18);
```
Extra colours used: dark card `#161414`, light red on dark `#e0574d`, warm orange glow `#d9643a`, secondary cream `#e3dac9`, card cream `#f4efe5`, body grey text `#6f685e`, light grey on dark `#b2aa9e`, online-dot green `#3ccf7a`.

Map shadcn names in `@theme inline` so sub-pages work: `background=bone`, `foreground=charcoal`, `card=#f4efe5`, `primary=red`, `primary-foreground=bone`, `secondary/muted/accent=#e3dac9`, `muted-foreground=#6f685e`, `border/input=hairline`, `ring=red`.

**Typography:** Arial/Helvetica on body (Geist loaded as CSS variable). Headlines use very negative letter-spacing (`-0.06em` to `-0.08em`) and tight line-height (`0.87–0.95`). `<em>` inside headings is **not italic**; it is coloured red. Eyebrow/section labels: 11px, bold, `letter-spacing: .18em`, uppercase, red.

**Reusable patterns:**
- Light glass card: `linear-gradient(160deg, rgba(255,255,255,.55), rgba(255,255,255,.12))`, 1px border `rgba(28,28,28,.1)`, radius 26px, inset white top highlight + soft drop shadow. On hover: lift `translateY(-6px)`, border turns faint red.
- Dark ink card: background `#161414`, border `rgba(237,230,216,.07)`, radius 28–36px, radial red glow in a corner (`radial-gradient(... rgba(214,58,46,.38), transparent 70%)`).
- Pill buttons (`border-radius: 999px`), primary is red on cream or cream on dark; hover swaps to `#e0574d`.
- Easing: `cubic-bezier(.2,.7,.2,1)` and `cubic-bezier(.23,1,.32,1)`.
- Hover effects only inside `@media (hover: hover) and (pointer: fine)`.
- Every animation is disabled under `@media (prefers-reduced-motion: reduce)`.
- Visible focus rings: `outline: 2px solid #e0574d; outline-offset: 3px`.

**Breakpoints:** 1100px (service grid 2 columns), 960px (hero stacks to one column), 900px (cases, writing, contact stack), 800px (mobile nav, single-column services), 480px (smallest phones).

---

## 5. Global layout pieces

### Header (client component)
- Floating **capsule header**: sticky, `top: 14px`, height 64px, rounded pill, width `calc(100% - 2 * var(--gutter))`, semi-transparent cream.
- After scrolling 12px it gets class `is-scrolled`: frosted glass (`backdrop-filter: saturate(160%) blur(18px)`), white border, shadow, height 58px.
- Left: logo text **"SA."** (the dot is red, 24px, weight 900).
- Nav: Services (`/services`), Work (`/#work`), About (`/about`), Blog (`/blog`), uppercase 12px bold. Current page gets `aria-current="page"` and turns red.
- Right: dark pill CTA **"Start a project ↗"** linking to `/#contact`.
- Under 800px: nav and CTA hidden, a hamburger (`Menu`/`X` icons) opens a rounded dropdown panel with the same links; the last link is red. Proper `aria-expanded` and `aria-controls`.

### Footer
Dark charcoal bar, small uppercase text: `© {year} Sajjad Ahmad` · links Services / About / Blog / Locations · icon links GitHub, LinkedIn, Email, Phone. Stacks vertically on mobile. Add top margin when a page doesn't end with the contact card.

### Chat assistant
- `ChatTooltip`: floating dark pill bubble "✨ Chat with AI Assistant!" at bottom-right with a gentle floating animation and an ✕ close button; auto-hides after 10 seconds.
- A round 60px bot-icon overlay sits over the Qualzo widget button with `pointer-events: none` so clicks pass through.

---

## 6. Homepage (`app/page.tsx`) — sections in order

Add `ProfilePage` JSON-LD (only on the homepage) linking to `#person` and `#website`.

### 6.1 Hero (`section#top.hero`)
- Two-column grid `minmax(0,1.4fr) minmax(0,1fr)`; no forced full-screen height. Small top padding (`clamp(20px,3vw,44px)`) so content starts right under the header.
- **The CTA button must be visible on the first screen on laptops (e.g. 1366×650).** Achieve this with height-aware sizing:
  - h1: `font-size: clamp(44px, min(8.6vw, 14svh), 140px); line-height: .9; letter-spacing: -.08em`
  - intro: `font-size: clamp(17px, min(1.8vw, 3svh), 23px)`
  - spacing between blocks uses `svh` clamps
  - portrait width `min(420px, 60svh)`
- Left column content:
  - Eyebrow (red): **AI ENGINEER · ISLAMABAD, PAKISTAN**
  - H1: **"Your AI demo"** / line break / red: **"deserves to ship."**
  - Intro: "I turn AI ideas into production agents, RAG systems and automations that run every day, not just on demo day."
  - Actions: red button **"Let's work together ↗"** → `#contact`; underlined text link **"View selected work ↘"** → `#work`.
- Right column: portrait `figure.portrait` (aspect 4:5, radius 28px, dark background, faint grid texture via `::before`, bottom dark gradient via `::after`, big soft shadow). Image `object-position: 50% 12%`, `priority`. Hover lifts the card and zooms the photo slightly.
- ≤960px: single column, photo centred **above** the text (max 340px, 280px under 800px, 240px under 480px), h1 `clamp(44px, 11vw, 96px)`. ≤480px: h1 `clamp(40px,13vw,54px)` and buttons full width.

### 6.2 "Crime-scene tape" tech marquee
Two full-width tapes crossing in an X (`rotate(-3.5deg)` red tape in front, `rotate(3.5deg)` charcoal tape behind), each with diagonal striped edges. Each tape scrolls infinitely in opposite directions (45s / 55s, list rendered twice and translated -50% for a seamless loop), pauses on hover. Items (emoji + uppercase name, separated by ✦):
🐍 Python, 🔥 PyTorch, 🧠 TensorFlow, 🤗 HuggingFace, 🔗 LangChain, 🦙 LlamaIndex, ⚡ FastAPI, 🐳 Docker, 📊 Scikit-learn, 💬 SpaCy, 👁️ YOLO, 📷 OpenCV, ☁️ AWS, 🔀 Git, 🔢 NumPy, 🐼 Pandas. The back tape is `aria-hidden`.

### 6.3 Services (`#services`) — "What I do"
Heading: **"Focused expertise."** / red **"Useful outcomes."** with side text "From a first idea to a dependable deployed system, I work across the full AI stack so every piece connects."
3-column grid of glass cards (2 columns 801–1100px, 1 column under 800px). Each card links to `/services/{slug}` and has: an outlined giant number (text-stroke, fills red on hover), an arrow icon that nudges up-right on hover, title, description, pill tags, and a red gradient line that grows across the top on hover.

| # | slug | Title | Description | Tags |
|---|---|---|---|---|
| 01 | generative-ai | Generative AI systems | LLM-powered chatbots, RAG pipelines, and agentic workflows tailored to your business logic and data. | LLMs · RAG · Agents |
| 02 | computer-vision | Computer vision | Object detection, image classification, OCR, and real-time vision systems using YOLO, CNNs, and OpenCV. | YOLO · PyTorch · OCR |
| 03 | production-apis | Production APIs | Scalable FastAPI backends that connect trained models to products, containerized with Docker and ready for AWS. | FastAPI · Docker · AWS |
| 04 | ml-engineering | ML engineering | End-to-end data preparation, training, evaluation, optimization, and deployment for reliable machine learning. | Python · TensorFlow · Scikit-learn |
| 05 | ai-product-delivery | AI product delivery | Clear milestones, rapid iteration, and measurable outcomes from an initial concept to a deployed intelligent solution. | Scope · Build · Ship |
| 06 | model-optimization | Model optimization | Fine-tuning, prompt engineering, evaluation workflows, and inference improvements for accurate and efficient AI. | LoRA · QLoRA · Evaluation |

### 6.4 Selected work (`#work`) — sticky stacking case studies
Heading: **"Projects that"** / red **"shipped."**, side text "AI/ML solutions built for production use — from computer vision systems to LLM-powered agents and RAG pipelines."
Each project is a dark card (`#161414`, radius 32px, min-height 540px, two columns `1.15fr 1fr`) with `position: sticky; top: calc(104px + var(--i) * 16px)` so cards stack on scroll.
- Left: index "01 / 06", category pill, big title, description, divider, red "OUTCOME" label + outcome text, cream pill **"View project ↗"** (opens in a new tab).
- Right ("HOW IT WORKS" visual): red radial glow + fading grid; the project's pipeline steps as glass nodes on a vertical rail with numbered labels (01, 02…); the last node is red; a glowing orange pulse dot travels down the rail on a loop.
- ≤900px: single column, not sticky.

| Category | Title | Flow steps | Description | Outcome | Link |
|---|---|---|---|---|---|
| Generative AI · Voice | AI Voice Call Agent | Speech-to-text → LLM + memory → Voice reply | Real-time voice agent combining speech-to-text, LLMs, text-to-speech, and conversational memory. | End-to-end conversational AI workflow for voice calls. | https://drive.google.com/file/d/1M4A1Qn5exDoYM34kARs2IpG6EEYuvJZh/view |
| Computer Vision · Detection | Automatic License Plate Recognition | Vehicle image → YOLO detect → EasyOCR → Plate data | Vehicle license plate detection and extraction using YOLO object detection and EasyOCR. | Automated license plate detail parsing pipeline. | https://www.awesomescreenshot.com/video/54841618?key=92dc04fd65f5a9d743cd25fe95125412 |
| Computer Vision · Real-time | Traffic Light Detection System | Video stream → Custom YOLO → Light state | Real-time traffic light detection and state recognition for intelligent transportation systems. | Low-latency video stream inference with a custom-trained YOLO model. | https://www.awesomescreenshot.com/video/54840783?key=d977f0332f7983810b68fa89cdd280ac |
| B2B · Platform | Lead Finder Service Intelligence | Google Maps → Website audit → Lead score | Asynchronous lead-generation platform that discovers Google Maps listings and analyzes website gaps. | Opportunity scoring dashboard with export capabilities. | https://github.com/sajjadxdev |
| Fintech · Data | GulelX Crypto Market Scanner | Binance WS → Metrics engine → SSE dashboard | High-frequency scanner streaming real-time metrics for 300+ USDT pairs via Binance APIs and WebSockets. | Thread-safe, SSE-based market intelligence system. | https://github.com/sajjadxdev/Voiltile_coin/ |
| Education · RAG | AI Academic Quiz & RAG Platform | Course docs → ChromaDB → Groq LLM → Quiz | Modular RAG backend using ChromaDB and Groq LLM to generate context-aware academic quizzes. | Productionized quiz APIs with Supabase, Docker, Nginx, and a Flutter app. | https://github.com/sajjadxdev |

### 6.5 About (`#about`) — sticky profile + timeline
Background `#e3dac9`, two columns.
- Left (sticky at 110px): label "THE PERSON BEHIND THE WORK", heading **"Technical depth."** / red **"Human communication."**, then a dark **profile card**: 72px round avatar with red ring, name "Sajjad Ahmad", role "AI Engineer · Islamabad, PK", a status row with a pulsing green dot "Currently AI Engineer at **Apptex Software Solution**", focus pills (Generative AI, Agentic AI, RAG, Computer Vision, APIs, Deployment), and two buttons "Let's talk ↗" (cream, → #contact) and "See my work" (→ #work).
- Right: large lead paragraph "I'm Sajjad Ahmad, an AI Engineer based in Islamabad. I turn complex AI capabilities into clear, maintainable products teams can actually use." then "My work spans Generative AI, Agentic AI, RAG, computer vision, backend APIs, and deployment. I care about clean architecture, measurable performance, and handing over systems that keep working after launch."
- "EXPERIENCE" vertical timeline (rail with dots; the current job has a pulsing red dot, a dark card and a red "NOW" badge; other cards are glass and slide right on hover):
  1. AI Engineer — Apptex Software Solution — Aug 2025 – Present
  2. Machine Learning Trainee — ML1 Pvt Ltd — Apr 2025 – Jun 2025
  3. Chatbot Developer — INNOVATION.TECH — Jan 2025 – Apr 2025
  4. Generative AI & ML Intern — VersatileSoft — Apr 2023 – Oct 2024

### 6.6 Writing — latest articles
Heading: **"Notes from"** / red **"the build."** with "All articles ↗" link to `/blog`. Uses the 5 newest posts (sorted by `publishedAt` desc):
- Left: dark featured card for the newest post (red "LATEST" badge, read time, title, 3-line-clamped excerpt, 3 tag pills, cream "Read article ↗" pill).
- Right: editorial list of the next 4 posts (date "Nov 20, 2026 · 9 min read", bold title, arrow that turns red and nudges on hover), separated by hairlines.

### 6.7 Contact (`#contact`)
Large dark card (radius 36px, red + orange corner glows), two columns:
- Left: label "HAVE A PROJECT IN MIND?", H2 "Let's turn the idea" / red "into a system.", lead "Tell me where your team loses time. You'll get a clear technical direction, realistic milestones, and a practical next step." and a numbered steps list: 01 Send me your idea or problem · 02 We agree scope, timeline & pricing · 03 I start building your AI solution.
- Right: big cream CTA tile "**Start a conversation** — Opens an email to sajjadxdev@gmail.com" (`mailto:` with subject "Project inquiry"), a pulsing-dot line "Usually replies within ~12 hours", and a 2×2 grid of channel tiles: Email, LinkedIn (in/sajjadxdev), Phone (+92 316 6400174), GitHub (sajjadxdev). Single column under 900px.

Then the Footer.

---

## 7. Services pages

### `/services`
Metadata title "AI Development Services | Sajjad Ahmad — AI Engineer". Hero + grid of 10 service cards (lucide icon, title, description, 4 feature bullets, link to detail page), plus BreadcrumbList JSON-LD.

The 10 services (slug → page title):
1. `ai-agent-development` → AI Agent Development Services (icon Bot)
2. `rag-development` → Custom RAG Development Services (Database)
3. `generative-ai` → Generative AI Development Services (Sparkles)
4. `mcp-development` → Model Context Protocol (MCP) Server Development (Wrench)
5. `ai-automation` → AI Automation Services (Layers)
6. `computer-vision` → Computer Vision & Multimodal AI Services
7. `production-apis` → Production AI API Development
8. `ml-engineering` → Machine Learning Engineering Services
9. `ai-product-delivery` → AI Product Delivery
10. `model-optimization` → AI Model Optimization & Fine-Tuning

### `/services/[slug]`
Static generation via `generateStaticParams`; `generateMetadata` with canonical URL and Open Graph. Data comes from a details map (title, description, features) plus `SERVICE_EXTRAS`:
```ts
type ServiceExtra = {
  deliverables: string[];          // ~6 concrete deliverables
  techStack: string[];
  relatedProject?: { name: string; summary: string };
  faqs: { question: string; answer: string }[];   // ~5 FAQs, answer-first, 60–90 words
};
```
Page sections: hero (eyebrow, H1, description, CTA) → "What you get" deliverables (secondary background) → tech stack pills → related project case → FAQ list → "Related reading" links to relevant blog posts → contact section "Let's talk about your project." JSON-LD: `Service` (provider = Person), `FAQPage`, `BreadcrumbList` (Home › Services › Service).

Write FAQs answer-first and honest (no invented prices or guarantees). Example for AI agents: difference between agent and chatbot, CRM integration, how to stop harmful actions (tool schemas, least privilege, human approval, step caps, logging), build time drivers, which LLM is best (no single best; compare OpenAI/Anthropic/Groq on real workflows; keep model swappable).

---

## 8. Locations pages (local SEO)

### `/locations`
Title "AI Engineering Service Regions | Sajjad Ahmad". Cards for 5 markets: **islamabad, pakistan, uae, germany, usa**, each linking to its page.

### `/locations/[slug]`
Data type:
```ts
type LocationExtra = {
  intro: string;
  timezone: { label: string; overlap: string };       // e.g. "PKT (UTC+5), same zone as you"
  compliance: { title: string; body: string }[];       // local data/AI rules
  useCases: { title: string; body: string }[];         // 4 market-specific AI use cases
  engagement: string[];                                 // how we work together
  faqs: { question: string; answer: string }[];
};
```
Sections: H1 + intro → time-zone overlap card → "AI use cases for this market" → "Data protection & AI rules I design for" → "How we work together" → FAQ → links to the other locations. JSON-LD: `Service` with `areaServed`, `FAQPage`, `BreadcrumbList`.
Compliance topics to cover accurately (check current status before publishing): Pakistan's Personal Data Protection Bill (still a draft as of Nov 2026) and PECA 2016; UAE PDPL; EU GDPR and EU AI Act for Germany; US state privacy laws such as CCPA and its automated decision-making rules. Always add "your legal team confirms the final position".
Islamabad specifics: in-person kickoff possible, PKR or USD billing, Roman Urdu WhatsApp assistants, policy/circular search for institutions, CCTV analytics on-premise, upskilling developers during delivery.

---

## 9. About page (`/about`)
Title "About Sajjad Ahmad | AI Engineer in Islamabad". Eyebrow, big H1, intro ("Based in **Islamabad, Pakistan** and available for remote engineering projects worldwide. Specializing in Generative AI, Agentic AI, custom RAG architectures, LLM applications, and robust backend microservices."). A large card with avatar, name, "AI Engineer", map-pin location "Islamabad, PK (Remote Worldwide)", social icons, and a 2×2 grid of skill tiles: Agentic AI Systems (Autonomous goal seeking & tool calling), Custom RAG Pipelines (Answers grounded in your own documents), Model Context Protocol (Custom MCP server & API integrations), Computer Vision & NLP (Object detection, OCR & text classification). Then sections on experience, skills and education. JSON-LD: `Person` + `BreadcrumbList`.

---

## 10. Blog

### Data model (`app/blog/data/posts.ts`)
```ts
export interface BlogPost {
  slug: string;
  title: string;            // ≤ 60 chars, question or "X vs Y" style
  excerpt: string;          // 140–160 chars, used as meta description
  coverImage: string;       // "" allowed
  publishedAt: string;      // "YYYY-MM-DD"
  updatedAt: string;
  readTime: string;         // "8 min read"
  author: { name: string; role: string; image: string; github: string; linkedin: string };
  tags: string[];
  tableOfContents: { id: string; title: string }[];   // ids match <h2 id> in content
  faqs: { question: string; answer: string }[];       // 5–6 FAQs
  content: string;          // HTML string (template literal), Tailwind classes inline
}
export const BLOG_POSTS = [...CORE_POSTS, ...POSTS_AGENTS, ...POSTS_TECHNICAL, ...POSTS_BUSINESS];
```
Author block is always: Sajjad Ahmad, "AI Engineer — Generative AI, Agentic AI & RAG", `/sajjad-ahmad-avatar.jpg`, GitHub and LinkedIn URLs.

### Article writing format (GEO / SEO)
Every article follows this structure:
1. A **"Direct Answer"** box first (`<div id="direct-answer" class="my-6 p-6 rounded-2xl bg-card border border-primary/30 shadow-sm">`) answering the main question in 50–80 words.
2. Intro paragraph (`text-lg leading-relaxed text-muted-foreground mb-8`).
3. Question-style H2s (`class="text-2xl sm:text-3xl font-bold text-foreground mt-12 mb-6 tracking-tight"` with `id` matching the TOC), each starting with a 1–2 sentence direct answer, then detail.
4. Lists (`list-disc list-inside space-y-3 text-muted-foreground mb-8 pl-4`), comparison tables (inside `overflow-x-auto`, bordered cells `p-4 border border-border`), code blocks in `<pre class="bg-card border border-border rounded-xl p-4 overflow-x-auto text-sm">`.
5. External sources linked with `target="_blank" rel="noopener" class="text-primary underline"` (official docs, papers, specs); internal links to other posts and `/services/*` with `class="text-primary font-semibold hover:underline"`.
6. A closing CTA box ("Need help building this?" + button to `/#contact`).
7. Facts must be researched and cited; never invent statistics, client results or personal experiences. Escape `${` as `\${` inside template literals.

### Current articles (20)
- How Can AI Agents Increase Sales for Your Business?
- What Is Agentic AI? A Complete Guide for Businesses
- What Is Model Context Protocol (MCP)? A Complete Guide
- Andrew Ng on the Biggest Opportunities in AI
- How to Build an AI Agent: A Step-by-Step 2026 Guide
- RAG vs Fine-Tuning: Which Should You Use in 2026?
- Best AI Agent Frameworks in 2026: An Honest Comparison
- What Is RAG? Retrieval-Augmented Generation Explained
- How to Reduce LLM Hallucinations: A Practical Guide
- MCP vs UTCP: Which AI Tool Calling Protocol Should You Use?
- Best Vector Database for RAG: 2026 Comparison Guide
- How to Deploy an ML Model with FastAPI and Docker
- How to Train a Custom YOLO Model: YOLO26 Guide (2026)
- How AI Voice Agents Work: STT, LLM, TTS and Realtime
- How to Evaluate LLM Applications: A Practical Guide
- How Much Does It Cost to Build an AI App or AI Agent?
- AI Chatbot for Customer Support: A Practical 2026 Guide
- How to Reduce LLM API Costs: 8 Practical Techniques
- How to Hire an AI Engineer: Skills, Tests and Red Flags
- Generative AI Use Cases for Small Business (2026 Guide)

### `/blog`
Title "AI & ML Insights Blog | Sajjad Ahmad — AI Engineer". Big H1, a featured (newest) post card, then all posts sorted newest first with date, read time, tags.

### `/blog/[slug]`
`generateStaticParams` + `generateMetadata` (title, excerpt, canonical, Open Graph article with published/modified times). Layout: breadcrumb banner, tags, H1, author row with avatar, date, read time; on desktop a sticky right sidebar (`top-28`) with the table of contents and an "About the Author" card (E-E-A-T); article body rendered with `dangerouslySetInnerHTML` inside a `prose` wrapper; FAQ section; author signature at the end; related articles (3 others) for internal linking. JSON-LD: `BlogPosting` (author Person, publisher, image, dates, mainEntityOfPage) + `FAQPage`.

---

## 11. SEO, GEO and indexing

- **Root metadata:** title "Sajjad Ahmad | AI Engineer — Generative AI, Agentic AI & RAG"; description "Sajjad Ahmad is an AI Engineer in Islamabad building production Generative AI, AI agents, RAG pipelines and computer vision systems. Remote worldwide."; `metadataBase` = site URL; canonical `/`; keywords (AI Engineer, Generative AI Engineer, Agentic AI Developer, RAG Developer, LLM Developer, AI Engineer Islamabad/Pakistan, Remote AI Engineer, MCP Developer, Computer Vision Engineer); Open Graph + Twitter `summary_large_image` with `/og.png`; robots index/follow with `max-image-preview: large`; Google verification `google4ecb985a18b1e318`.
- **Root JSON-LD `@graph`:** `Person` (`@id #person`, jobTitle, image, email, telephone, Islamabad address, sameAs GitHub/LinkedIn, `knowsAbout` list) and `WebSite` (`@id #website`, publisher → #person).
- **Every page:** unique title and description, canonical URL, one H1, BreadcrumbList JSON-LD on sub-pages, descriptive `alt` text.
- **`/robots.txt`:** allow all except `/api/`; explicitly allow AI crawlers GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, Bingbot; point to the sitemap.
- **`/sitemap.xml`:** home (priority 1, with portrait image), about, services, locations, blog (lastModified = newest post update), the 10 services, 5 locations and every blog post (lastModified = `updatedAt`). Keep a `SITE_UPDATED` constant to bump when pages change.
- **`/llms.txt`:** Markdown summary of who Sajjad is, contact links, key pages, all services and all articles with excerpts (newest first); `force-static`, `Content-Type: text/markdown`.
- **IndexNow:** `POST /api/indexnow` sends the main URLs to `https://api.indexnow.org/IndexNow` with key file `/8c238e7bb3b94808b74bd61633f5ec31.txt`. (Generate the URL list from the same data as the sitemap so slugs never go stale.)
- **Analytics:** Vercel Analytics in the root layout; Google Search Console for search traffic.

---

## 12. Python RAG chatbot backend (`/backend`)

- **`seed_db.py`:** creates a persistent ChromaDB collection named `portfolio` (`hnsw:space = l2`), clears old documents, and inserts short factual documents about Sajjad: profile, skills, each project, experience, education, contact details. Run once: `python seed_db.py`.
- **`main.py` (FastAPI):**
  - CORS for localhost:3000, `sajjadahmad.site`, `www.sajjadahmad.site` and the Vercel domain (avoid `*` together with credentials in production).
  - `GET /` → health status with collection name and document count.
  - `POST /api/search` `{query, top_k}` → nearest documents with distances.
  - `POST /api/chat` `{message, history[]}` → `{reply, retrieved_context, distance_score, status}`:
    1. Reject empty messages (400). If the collection is empty, return status `empty_db`.
    2. Retrieve the top 3 chunks.
    3. **Guardrail:** if the best L2 distance > `1.35`, return a polite fallback ("I don't have information about that in Sajjad's portfolio… email sajjadxdev@gmail.com"), status `not_found_fallback`.
    4. If `GROQ_API_KEY` is set, call Groq (`llama-3.3-70b-versatile`) with a system prompt: "You are Sajjad Ahmad's official AI Portfolio Assistant. Answer concisely and naturally using ONLY the retrieved context; never invent facts; if unsure, point to email." Include recent chat history.
    5. If Groq is unavailable, return the best retrieved document directly.
- **`requirements.txt`:** fastapi, uvicorn, pydantic, chromadb, python-dotenv, httpx.
- Run: `uvicorn main:app --reload --port 8000`.
- Never commit `backend/.env` or the `myenv` virtualenv (already in `.gitignore`).

---

## 13. Quality bar and acceptance checklist

- `npm run build` passes with no type errors; all dynamic routes are statically generated.
- No horizontal scrolling at 320px; hero CTA visible above the fold on a 1366×650 laptop; tapes, sticky cases and timeline work on mobile.
- Lighthouse: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO 100.
- Keyboard navigable with visible focus; correct heading order; `aria-label`s on icon links; reduced-motion respected.
- Every page has unique metadata, a canonical URL and valid JSON-LD (check with Google's Rich Results Test).
- Sitemap, robots.txt and llms.txt reachable and correct; new blog posts appear automatically in the sitemap, llms.txt, blog index and homepage "Writing" section.
- Content is truthful: no invented metrics, testimonials or client names.

## 14. Workflow for adding a new blog post
1. Research the topic with current, citable sources.
2. Add a `BlogPost` object to the right `posts-*.ts` file (newest date in `publishedAt`).
3. Follow the article format in section 10; link 2–4 internal posts/services and cite external sources.
4. `npm run build`, then commit and push to `main` (Vercel deploys automatically).
5. In Google Search Console, use URL Inspection → Request indexing for the new URL.
