import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BLOG_POSTS } from "./blog/data/posts";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

const services = [
  {
    number: "01",
    slug: "generative-ai",
    title: "Generative AI systems",
    description:
      "LLM-powered chatbots, RAG pipelines, and agentic workflows tailored to your business logic and data.",
    timing: "LLMs · RAG · Agents",
  },
  {
    number: "02",
    slug: "computer-vision",
    title: "Computer vision",
    description:
      "Object detection, image classification, OCR, and real-time vision systems using YOLO, CNNs, and OpenCV.",
    timing: "YOLO · PyTorch · OCR",
  },
  {
    number: "03",
    slug: "production-apis",
    title: "Production APIs",
    description:
      "Scalable FastAPI backends that connect trained models to products, containerized with Docker and ready for AWS.",
    timing: "FastAPI · Docker · AWS",
  },
  {
    number: "04",
    slug: "ml-engineering",
    title: "ML engineering",
    description:
      "End-to-end data preparation, training, evaluation, optimization, and deployment for reliable machine learning.",
    timing: "Python · TensorFlow · Scikit-learn",
  },
  {
    number: "05",
    slug: "ai-product-delivery",
    title: "AI product delivery",
    description:
      "Clear milestones, rapid iteration, and measurable outcomes from an initial concept to a deployed intelligent solution.",
    timing: "Scope · Build · Ship",
  },
  {
    number: "06",
    slug: "model-optimization",
    title: "Model optimization",
    description:
      "Fine-tuning, prompt engineering, evaluation workflows, and inference improvements for accurate and efficient AI.",
    timing: "LoRA · QLoRA · Evaluation",
  },
];

const projects = [
  {
    category: "Generative AI · Voice",
    title: "AI Voice Call Agent",
    flow: ["Speech-to-text", "LLM + memory", "Voice reply"],
    description:
      "Real-time voice agent combining speech-to-text, LLMs, text-to-speech, and conversational memory.",
    output: "End-to-end conversational AI workflow for voice calls.",
    link: "https://drive.google.com/file/d/1M4A1Qn5exDoYM34kARs2IpG6EEYuvJZh/view",
  },
  {
    category: "Computer Vision · Detection",
    title: "Automatic License Plate Recognition",
    flow: ["Vehicle image", "YOLO detect", "EasyOCR", "Plate data"],
    description:
      "Vehicle license plate detection and extraction using YOLO object detection and EasyOCR.",
    output: "Automated license plate detail parsing pipeline.",
    link: "https://www.awesomescreenshot.com/video/54841618?key=92dc04fd65f5a9d743cd25fe95125412",
  },
  {
    category: "Computer Vision · Real-time",
    title: "Traffic Light Detection System",
    flow: ["Video stream", "Custom YOLO", "Light state"],
    description:
      "Real-time traffic light detection and state recognition for intelligent transportation systems.",
    output: "Low-latency video stream inference with a custom-trained YOLO model.",
    link: "https://www.awesomescreenshot.com/video/54840783?key=d977f0332f7983810b68fa89cdd280ac",
  },
  {
    category: "B2B · Platform",
    title: "Lead Finder Service Intelligence",
    flow: ["Google Maps", "Website audit", "Lead score"],
    description:
      "Asynchronous lead-generation platform that discovers Google Maps listings and analyzes website gaps.",
    output: "Opportunity scoring dashboard with export capabilities.",
    link: "https://github.com/sajjadxdev",
  },
  {
    category: "Fintech · Data",
    title: "GulelX Crypto Market Scanner",
    flow: ["Binance WS", "Metrics engine", "SSE dashboard"],
    description:
      "High-frequency scanner streaming real-time metrics for 300+ USDT pairs via Binance APIs and WebSockets.",
    output: "Thread-safe, SSE-based market intelligence system.",
    link: "https://github.com/sajjadxdev/Voiltile_coin/",
  },
  {
    category: "Education · RAG",
    title: "AI Academic Quiz & RAG Platform",
    flow: ["Course docs", "ChromaDB", "Groq LLM", "Quiz"],
    description:
      "Modular RAG backend using ChromaDB and Groq LLM to generate context-aware academic quizzes.",
    output: "Productionized quiz APIs with Supabase, Docker, Nginx, and a Flutter app.",
    link: "https://github.com/sajjadxdev",
  },
];

const experience = [
  ["AI Engineer", "Apptex Software Solution", "Aug 2025 – Present"],
  ["Machine Learning Trainee", "ML1 Pvt Ltd", "Apr 2025 – Jun 2025"],
  ["Chatbot Developer", "INNOVATION.TECH", "Jan 2025 – Apr 2025"],
  ["Generative AI & ML Intern", "VersatileSoft", "Apr 2023 – Oct 2024"],
];

