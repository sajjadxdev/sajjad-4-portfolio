import type { MetadataRoute } from 'next'

// AI search and assistant crawlers are named explicitly so the intent to be cited is unambiguous
const AI_CRAWLERS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended', 'Bingbot',
]

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.sajjadahmad.site'

  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      { userAgent: AI_CRAWLERS, allow: '/' },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
