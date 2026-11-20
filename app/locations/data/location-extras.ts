// Market-specific content for /locations/[slug]. Regulatory statements verified November 2026;
// re-check dates (EU AI Act, UAE PDPL regulations, Pakistan PDP bill, CCPA ADMT) before relying on them.
export type LocationExtra = {
  intro: string;
  timezone: { label: string; overlap: string };
  compliance: { title: string; body: string }[];
  useCases: { title: string; body: string }[];
  engagement: string[];
  faqs: { question: string; answer: string }[];
};

export const LOCATION_EXTRAS: Record<string, LocationExtra> = {
  islamabad: {
    intro:
      "In Islamabad I build production AI systems (RAG knowledge bases, tool-using agents, voice bots and computer vision pipelines) for startups, software houses and institutions in the capital and Rawalpindi. Because I live here, we can do a kickoff or architecture workshop face to face, then keep the build moving remotely. My current role is AI Engineer at Apptex Software Solution, and earlier projects include a YOLO and EasyOCR licence-plate reader and a ChromaDB-plus-Groq quiz generator. For local teams that means fewer handoffs, shared working hours, and an engineer who can sit with your developers when a model behaves strangely in production.",
    timezone: {
      label: "PKT (UTC+5), same zone as you",
      overlap:
        "We share the full Islamabad working day, so a 10:00 standup or a 16:00 debugging session needs no time-zone maths, and Pakistan does not shift its clocks for daylight saving.",
    },
    compliance: [
      {
        title: "No federal data protection act yet",
        body: "As of November 2026, Pakistan's Personal Data Protection Bill is still a draft; it has been revised several times but not passed by Parliament. I don't treat that as a free pass. For Islamabad clients I design as if a GDPR-style law were in force: a written list of what personal data the system touches, minimal retention, and deletion on request, so the system needs little rework once the bill passes. Your legal team confirms the final position.",
      },
      {
        title: "PECA 2016 still applies",
        body: "The Prevention of Electronic Crimes Act 2016 already criminalises unauthorised access to information systems and data. In practice that shapes how I build: role-based access to vector stores and admin panels, API keys kept out of source code, and access logs you can produce if something goes wrong. Which logs you must retain, and for how long, is a question for your counsel.",
      },
    ],
    useCases: [
      {
        title: "Policy and circular search for institutions",
        body: "Universities, think tanks and regulated firms in the capital sit on years of notifications, SROs and internal circulars. A retrieval system that cites the exact page and date lets staff answer \"what is the current rule?\" without digging through shared drives.",
      },
      {
        title: "Roman Urdu WhatsApp assistants",
        body: "Many Islamabad customers type Urdu in Latin script. I prototype assistants that handle Roman Urdu and English in the same chat, test them against real message samples, and route anything uncertain to a human agent instead of guessing.",
      },
      {
        title: "Camera analytics for campuses and parking",
        body: "Building on my licence-plate and traffic-light detection work, I can set up YOLO-based gate logging or occupancy counting on existing CCTV, with on-premise inference so footage does not leave your site and alerts arrive in a simple dashboard your guards already use.",
      },
      {
        title: "AI upskilling alongside delivery",
        body: "For software houses adding AI to their offer, I can pair with your developers during the build so the team learns evaluation, prompt versioning and RAG debugging on your own codebase rather than in a separate course.",
      },
    ],
    engagement: [
      "An in-person discovery session in Islamabad or Rawalpindi when it helps; remote calls otherwise.",
      "Short written scope with milestones before any code, agreed in PKR or USD as suits your accounts.",
      "Work happens in your GitHub or GitLab organisation, with a demo at the end of each milestone.",
      "Handover includes a runbook, environment setup notes and a walkthrough with whoever will maintain the system.",
      "Optional maintenance after launch, scoped separately so you are never locked in.",
    ],
    faqs: [
      {
        question: "Can we meet in person in Islamabad?",
        answer:
          "Yes. I am based in Islamabad, so a face-to-face kickoff, architecture review or team workshop in the city is straightforward to arrange. After that, most of the build runs remotely through your repository and a regular call, which keeps things efficient for both sides while leaving room to meet again at key milestones such as the production launch.",
      },
      {
        question: "Can the AI system run on our own servers instead of a foreign cloud?",
        answer:
          "Yes, where the workload allows it. Smaller open-weight models and embedding models can run on a local GPU server or a Pakistani data centre, with the vector database alongside. Very large models usually need a hosted API. I outline both options with the trade-offs in accuracy, latency and running cost so you can decide what fits your data and budget.",
      },
      {
        question: "Do you work with government or semi-government bodies?",
        answer:
          "I can, through whatever contracting route your organisation uses, often via a registered vendor or partner firm. I have no public-sector projects to list on this site yet, so I would rather show you the relevant technical work, such as document retrieval and computer vision, and agree a small pilot than claim experience I do not have.",
      },
      {
        question: "How long does a first RAG prototype usually take?",
        answer:
          "It depends mostly on the state of your documents. Clean PDFs with a clear owner can produce a working prototype quickly, while scanned files, mixed Urdu and English, or scattered sources need OCR and cleanup first. After a short look at a sample of your data I give a milestone plan rather than a blanket timeline.",
      },
    ],
  },

  pakistan: {
    intro:
      "Across Pakistan I deliver Generative AI applications, custom RAG pipelines and MCP integrations for software houses, fintechs, e-commerce brands and enterprises in Lahore, Karachi, Peshawar and beyond, entirely remotely from Islamabad. The local market has its own constraints: customers who switch between Urdu, Roman Urdu and English mid-sentence, cost-sensitive budgets where every API call matters, and documents that are often scanned rather than digital. My work spans voice agents, document OCR, a real-time crypto market scanner and an academic RAG platform, so I design for these realities from the first sprint, choosing model sizes and hosting that keep monthly running costs predictable in rupee terms.",
    timezone: {
      label: "PKT (UTC+5), nationwide",
      overlap:
        "Pakistan runs on a single time zone with no daylight saving, so a team in Karachi, Lahore or Quetta has exactly the same working hours as I do in Islamabad, all year round.",
    },
    compliance: [
      {
        title: "Data protection law is pending",
        body: "Pakistan has no enacted comprehensive personal data protection law as of November 2026; the Personal Data Protection Bill remains a draft, and a National Data Governance Policy was put out for consultation in mid-2026. For companies nationwide I build consent records, data maps and deletion routines now, so you are not retrofitting them under deadline later. Your lawyers confirm what applies today.",
      },
      {
        title: "National AI Policy 2025",
        body: "The federal cabinet approved the National Artificial Intelligence Policy 2025 in July 2025. It is a policy, not a binding AI law: it focuses on skills, an AI fund, centres of excellence and public-sector adoption. For a private project it changes little legally today, but it is a useful reference if you are applying for related programmes or selling AI into government.",
      },
      {
        title: "Sector regulators still bite",
        body: "Banks, payment companies and telecoms answer to their own regulators, who may set rules on outsourcing, cloud use and customer data. I don't interpret those rules for you; I ask for your compliance team's requirements at the start and build them into hosting choices, audit logging and access controls, rather than discovering them at go-live.",
      },
    ],
    useCases: [
      {
        title: "Urdu and English customer support bots",
        body: "Support agents that understand Urdu script, Roman Urdu and English, answer from your FAQ and order data, and hand off to a human with the conversation summary attached. Built for WhatsApp or web chat, with evaluation sets drawn from your real tickets.",
      },
      {
        title: "Invoice and form extraction",
        body: "OCR plus LLM pipelines that read scanned invoices, delivery challans or KYC forms and turn them into structured rows for your ERP, flagging low-confidence fields for a clerk to review instead of silently guessing, which matters when Urdu stamps and handwriting overlap the print.",
      },
      {
        title: "AI features for software house products",
        body: "Many Pakistani software houses sell to foreign clients. I can build the AI component (RAG, agents or MCP servers) as a white-label subcontractor inside your repository, following your coding standards, branching model and review process, so the work looks like your own team wrote it.",
      },
      {
        title: "Lead discovery for sales teams",
        body: "Based on my Lead Finder project, a pipeline that finds businesses on Google Maps, audits their websites for gaps and scores them, giving agencies and B2B sellers a ranked prospect list instead of raw scraped data.",
      },
    ],
    engagement: [
      "Discovery and weekly reviews over Google Meet or Zoom, with WhatsApp for quick questions if your team prefers it.",
      "Fixed-scope milestones or a monthly retainer, invoiced in PKR or USD by agreement.",
      "Cost estimates for model API usage before build starts, so running costs are not a surprise.",
      "Code delivered to your repository with Docker setup, environment documentation and a recorded walkthrough.",
    ],
    faqs: [
      {
        question: "Do you work with companies outside Islamabad, like in Karachi or Lahore?",
        answer:
          "Yes. Most of my work with companies elsewhere in Pakistan is fully remote, using video calls, a shared repository and written updates. Because the whole country is on one time zone, there is no scheduling friction. Travel to other cities is not part of my standard arrangement, so if on-site presence is essential we would discuss it explicitly before agreeing scope.",
      },
      {
        question: "Can an AI chatbot understand Roman Urdu?",
        answer:
          "Modern multilingual models handle Roman Urdu reasonably well, but spelling varies a lot from person to person, so quality must be measured, not assumed. I build a test set from your real customer messages, compare a few models on it, and add fallback rules where accuracy is weak. You see the measured results before we decide which model goes live.",
      },
      {
        question: "How do you keep LLM costs low for Pakistani budgets?",
        answer:
          "Mainly by not sending every request to the largest model. I use caching, smaller models for routine queries, retrieval so prompts stay short, and a larger model only for the hard cases. I also estimate monthly cost from your expected traffic before we build, so the business case is checked against real numbers rather than vendor marketing pages.",
      },
      {
        question: "Can you subcontract for our software house's foreign client?",
        answer:
          "Yes. I can work under your brand inside your repository and process, with the confidentiality terms you need. You stay the client-facing party and I handle the AI engineering, from retrieval design to evaluation. I would only ask that we agree up front on who owns which deliverables and how client requirements reach me, to avoid rework.",
      },
    ],
  },

  uae: {
    intro:
      "For businesses in Dubai, Abu Dhabi and the wider GCC, I build AI sales agents, bilingual Arabic-English knowledge bases and CRM-connected automations, working remotely from Islamabad one hour ahead of Gulf Standard Time. Gulf companies often serve customers who write in Arabic, English and sometimes Hindi or Urdu, operate across mainland and free-zone entities with different data rules, and expect fast replies on WhatsApp. I design around those facts: retrieval that works across Arabic and English sources, hosting in-region where your data policy requires it, and agents that qualify leads but escalate to your team before anything is promised to a customer.",
    timezone: {
      label: "PKT (UTC+5) vs GST (UTC+4)",
      overlap:
        "Pakistan is one hour ahead of the UAE all year, as neither country uses daylight saving, so a Dubai 09:00–18:00 day is 10:00–19:00 for me: practically your whole business day overlaps.",
    },
    compliance: [
      {
        title: "UAE PDPL (Federal Decree-Law 45 of 2021)",
        body: "The federal Personal Data Protection Law applies to mainland companies, but as of November 2026 its executive regulations have not been verifiably published, so some details, including cross-border transfer mechanics, remain unclear. I design for the law's principles now: lawful basis recorded per data flow, minimal personal data in prompts, and a clear list of where data is stored. Your legal team confirms how it applies.",
      },
      {
        title: "DIFC Regulation 10 for AI systems",
        body: "Companies in the DIFC fall under the DIFC Data Protection Law No. 5 of 2020, and Regulation 10 adds specific duties for deployers and operators of autonomous and semi-autonomous systems that process personal data. For an AI project that means documenting the system's purpose, being transparent with users, and, for high-risk processing, possible certification and oversight steps your compliance team must confirm.",
      },
      {
        title: "ADGM's separate regime",
        body: "Abu Dhabi Global Market has its own Data Protection Regulations 2021, distinct from both the federal PDPL and the DIFC. If your group has entities in more than one zone, I map which entity's data each component touches so your advisers can apply the right rules, and I keep data stores separable per entity where that is required.",
      },
    ],
    useCases: [
      {
        title: "Bilingual Arabic-English RAG",
        body: "Knowledge bases that retrieve across Arabic and English documents, answer in the user's language, and cite the source passage. I test retrieval on both languages separately, because Arabic morphology and mixed-script queries are where generic setups quietly fail.",
      },
      {
        title: "WhatsApp lead qualification agents",
        body: "Agents that answer property, automotive or service enquiries, ask qualifying questions, and push structured leads into your CRM. Pricing, availability and anything contractual are handed to a named salesperson rather than generated by the model, so the agent never quotes a figure you did not approve.",
      },
      {
        title: "Voice agents for call overflow",
        body: "Drawing on my AI Voice Call Agent project, a speech-to-text, LLM and text-to-speech pipeline that answers routine calls, books appointments or captures details, and transfers to staff when a caller asks for a person or the model's confidence drops.",
      },
      {
        title: "Free-zone document processing",
        body: "Extraction pipelines for trade licences, Emirates ID scans and supplier documents that populate onboarding forms, with personal fields masked in logs, documents kept in the region you choose, and human review for anything the model is unsure about.",
      },
    ],
    engagement: [
      "Calls during your working hours, with a written summary after each one so decisions are not lost on WhatsApp threads.",
      "Contracts and invoices in USD or AED as agreed, usually milestone-based.",
      "Deployment to the cloud region your policy requires, including in-country UAE regions where the provider offers them.",
      "Bilingual test sets reviewed with your team before launch, so Arabic quality is signed off by native speakers.",
      "Full handover of code, prompts, evaluation data and admin access at the end of the engagement.",
    ],
    faqs: [
      {
        question: "Can the chatbot answer customers in Arabic?",
        answer:
          "Yes. Current large language models handle Modern Standard Arabic well and Gulf dialect reasonably, but quality varies by model and topic. I build a test set in Arabic and English from your real enquiries, measure each candidate model against it, and have native speakers on your team review results before launch. Where Arabic answers are weak, the bot escalates instead of improvising.",
      },
      {
        question: "Can our data stay inside the UAE?",
        answer:
          "It can, with some planning. Major cloud providers operate UAE regions, so the database, vector store and application can be hosted there. The sticking point is usually the language model itself: some hosted models are only available in other regions. I list which components can stay in-country and what alternatives exist, so your compliance team can choose.",
      },
      {
        question: "Do you need a UAE trade licence or local presence to work with us?",
        answer:
          "Generally I work as a remote contractor from Pakistan, invoicing your company directly, which many UAE businesses do with overseas developers. I do not have a UAE office or entity. If your procurement requires a local vendor, we can look at contracting through a partner your team already uses; your finance team will know which route fits.",
      },
      {
        question: "Can the AI agent connect to our CRM like Salesforce, HubSpot or Zoho?",
        answer:
          "Yes, where the CRM offers an API, which the major ones do. The agent can create leads, update fields, log conversations and trigger follow-up tasks. I give it the narrowest permissions it needs, log every write action, and test against a sandbox account first, so a misbehaving prompt cannot overwrite or delete records in your live CRM.",
      },
    ],
  },

  germany: {
    intro:
      "For German and European companies, I build GDPR-conscious RAG systems, MCP server integrations and agentic workflows, working remotely from Islamabad three to four hours ahead of Berlin. European teams usually ask the privacy questions first, and rightly so: where embeddings are stored, whether prompts are retained by the model provider, and how a data subject's request reaches the vector database. My default architecture answers those upfront, with self-hostable open-weight model options, EU-region hosting, and retrieval pipelines that can delete one person's data without rebuilding the whole index. Documentation is in clear English, decisions are written down, and the repository is structured so your in-house engineers can take it over.",
    timezone: {
      label: "PKT (UTC+5) vs CET (UTC+1) / CEST (UTC+2)",
      overlap:
        "In winter (CET) I am 4 hours ahead of Berlin, so your 09:00–16:00 is my 13:00–20:00; in summer (CEST, from the last Sunday in March to the last Sunday in October) the gap is 3 hours and the same window is 12:00–19:00 for me. Your whole morning and early afternoon overlaps either way.",
    },
    compliance: [
      {
        title: "GDPR: processing agreement and transfers",
        body: "Under the GDPR, a contractor who processes personal data on your behalf needs an Article 28 data processing agreement. Pakistan has no EU adequacy decision, so if I access personal data from Islamabad, your team will typically rely on Standard Contractual Clauses. To keep that surface small, I prefer working on EU-hosted environments with pseudonymised or synthetic data wherever possible. Your DPO confirms the setup.",
      },
      {
        title: "EU AI Act: what applies when",
        body: "The AI Act (Regulation 2024/1689) has applied in stages since 2025, with bans on prohibited practices applying first, from February 2025. The AI Omnibus amendment, in force since July 2026, moved stand-alone high-risk obligations (such as hiring or credit scoring) to 2 December 2027 and product-embedded ones to 2 August 2028. Most RAG assistants are not high-risk, but your counsel should classify each use case.",
      },
      {
        title: "Transparency for chatbots and generated content",
        body: "The AI Act's transparency rules expect users to know they are talking to an AI and expect synthetic content to be marked. Practically, I build in a visible AI disclosure, label generated text or images where relevant, and keep logs of model version and sources per answer, which also supports the human oversight your team may need to demonstrate.",
      },
    ],
    useCases: [
      {
        title: "Self-hosted RAG on EU infrastructure",
        body: "A retrieval assistant running on German or EU-region servers, using open-weight models where accuracy allows, so prompts and documents never reach a non-EU model provider. Includes per-document access control and deletion that propagates to the vector index.",
      },
      {
        title: "Internal knowledge for Mittelstand firms",
        body: "Engineering manuals, service reports and supplier specs, often in German and English, made searchable with cited answers. I evaluate retrieval separately for German queries, since compound nouns and technical terms break naive chunking and keyword matching.",
      },
      {
        title: "MCP servers for internal tools",
        body: "Model Context Protocol servers that give AI assistants controlled, logged access to your ticketing, wiki or ERP data, with read-only scopes by default and explicit approval steps for any action that writes or sends data.",
      },
    ],
    engagement: [
      "A weekly call in your morning, plus written async updates in English; I can join your Slack or Teams.",
      "A data processing agreement and any SCCs your legal team requires, signed before I touch personal data.",
      "Fixed-scope projects or an ongoing part-time arrangement, invoiced in EUR or USD.",
      "Architecture decisions recorded in the repository, so your auditors and future engineers can see why choices were made.",
      "Handover sessions with your team and a clean exit: credentials rotated, my access removed, everything in your accounts.",
    ],
    faqs: [
      {
        question: "Can you sign a GDPR data processing agreement?",
        answer:
          "Yes. I sign your data processing agreement under Article 28 GDPR, and where personal data would be accessed from Pakistan, the Standard Contractual Clauses your legal team selects. I would also suggest structuring the work so I rarely need real personal data at all: EU-hosted environments, pseudonymised samples and synthetic test sets keep both the risk and the paperwork smaller.",
      },
      {
        question: "Is our RAG chatbot a high-risk system under the EU AI Act?",
        answer:
          "Usually not, but it depends on the use. An assistant answering questions from your documentation is generally outside the high-risk list, while systems used for hiring, credit decisions or access to essential services fall inside it. I can describe how the system works and what it decides, but classification is a legal call your counsel or DPO should make.",
      },
      {
        question: "Can you avoid US-based model providers entirely?",
        answer:
          "Often, yes. Open-weight models can be hosted on EU servers you control, and some European providers offer hosted models. The trade-off is that the strongest proprietary models may outperform self-hosted options on complex tasks. I benchmark candidates on your own data so you can weigh accuracy against data sovereignty with evidence rather than assumptions.",
      },
      {
        question: "Do you work in German?",
        answer:
          "I work in English: calls, documentation and code reviews. The systems I build can handle German content well, since modern models and multilingual embeddings support it, and I test German retrieval quality specifically. For user-facing German text such as prompts or UI copy, I would ask a native speaker on your team to review it before launch.",
      },
    ],
  },

  usa: {
    intro:
      "For US startups and SaaS teams, I build tool-using AI agents, enterprise RAG with hybrid retrieval, and custom MCP servers in Python and TypeScript, working remotely from Islamabad with an evening-PKT overlap with your mornings. US buyers tend to move fast and judge by shipped code, so I work in short pull-request cycles your engineers can review, and I put evaluation harnesses in place early so you can see whether a prompt or model change actually improved results. Because there is no single federal privacy law, I also ask early which state laws and sector rules (health, finance, hiring) your product touches, and design logging, access and data handling to match.",
    timezone: {
      label: "PKT (UTC+5) vs ET (UTC−5 / −4) and PT (UTC−8 / −7)",
      overlap:
        "Pakistan is 10 hours ahead of New York in winter (EST) and 9 in summer (EDT), so 09:00–13:00 Eastern is 19:00–23:00 or 18:00–22:00 for me. Pacific is 13 or 12 hours behind, which leaves early-morning PT calls plus async handoffs. US clocks change on the second Sunday in March and first Sunday in November; I don't.",
    },
    compliance: [
      {
        title: "State privacy laws, led by California",
        body: "There is no comprehensive federal privacy law, so state laws such as the CCPA as amended by the CPRA set the bar. California's regulations on automated decision-making technology, finalised in 2025, apply from 1 January 2027 to businesses using ADMT for significant decisions, alongside risk-assessment duties. I design for notice, opt-out and access requests from the start; your counsel decides which states apply.",
      },
      {
        title: "HIPAA for health products",
        body: "If your product handles protected health information for a covered entity, every vendor that touches that data, including cloud and AI providers, is generally a business associate and needs a business associate agreement first. In practice I only use model APIs and hosting that will sign a BAA, keep PHI out of logs and test data, and work with de-identified samples during development.",
      },
    ],
    useCases: [
      {
        title: "Agents inside SaaS products",
        body: "Tool-calling agents that take actions in your app, such as drafting records, running reports or triaging tickets, with typed tool schemas, permission checks per tenant, and an evaluation suite that runs in CI so regressions show up before your customers see them.",
      },
      {
        title: "Hybrid search over enterprise content",
        body: "RAG combining vector and keyword retrieval with reranking, built for large, messy corpora like support tickets, contracts or product docs, with per-customer data isolation for multi-tenant SaaS and retrieval metrics you can track release to release, so search quality does not quietly degrade as content grows.",
      },
      {
        title: "Custom MCP servers",
        body: "MCP servers in TypeScript or Python that expose your API to Claude, ChatGPT or internal assistants, with scoped auth, rate limits and audit logs, so enterprise customers can connect AI tools to your platform safely.",
      },
      {
        title: "Real-time data and voice pipelines",
        body: "From my GulelX market scanner and voice agent work: streaming pipelines using WebSockets and server-sent events, or speech-to-text and LLM voice loops, built for low latency, reconnects and graceful failure under real traffic rather than demo-only performance.",
      },
    ],
    engagement: [
      "A standing call in your morning (Eastern) or early morning (Pacific), with async updates in Slack and PR descriptions otherwise.",
      "Contractor agreement and invoicing in USD; I am comfortable with your NDA, IP assignment and security questionnaire.",
      "Small, reviewable pull requests against your repo and CI, not a large drop at the end.",
      "Deployment on your AWS or other cloud accounts with Docker, using infrastructure you own.",
      "Handover with documentation, eval datasets and a recorded walkthrough so your team can extend the system.",
    ],
    faqs: [
      {
        question: "How does working with a contractor in Pakistan handle the time difference?",
        answer:
          "Well, if we plan for it. I keep a few hours of overlap with US Eastern mornings and use the rest of my day for focused work, so you often wake up to finished pull requests and a written update. Pacific teams get a shorter overlap early in their day. Urgent production issues are agreed separately, with clear expectations written into scope.",
      },
      {
        question: "Will you sign our NDA and IP assignment agreement?",
        answer:
          "Yes. Signing an NDA and assigning IP for work I produce for you is standard, and I am happy to use your templates. All code goes into repositories and cloud accounts you own from day one, so there is never a question of who holds the work. I would just flag any clause that conflicts with open-source licences we plan to use.",
      },
      {
        question: "Can you build a HIPAA-compliant AI feature?",
        answer:
          "I can build the technical safeguards HIPAA expects, such as access controls, audit logs, encryption and BAA-covered vendors, but compliance is an organisational status your company and counsel determine, not something a developer can certify. During development I work with de-identified or synthetic data, and I only route PHI through model providers and hosting that have signed BAAs with you.",
      },
      {
        question: "Which LLM providers do you work with?",
        answer:
          "I am provider-agnostic and choose per task: hosted models from the major labs, fast inference providers like Groq, and open-weight models you can self-host. For most products I set up an abstraction and an evaluation set, then compare two or three models on cost, latency and accuracy using your data, so switching later is a configuration change, not a rewrite.",
      },
    ],
  },
};
