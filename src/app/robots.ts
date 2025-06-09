import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/','/login/','/login/mfa/','/error/'],
    },
    sitemap: 'https://averyhere.com/sitemap.xml',
  }
}