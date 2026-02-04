import type { MetadataRoute } from 'next'

const BASE_URL = 'https://ansible-exemple.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const docs = [
    'fundamentals',
    'inventory',
    'ad-hoc',
    'playbooks',
    'variables',
    'control-flow',
    'roles',
    'modules',
    'vault',
    'advanced',
    'testing',
    'use-cases',
    'awx',
    'performance',
  ]

  const docPages = docs.map((slug) => ({
    url: `${BASE_URL}/docs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...docPages,
  ]
}
