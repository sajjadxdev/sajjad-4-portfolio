import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from './blog/data/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sajjadahmad.site'
  // Bump when page content actually changes
  const SITE_UPDATED = new Date('2026-11-18')
  const latestPost = new Date(Math.max(...BLOG_POSTS.map((p) => new Date(p.updatedAt).getTime())))

  const services = [
    'ai-agent-development',
    'rag-development',
    'generative-ai',
    'mcp-development',
    'ai-automation',
    'computer-vision',
    'production-apis',
    'ml-engineering',
    'ai-product-delivery',
    'model-optimization',
  ]

  const locations = ['islamabad', 'pakistan', 'uae', 'germany', 'usa']

  const blogPostsEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const serviceEntries: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const locationEntries: MetadataRoute.Sitemap = locations.map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: SITE_UPDATED,
      images: [`${baseUrl}/sajjad-ahmad-ai-engineer.jpg`],
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: SITE_UPDATED,
      images: [`${baseUrl}/sajjad-ahmad-ai-engineer.jpg`],
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: latestPost,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...serviceEntries,
    ...locationEntries,
    ...blogPostsEntries,
  ]
}