const tapeItems = [
  ["🐍", "Python"], ["🔥", "PyTorch"], ["🧠", "TensorFlow"], ["🤗", "HuggingFace"],
  ["🔗", "LangChain"], ["🦙", "LlamaIndex"], ["⚡", "FastAPI"], ["🐳", "Docker"],
  ["📊", "Scikit-learn"], ["💬", "SpaCy"], ["👁️", "YOLO"], ["📷", "OpenCV"],
  ["☁️", "AWS"], ["🔀", "Git"], ["🔢", "NumPy"], ["🐼", "Pandas"],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-red">
      {children}
    </p>
  );
}


// ProfilePage belongs only on the homepage (it used to be injected on every page by the layout)
const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://www.sajjadahmad.site/#profilepage",
  url: "https://www.sajjadahmad.site",
  name: "Sajjad Ahmad | AI Engineer — Generative AI, Agentic AI & RAG",
  datePublished: "2024-01-01T00:00:00+00:00",
  dateModified: "2026-11-18T00:00:00+00:00",
  mainEntity: { "@id": "https://www.sajjadahmad.site/#person" },
  isPartOf: { "@id": "https://www.sajjadahmad.site/#website" },
  about: { "@id": "https://www.sajjadahmad.site/#person" },
  description: "Portfolio of Sajjad Ahmad, AI Engineer specializing in Generative AI, Agentic AI, RAG, and scalable AI solutions.",
};

const latestPosts = [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 5);

