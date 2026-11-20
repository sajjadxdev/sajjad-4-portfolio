import { BLOG_POSTS } from "../blog/data/posts";

const BASE = "https://www.sajjadahmad.site";

const SERVICES: [string, string][] = [
  ["ai-agent-development", "AI agent development: autonomous, tool-using agents"],
  ["rag-development", "Custom RAG pipelines over company documents"],
  ["generative-ai", "Generative AI and LLM applications"],
  ["mcp-development", "Model Context Protocol (MCP) servers and integrations"],
  ["ai-automation", "AI workflow automation and CRM integration"],
  ["computer-vision", "Computer vision: detection, OCR, YOLO"],
  ["production-apis", "Production AI APIs with FastAPI and Docker"],
  ["ml-engineering", "Machine learning engineering, training to deployment"],
  ["ai-product-delivery", "AI product delivery from idea to launch"],
  ["model-optimization", "Model optimization and fine-tuning (LoRA/QLoRA)"],
];

// llms.txt: a plain-Markdown map of the site for LLM-based assistants (https://llmstxt.org)
export function GET() {
  const posts = [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const body = `# Sajjad Ahmad — AI Engineer

> Sajjad Ahmad is an AI Engineer based in Islamabad, Pakistan, building production Generative AI, Agentic AI, RAG, computer vision and ML systems, deployed with FastAPI and Docker. Available for remote projects worldwide.

- Contact: sajjadxdev@gmail.com
- GitHub: https://github.com/sajjadxdev
- LinkedIn: https://linkedin.com/in/sajjadxdev

## Key pages
- [Home](${BASE}/): overview, selected projects, experience
- [About](${BASE}/about): background and expertise
- [Services](${BASE}/services): all AI engineering services

## Services
${SERVICES.map(([slug, d]) => `- [${d}](${BASE}/services/${slug})`).join("\n")}

## Articles
${posts.map((p) => `- [${p.title}](${BASE}/blog/${p.slug}): ${p.excerpt}`).join("\n")}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}

export const dynamic = "force-static";
