export type ServiceExtra = {
  deliverables: string[];
  techStack: string[];
  relatedProject?: { name: string; summary: string };
  faqs: { question: string; answer: string }[];
};

export const SERVICE_EXTRAS: Record<string, ServiceExtra> = {
  "ai-agent-development": {
    deliverables: [
      "Agent design document covering goals, tools, permissions and failure handling",
      "Working agent with function calling wired to your APIs and data sources",
      "Guardrails: input validation, tool-call limits and human-approval steps for risky actions",
      "Conversation and tool-call logging so every agent decision can be traced",
      "Evaluation set of real tasks used to test the agent before launch",
      "Deployment as a Dockerized API plus handover documentation",
    ],
    techStack: ["Python", "LangChain", "LlamaIndex", "OpenAI / Anthropic / Groq APIs", "FastAPI", "ChromaDB", "PostgreSQL", "Docker"],
    relatedProject: {
      name: "AI Voice Call Agent",
      summary:
        "A real-time voice agent that chains speech-to-text, an LLM with conversational memory and text-to-speech into one end-to-end call workflow.",
    },
    faqs: [
      {
        question: "What is the difference between an AI agent and a chatbot?",
        answer:
          "An AI agent can take actions, while a chatbot mainly answers questions. A chatbot replies with text from a model or a script. An agent plans multi-step tasks, decides which tool to call, such as a CRM API, a database query or a web search, reads the result and continues until the goal is reached. That ability to act is why I design agents with permission limits, logging and human approval for anything that changes real data.",
      },
      {
        question: "Can an AI agent integrate with our existing CRM?",
        answer:
          "Yes, an AI agent can integrate with most CRMs that expose an API, such as HubSpot, Salesforce or a custom system. I wrap the CRM endpoints the agent needs, like looking up a contact, logging a call or updating a deal stage, as defined tools with strict input schemas. The agent can only call those tools, and write actions can require human approval, so it cannot change records outside the scope you agree to.",
      },
      {
        question: "How do you stop an AI agent from making mistakes or taking harmful actions?",
        answer:
          "I limit what an AI agent can do rather than trusting it to behave. Each tool has a validated input schema, the agent gets the minimum permissions it needs, and actions that send messages, spend money or delete data can pause for human approval. I also cap the number of steps per task, log every tool call, and test the agent against a set of real scenarios, including edge cases, before it goes live.",
      },
      {
        question: "How long does it take to build a custom AI agent?",
        answer:
          "Building a custom AI agent takes anywhere from a short proof of concept to a multi-month project, depending on scope. The main drivers are how many tools and systems it must connect to, how clean those APIs are, whether it needs memory or retrieval over your documents, and how strict the approval and compliance rules are. I usually start with one narrow workflow, prove it works, and then extend the agent in milestones.",
      },
      {
        question: "Which LLM is best for building AI agents?",
        answer:
          "There is no single best LLM for AI agents; the right choice depends on the task. Agents need reliable function calling, so I compare models from providers such as OpenAI, Anthropic and Groq-hosted open models on your actual workflows, weighing accuracy, speed and cost per task. Where data privacy matters, an open-weight model hosted on your own infrastructure can be an option. I keep the model swappable so you are not locked in.",
      },
    ],
  },

  "rag-development": {
    deliverables: [
      "Ingestion pipeline for your documents (PDF, Word, web pages, databases) with tuned chunking",
      "Vector index with metadata filters for access control and freshness",
      "Retrieval API that returns answers with source citations",
      "Relevance thresholds so the system says it doesn't know instead of guessing",
      "Evaluation set of real questions to measure retrieval and answer quality",
      "Re-indexing process and documentation for keeping content up to date",
    ],
    techStack: ["Python", "LlamaIndex", "LangChain", "ChromaDB", "Pinecone", "Sentence Transformers", "FastAPI", "Groq", "Supabase", "Docker"],
    relatedProject: {
      name: "AI Academic Quiz & RAG Platform",
      summary:
        "A modular RAG backend that indexes course documents in ChromaDB and uses a Groq-hosted LLM to generate context-aware quizzes, served through Dockerized APIs to a Flutter app.",
    },
    faqs: [
      {
        question: "What is RAG and why would my business need it?",
        answer:
          "RAG, or Retrieval-Augmented Generation, lets an AI model answer questions using your own documents instead of only its training data. The system first searches your knowledge base for the most relevant passages, then gives them to the LLM to write an answer, ideally with citations. Businesses use it for internal knowledge search, support assistants and document analysis, where answers must reflect current, company-specific information.",
      },
      {
        question: "How long does it take to build a RAG system?",
        answer:
          "A basic RAG prototype over a clean document set can be built quickly, but a production system takes longer and depends on scope. The main drivers are the number and messiness of document formats, whether answers need access control per user, how often content changes, and how accurate answers must be. I typically deliver a working pilot on a sample of your documents first, then harden it in milestones.",
      },
      {
        question: "Does RAG eliminate AI hallucinations?",
        answer:
          "RAG reduces hallucinations but does not eliminate them completely. Grounding answers in retrieved documents makes the model far less likely to invent facts, but it can still misread a passage or answer from weak matches. I reduce that risk with relevance thresholds that make the system decline when no good source exists, source citations users can check, and an evaluation set that measures answer quality before and after every change.",
      },
      {
        question: "Should I use RAG or fine-tuning?",
        answer:
          "Use RAG when the model needs to know your facts, and fine-tuning when it needs to change how it behaves. RAG is better for content that changes often or must be cited, because you update the index instead of retraining. Fine-tuning suits a consistent tone, format or specialised task. Many projects start with RAG and good prompting, and only add fine-tuning if evaluation shows a clear gap.",
      },
      {
        question: "Can a RAG system keep our company data private?",
        answer:
          "Yes, a RAG system can be designed to keep company data private. The vector database can run on your own servers or cloud account, and metadata filters can restrict each user to documents they are allowed to see. For the language model, you can use a provider with suitable data terms or an open-weight model hosted in your own environment. I agree on these choices with you before any data is indexed.",
      },
    ],
  },

  "generative-ai": {
    deliverables: [
      "Model selection report comparing candidate LLMs on your tasks for quality, speed and cost",
      "Versioned prompts with structured (JSON) outputs your code can rely on",
      "Async FastAPI backend handling LLM calls, retries, streaming and rate limits",
      "Next.js web interface or API integration into your existing product",
      "Token usage and latency logging to keep costs visible",
      "Deployment setup and handover documentation",
    ],
    techStack: ["Python", "FastAPI", "Next.js", "TypeScript", "OpenAI / Anthropic / Groq APIs", "Hugging Face Transformers", "LangChain", "Docker", "AWS"],
    relatedProject: {
      name: "AI Voice Call Agent",
      summary:
        "A generative voice workflow that converts speech to text, generates replies with an LLM that keeps conversational memory, and speaks them back with text-to-speech.",
    },
    faqs: [
      {
        question: "What can generative AI do for my business?",
        answer:
          "Generative AI can draft text, summarise documents, extract data, answer questions and generate code or content inside your existing workflows. The most useful projects usually target one repetitive task with clear inputs and outputs, such as drafting support replies or turning documents into structured data. I start by identifying where generation saves real time, then build it into your product or tools rather than as a standalone demo.",
      },
      {
        question: "How much does it cost to build a generative AI application?",
        answer:
          "The cost of a generative AI application depends on scope, so I quote after understanding the project rather than giving a fixed number. The main drivers are how many features and integrations it needs, whether it requires retrieval over your data, the user interface, security requirements, and ongoing model usage fees, which scale with traffic and prompt size. A narrowly scoped first version is the cheapest way to test value.",
      },
      {
        question: "Do I need my own GPU to run generative AI?",
        answer:
          "No, most generative AI applications do not need your own GPU. Hosted model APIs from providers such as OpenAI, Anthropic or Groq run the model for you, and you pay per use. Your own or rented GPUs become worth considering when data must stay in your environment, when you want to run a fine-tuned open-weight model, or when steady high volume makes per-request API pricing more expensive than hosting.",
      },
      {
        question: "Which LLM should I use for my product?",
        answer:
          "The right LLM depends on your task, budget, latency needs and data rules, so I test before choosing. I run a few candidate models, typically a mix of hosted commercial models and open-weight options, against examples from your real use case and compare output quality, response time and cost per request. The backend is built so the model can be swapped later without rewriting the application.",
      },
      {
        question: "Can you add generative AI to our existing app?",
        answer:
          "Yes, generative AI can usually be added to an existing app without rebuilding it. I typically build a separate AI service, often a FastAPI backend, that your web or mobile app calls like any other API. It handles prompts, model calls, retries and logging, so your main codebase only needs a small integration. This keeps AI changes isolated and lets you test them without risking the rest of your product.",
      },
    ],
  },

  "mcp-development": {
    deliverables: [
      "MCP server in TypeScript or Python built on the official SDKs",
      "Tool, resource and prompt definitions with validated input schemas",
      "Connectors to your databases, internal APIs or file systems",
      "Authentication and scoped permissions so clients only reach what they should",
      "Configuration and testing for MCP clients such as Claude Desktop or Cursor",
      "Setup guide and documentation for each exposed tool",
    ],
    techStack: ["Model Context Protocol", "TypeScript MCP SDK", "Python MCP SDK", "Node.js", "Python", "PostgreSQL", "REST APIs", "Docker"],
    faqs: [
      {
        question: "What is an MCP server?",
        answer:
          "An MCP server is a program that exposes tools, data and prompts to AI applications through the Model Context Protocol, an open standard for connecting AI models to external systems. Instead of building a custom integration for every AI app, you build one MCP server and any compatible client, such as Claude Desktop or Cursor, can discover and call its tools. Messages between client and server use JSON-RPC.",
      },
      {
        question: "Should I build my MCP server in TypeScript or Python?",
        answer:
          "Both TypeScript and Python are good choices for an MCP server, since each has an official SDK. I usually pick the language your team already maintains, or the one closest to the systems being connected. Python suits servers that wrap data science or ML code, while TypeScript fits teams with a Node.js backend. The protocol is the same either way, so clients cannot tell the difference.",
      },
      {
        question: "Can an MCP server run remotely or only on my computer?",
        answer:
          "An MCP server can run either locally or remotely. Local servers usually use the stdio transport, where the AI client starts the server as a process on the same machine. Remote servers use the Streamable HTTP transport, so they can be hosted in the cloud and shared by a team. I choose the transport based on who needs access and where the connected data lives.",
      },
      {
        question: "Is it safe to connect an AI assistant to our database through MCP?",
        answer:
          "Connecting an AI assistant to a database through MCP can be safe if the server enforces strict limits. I expose narrow tools such as specific read queries rather than raw SQL access, use a database account with only the permissions those tools need, validate every input, and add authentication for remote servers. Write operations can be excluded or require confirmation, so the assistant cannot change data beyond what you allow.",
      },
      {
        question: "What is the difference between MCP and a normal API integration?",
        answer:
          "MCP is a standard layer that lets AI clients discover and use your tools, while a normal API integration is custom code written for one application. With MCP, the server describes its tools and their input schemas, and any compatible AI client can call them. Your existing APIs stay in place; the MCP server simply wraps the parts you want AI assistants to use, which avoids rebuilding integrations for each assistant.",
      },
    ],
  },

  "ai-automation": {
    deliverables: [
      "Process map of the manual workflow and where AI adds value",
      "Automation pipeline triggered by webhooks, schedules or incoming messages",
      "LLM-based classification and data extraction with validated outputs",
      "Integrations with your CRM, email, Slack or database",
      "Review queue for low-confidence cases instead of silent failures",
      "Monitoring, error alerts and run logs, plus handover documentation",
    ],
    techStack: ["Python", "FastAPI", "Celery / async workers", "OpenAI / Groq APIs", "Webhooks", "PostgreSQL", "Slack & email APIs", "Docker"],
    relatedProject: {
      name: "Lead Finder Service Intelligence",
      summary:
        "An asynchronous lead-generation platform that discovers businesses from Google Maps listings, analyses gaps on their websites and scores each opportunity, with export to a dashboard.",
    },
    faqs: [
      {
        question: "Which business processes are best suited to AI automation?",
        answer:
          "The best processes for AI automation are frequent, repetitive tasks that involve reading unstructured input and making a routine decision. Examples include triaging support tickets, qualifying inbound leads, extracting fields from invoices or contracts, and compiling regular reports. Tasks with clear rules and a way to check results work best. Rare, high-stakes decisions are usually better kept with people, with AI preparing the information for them.",
      },
      {
        question: "What is the difference between AI automation and tools like Zapier?",
        answer:
          "Tools like Zapier move data between apps using fixed rules, while AI automation adds steps that understand content and make judgements. A rule-based workflow can forward every email; an AI step can read it, classify the intent, extract key details and decide where it goes. I often combine both: simple triggers and connectors where they are enough, and custom AI services where the task needs reading or reasoning.",
      },
      {
        question: "Can AI automation integrate with our existing CRM and tools?",
        answer:
          "Yes, AI automation can integrate with most CRMs and business tools that offer an API or webhooks. I connect the pipeline to systems such as your CRM, email, Slack or database so that results land where your team already works. Before building, I check what each system's API allows, because rate limits, permissions and available fields shape what the automation can safely read and update.",
      },
      {
        question: "What happens when the AI gets something wrong in an automated workflow?",
        answer:
          "When the AI is uncertain or wrong, the workflow should catch it rather than pass errors along silently. I validate every AI output against an expected format, route low-confidence cases to a human review queue, and log each run so mistakes can be traced and fixed. For actions that are hard to undo, such as sending emails to customers, I recommend a human approval step until the automation has proven reliable.",
      },
      {
        question: "How long does it take to automate a workflow with AI?",
        answer:
          "The time to automate a workflow with AI depends on scope rather than a fixed schedule. The main drivers are how many systems must be connected, the quality of their APIs, how varied the incoming data is, and how much accuracy the process requires before it can run unattended. I usually automate one workflow end to end first, measure it against the manual process, and then expand.",
      },
    ],
  },

  "computer-vision": {
    deliverables: [
      "Dataset plan covering image collection, labelling guidelines and train/validation splits",
      "Trained or fine-tuned detection, classification or OCR model",
      "Evaluation report with precision, recall and failure examples on your images",
      "Inference pipeline for images, video streams or scanned documents",
      "Model export for your target hardware, such as ONNX for CPU or TensorRT for NVIDIA GPUs",
      "API or integration code plus documentation for retraining",
    ],
    techStack: ["Python", "PyTorch", "Ultralytics YOLO", "OpenCV", "EasyOCR", "ONNX", "TensorRT", "Hugging Face (vision-language models)", "FastAPI"],
    relatedProject: {
      name: "Automatic License Plate Recognition",
      summary:
        "A pipeline that detects vehicle license plates with YOLO and reads the characters with EasyOCR to extract plate details automatically.",
    },
    faqs: [
      {
        question: "How much training data do I need for a computer vision model?",
        answer:
          "The amount of training data a computer vision model needs depends on the task, so there is no single number. Fine-tuning a pretrained model such as YOLO needs far fewer images than training from scratch. The main factors are how many object classes you have, how visually similar they are, and how much lighting, angle and background vary in real use. I usually start with a small labelled set and add data where errors appear.",
      },
      {
        question: "Can computer vision run in real time on video?",
        answer:
          "Yes, computer vision can run in real time on video when the model and hardware are chosen for it. Detection models like YOLO are designed for fast inference, and exporting them to optimised formats such as TensorRT for NVIDIA GPUs or OpenVINO for Intel hardware can increase speed further. Achievable frame rates depend on model size, image resolution and hardware, so I benchmark on your target device early.",
      },
      {
        question: "Do I need a GPU to run computer vision models?",
        answer:
          "You do not always need a GPU to run computer vision models. Training is much faster on a GPU, which can be rented in the cloud, but inference with smaller models can run on a CPU, especially after exporting to ONNX or OpenVINO. A GPU becomes important for high-resolution video, many camera streams or very low latency requirements. I test on your intended hardware before recommending a setup.",
      },
      {
        question: "Can AI extract data from scanned documents and images?",
        answer:
          "Yes, AI can extract data from scanned documents and images using OCR combined with layout or language models. OCR tools such as EasyOCR read the text, and a further step maps it to the fields you need, such as invoice numbers, dates or totals. Vision-language models can also read documents directly. Accuracy depends on scan quality and layout variety, so I evaluate on samples of your real documents first.",
      },
      {
        question: "What is the difference between object detection and image classification?",
        answer:
          "Image classification assigns one label to a whole image, while object detection finds each object and draws a box around it. Classification answers questions like whether an image shows a defect; detection answers where each defect, vehicle or person is, and how many there are. Detection models such as YOLO suit counting, tracking and inspection, while classification is simpler and often enough for sorting images.",
      },
    ],
  },

  "production-apis": {
    deliverables: [
      "Async FastAPI service with typed Pydantic request and response models",
      "Auto-generated OpenAPI documentation for your frontend or mobile team",
      "Authentication, rate limiting and input validation",
      "Docker images and an Nginx reverse proxy configuration",
      "Health checks, structured logging and error handling",
      "Deployment to AWS or your existing infrastructure, with a runbook",
    ],
    techStack: ["Python", "FastAPI", "Pydantic", "Uvicorn", "Docker", "Nginx", "Redis", "PostgreSQL / Supabase", "AWS", "Server-Sent Events / WebSockets"],
    relatedProject: {
      name: "GulelX Crypto Market Scanner",
      summary:
        "A real-time backend that streams metrics for 300+ USDT pairs from Binance WebSockets through a thread-safe metrics engine to a dashboard over Server-Sent Events.",
    },
    faqs: [
      {
        question: "Why use FastAPI to serve machine learning models?",
        answer:
          "FastAPI is a popular choice for serving machine learning models because it is Python-based, so it works directly with PyTorch, scikit-learn and Hugging Face code. It supports async request handling, validates inputs and outputs with Pydantic type hints, and automatically generates OpenAPI documentation. That means your frontend or mobile team gets a documented, predictable API, and bad requests are rejected before they reach the model.",
      },
      {
        question: "How do you deploy an AI model to production?",
        answer:
          "To deploy an AI model to production, I wrap it in an API service, package it in a Docker container and run it behind a reverse proxy on cloud infrastructure. The service loads the model once at startup, validates every request, logs latency and errors, and exposes a health check for monitoring. The same container runs in testing and production, which removes most environment-related deployment failures.",
      },
      {
        question: "How do you make an AI API handle high traffic?",
        answer:
          "An AI API handles high traffic through a combination of async request handling, caching, batching and horizontal scaling. Repeated requests can be served from a cache such as Redis, multiple inputs can be batched into one model call, and slow jobs can move to a background queue. Running several containers behind a load balancer adds capacity. I load-test the API to find the actual bottleneck before optimising.",
      },
      {
        question: "Can one API serve several AI models to our web and mobile apps?",
        answer:
          "Yes, one API can serve several AI models to both web and mobile apps. I design a single service with clear endpoints for each capability, shared authentication and consistent error formats, so client apps call one backend regardless of which model runs behind it. Models can then be updated or replaced without changes to the apps, as long as the endpoint contract stays the same.",
      },
      {
        question: "Do you deploy on AWS or can you use our existing infrastructure?",
        answer:
          "I can deploy on AWS or on your existing infrastructure. Because the service is packaged as a Docker container, it can run on most cloud providers, a virtual server or your own Kubernetes setup. I adapt to your current logging, secrets management and CI/CD tools where possible, rather than introducing a parallel stack, and document the setup so your team can operate it.",
      },
    ],
  },

  "ml-engineering": {
    deliverables: [
      "Data audit covering quality, missing values, leakage risks and label issues",
      "Reproducible cleaning and feature engineering pipeline",
      "Trained model with documented baselines and comparisons",
      "Evaluation report on a held-out test set, including error analysis",
      "Packaged inference pipeline ready for an API or batch jobs",
      "Retraining guide and versioned code your team can run",
    ],
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "PyTorch", "TensorFlow", "XGBoost", "Jupyter", "Git", "Docker"],
    relatedProject: {
      name: "Traffic Light Detection System",
      summary:
        "A custom-trained YOLO model that detects traffic lights and recognises their state in video streams for intelligent transportation use cases.",
    },
    faqs: [
      {
        question: "How much data do I need to build a machine learning model?",
        answer:
          "The data needed for a machine learning model depends on the problem's complexity and how noisy the data is, so there is no universal minimum. Simple tabular predictions can work with modest datasets, while complex patterns need more examples. Quality and relevance matter as much as volume. I start by auditing your data and training a simple baseline, which shows quickly whether more data would actually help.",
      },
      {
        question: "Why does my model perform well in testing but fail in production?",
        answer:
          "A model that performs well in testing but fails in production usually suffers from data leakage, an unrepresentative test set, or data drift. Leakage means information from the answer slipped into training features. Drift means real-world data has changed since training. I check for leakage, build test sets that mirror real conditions, and recommend monitoring input distributions after launch so changes are caught early.",
      },
      {
        question: "Should I use deep learning or classical machine learning?",
        answer:
          "Use classical machine learning for most structured, tabular data, and deep learning for images, audio, text and other unstructured data. Models like gradient-boosted trees in scikit-learn or XGBoost are often strong on spreadsheets and databases, and are faster to train and easier to explain. Deep learning with PyTorch or TensorFlow is worth its extra cost when the data is unstructured or very large.",
      },
      {
        question: "How do you make sure a machine learning model is reliable?",
        answer:
          "I make a machine learning model reliable by measuring it honestly before anyone depends on it. That means a held-out test set the model never sees during development, cross-validation, comparison against a simple baseline, and metrics chosen for the business goal rather than accuracy alone. I also review the errors themselves, because knowing where a model fails is as important as its overall score.",
      },
      {
        question: "Can my team retrain the model after you hand it over?",
        answer:
          "Yes, I build models so your team can retrain them without me. The data preparation, training and evaluation steps are scripted and version-controlled rather than hidden in one-off notebooks, and a retraining guide explains how to add new data, run training and compare the new model with the current one. That way updates do not depend on any single person's laptop or memory.",
      },
    ],
  },

  "ai-product-delivery": {
    deliverables: [
      "Discovery session and written feasibility assessment",
      "Scope document with success metrics and explicit out-of-scope items",
      "Milestone plan with a testable deliverable at each step",
      "Regular demos and progress updates you can review",
      "Deployed product with source code in your repository",
      "Handover documentation and an agreed post-launch support period",
    ],
    techStack: ["Python", "FastAPI", "Next.js", "LLM APIs", "PostgreSQL / Supabase", "Docker", "AWS / Vercel", "GitHub"],
    relatedProject: {
      name: "AI Academic Quiz & RAG Platform",
      summary:
        "An end-to-end product combining a ChromaDB and Groq RAG backend with productionized quiz APIs on Supabase, Docker and Nginx, consumed by a Flutter app.",
    },
    faqs: [
      {
        question: "How do I know if my AI idea is feasible?",
        answer:
          "You can check whether an AI idea is feasible with a short discovery and prototype phase before committing a full budget. I look at whether the data you need exists and is accessible, whether current models can do the core task well enough, and what accuracy the product actually requires. A small test on real examples often answers the question faster and more cheaply than any amount of planning.",
      },
      {
        question: "How much does it cost to build an AI MVP?",
        answer:
          "The cost of an AI MVP depends on its scope, so I estimate after a discovery call rather than quoting a standard price. The main drivers are the number of core features, whether you need web or mobile interfaces, integrations with existing systems, data preparation work, and ongoing model and hosting costs. Narrowing the MVP to the one feature that proves the value is the most effective way to control cost.",
      },
      {
        question: "Why do so many AI projects never make it past the demo stage?",
        answer:
          "AI projects often stall after the demo because the demo was built on clean examples, while production must handle messy data, edge cases, security, cost and integration with real systems. Unclear success criteria make it worse, since nobody can say when it is good enough. I define measurable success criteria up front and plan the production work as part of the scope from the start.",
      },
      {
        question: "Do I need a technical co-founder to build an AI product?",
        answer:
          "You do not necessarily need a technical co-founder to build a first AI product. A non-technical founder can work with an engineer who scopes the work, explains trade-offs in plain language, and delivers in visible milestones. What you do need is clarity about the problem, the users and what success looks like. Longer term, owning the code and documentation keeps you free to grow your own team.",
      },
      {
        question: "What happens after the AI product launches?",
        answer:
          "After an AI product launches, it needs monitoring, maintenance and improvements based on real usage. I hand over the source code, deployment setup and documentation, and agree a support period for fixes and adjustments. AI products also need ongoing checks on output quality and model costs, since user behaviour and model providers change over time. Further development can continue in new milestones if needed.",
      },
    ],
  },

  "model-optimization": {
    deliverables: [
      "Baseline evaluation set and metrics built from your real use cases",
      "Prompt revisions with structured output formats, measured against the baseline",
      "LoRA or QLoRA fine-tuned model adapters when prompting is not enough",
      "Inference optimisations such as quantization, batching and caching",
      "Before-and-after report on quality, latency and cost per request",
      "Reproducible training and evaluation scripts",
    ],
    techStack: ["Python", "PyTorch", "Hugging Face Transformers", "PEFT (LoRA / QLoRA)", "bitsandbytes", "vLLM", "ONNX Runtime", "Weights & Biases"],
    faqs: [
      {
        question: "What is LoRA fine-tuning?",
        answer:
          "LoRA, or Low-Rank Adaptation, is a fine-tuning method that trains a small set of extra weights instead of updating the whole model. The original model stays frozen, and the small adapter learns your domain's terminology, style or task format. This uses much less GPU memory and storage than full fine-tuning, and one base model can serve several adapters for different tasks.",
      },
      {
        question: "What is the difference between LoRA and QLoRA?",
        answer:
          "QLoRA is LoRA applied to a base model that has been quantized to 4-bit precision, which cuts memory use further. The quantized model stays frozen while small LoRA adapters are trained on top. The original QLoRA research showed this approach can fine-tune very large models on a single GPU while closely matching 16-bit fine-tuning quality. I use it when GPU memory is the main constraint.",
      },
      {
        question: "Should I fine-tune a model or improve my prompts first?",
        answer:
          "Improve your prompts first, because it is faster, cheaper and often enough. Clearer instructions, examples and structured output formats can fix many quality problems without training. Fine-tuning makes sense when prompting has plateaued, when you need a consistent style or format at scale, or when a smaller fine-tuned model could replace a larger, more expensive one. An evaluation set tells you which situation you are in.",
      },
      {
        question: "How can I reduce my LLM API costs?",
        answer:
          "You can reduce LLM API costs by sending fewer tokens, calling smaller models where possible, and avoiding repeated work. Practical steps include shortening prompts and retrieved context, caching answers to repeated requests, routing simple tasks to a cheaper model, and batching non-urgent jobs. For high, steady volume, a fine-tuned open-weight model on your own infrastructure may cost less. I measure each change against quality.",
      },
      {
        question: "How do you know if a prompt or model change actually helped?",
        answer:
          "You know a prompt or model change helped by testing it against a fixed evaluation set before and after. I build that set from real examples of your task, with expected outputs or scoring criteria, and measure quality, latency and cost for every change. Without it, improvements are guesses based on a few hand-picked examples, and a fix for one case can quietly break others.",
      },
    ],
  },
};