export default function Home() {
  return (
    <main className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <Header />

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">AI Engineer · Islamabad, Pakistan</p>
          <h1>
            Your AI demo{" "}
            <br />
            <em>deserves to ship.</em>
          </h1>
          <p className="hero-intro">
            I turn AI ideas into production agents, RAG systems and
            automations that run every day, not just on demo day.
          </p>
          <div className="hero-actions">
            <a className="button button-red" href="#contact">
              Let&apos;s work together <ArrowUpRight size={16} />
            </a>
            <a className="text-link" href="#work">
              View selected work <span>↘</span>
            </a>
          </div>
        </div>
        <div className="hero-aside">
          <figure className="portrait">
            <Image
              className="portrait-img"
              src="/sajjad-ahmad-ai-engineer.jpg"
              alt="Sajjad Ahmad, AI Engineer in Islamabad, Pakistan"
              fill
              priority
              sizes="(max-width: 800px) 80vw, 420px"
            />
          </figure>
        </div>
      </section>

      <section className="tape-zone" aria-label="Technologies I build with">
        {(["tape tape-back", "tape tape-front"] as const).map((cls, t) => (
          <div key={cls} className={cls} aria-hidden={t === 0 || undefined}>
            {/* list rendered twice so the -50% loop is seamless */}
            <div className="tape-track">
              {[0, 1].map((copy) => (
                <ul key={copy} aria-hidden={copy === 1 || undefined}>
                  {tapeItems.map(([icon, name]) => (
                    <li key={name}>
                      <span aria-hidden="true">{icon}</span>
                      {name}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section id="services" className="section services-section">
        <div className="section-heading">
          <div>
            <SectionLabel>What I do</SectionLabel>
            <h2>Focused expertise.<br /><em>Useful outcomes.</em></h2>
          </div>
          <p>
            From a first idea to a dependable deployed system, I work across
            the full AI stack so every piece connects.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} className="service-card" key={service.number}>
              <div className="service-top">
                <span className="card-number" aria-hidden="true">{service.number}</span>
                <ArrowUpRight className="service-arrow" size={20} aria-hidden="true" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-tags" aria-label="Tools">
                {service.timing.split(" · ").map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="section-heading">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2>Projects that<br /><em>shipped.</em></h2>
          </div>
          <p>
            AI/ML solutions built for production use — from computer vision
            systems to LLM-powered agents and RAG pipelines.
          </p>
        </div>
        <div className="case-stack">
          {projects.map((project, index) => (
            <article
              className="case"
              key={project.title}
              style={{ "--i": index } as React.CSSProperties}
            >
              <div className="case-copy">
                <div className="case-top">
                  <span className="case-index">
                    0{index + 1}<span> / 0{projects.length}</span>
                  </span>
                  <span className="case-category">{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="case-desc">{project.description}</p>
                <div className="case-bottom">
                  <p className="case-outcome">
                    <span>Outcome</span>
                    {project.output}
                  </p>
                  <a className="case-link" href={project.link} target="_blank" rel="noopener noreferrer">
                    View project <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
              <div className="case-visual" aria-label={`How ${project.title} works`}>
                <p className="case-visual-label">How it works</p>
                <ol className="case-nodes">
                  {project.flow.map((step, i) => (
                    <li key={step}>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="about-side">
          <SectionLabel>The person behind the work</SectionLabel>
          <h2>Technical depth.<br /><em>Human communication.</em></h2>

          <aside className="profile-card" aria-label="Profile">
            <div className="profile-head">
              <div className="profile-avatar">
                <Image src="/sajjad-ahmad-avatar.jpg" alt="" width={72} height={72} loading="eager" />
              </div>
              <div>
                <p className="profile-name">Sajjad Ahmad</p>
                <p className="profile-role">AI Engineer · Islamabad, PK</p>
              </div>
            </div>
            <p className="profile-now">
              <span className="profile-dot" aria-hidden="true" />
              <span>Currently AI Engineer at <strong>Apptex Software Solution</strong></span>
            </p>
            <ul className="profile-focus" aria-label="Focus areas">
              {["Generative AI", "Agentic AI", "RAG", "Computer Vision", "APIs", "Deployment"].map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="profile-actions">
              <a className="profile-btn profile-btn-primary" href="#contact">
                Let&apos;s talk <ArrowUpRight size={15} />
              </a>
              <a className="profile-btn" href="#work">See my work</a>
            </div>
          </aside>
        </div>

        <div className="about-copy">
          <p className="large-copy">
            I&apos;m Sajjad Ahmad, an AI Engineer based in Islamabad. I turn
            complex AI capabilities into clear, maintainable products teams
            can actually use.
          </p>
          <p>
            My work spans Generative AI, Agentic AI, RAG, computer vision,
            backend APIs, and deployment. I care about clean architecture,
            measurable performance, and handing over systems that keep working
            after launch.
          </p>

          <p className="timeline-label">Experience</p>
          <ol className="timeline">
            {experience.map(([role, company, period], i) => (
              <li key={role} className={i === 0 ? "is-current" : undefined}>
                <div className="timeline-card">
                  <div className="timeline-top">
                    <span className="timeline-period">{period}</span>
                    {i === 0 && <span className="timeline-now">Now</span>}
                  </div>
                  <p className="timeline-role">{role}</p>
                  <p className="timeline-company">{company}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section writing-section" aria-labelledby="writing-title">
        <div className="section-heading">
          <div>
            <SectionLabel>Writing</SectionLabel>
            <h2 id="writing-title">Notes from<br /><em>the build.</em></h2>
          </div>
          <Link className="text-link" href="/blog">All articles <span>↗</span></Link>
        </div>
        <div className="writing-layout">
          {latestPosts.slice(0, 1).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="writing-feature">
              <div className="writing-feature-top">
                <span className="writing-badge">Latest</span>
                <span>{post.readTime}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <ul className="writing-tags">
                {post.tags.slice(0, 3).map((t) => <li key={t}>{t}</li>)}
              </ul>
              <span className="writing-cta">Read article <ArrowUpRight size={16} /></span>
            </Link>
          ))}
          <ol className="writing-list">
            {latestPosts.slice(1).map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <span className="writing-date">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    {" · "}{post.readTime}
                  </span>
                  <span className="writing-title">{post.title}</span>
                  <ArrowUpRight className="writing-arrow" size={20} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="contact-wrap">
        <div className="contact-card">
          <div className="contact-main">
            <p className="contact-label">Have a project in mind?</p>
            <h2><span>Let&apos;s turn the idea</span> <em>into a system.</em></h2>
            <p className="contact-lead">
              Tell me where your team loses time. You&apos;ll get a clear technical
              direction, realistic milestones, and a practical next step.
            </p>
            <ol className="contact-steps" aria-label="What happens next">
              <li><span>01</span>Send me your idea or problem</li>
              <li><span>02</span>We agree scope, timeline &amp; pricing</li>
              <li><span>03</span>I start building your AI solution</li>
            </ol>
          </div>

          <div className="contact-side">
            <a
              className="contact-cta"
              href="mailto:sajjadxdev@gmail.com?subject=Project%20inquiry"
            >
              <span>
                <strong>Start a conversation</strong>
                <small>Opens an email to sajjadxdev@gmail.com</small>
              </span>
              <ArrowUpRight size={22} />
            </a>
            <p className="contact-reply">
              <span className="profile-dot" aria-hidden="true" />
              Usually replies within ~12 hours
            </p>
            <ul className="contact-channels">
              <li>
                <a href="mailto:sajjadxdev@gmail.com">
                  <Mail size={18} />
                  <span><small>Email</small>sajjadxdev@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/sajjadxdev" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                  <span><small>LinkedIn</small>in/sajjadxdev</span>
                </a>
              </li>
              <li>
                <a href="tel:+923166400174">
                  <Phone size={18} />
                  <span><small>Phone</small>+92 316 6400174</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/sajjadxdev" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  <span><small>GitHub</small>sajjadxdev</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
