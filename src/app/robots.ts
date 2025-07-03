import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin', "/login", "/register", "/admin-signin", "/affiliate-signin", "/affiliate"],
        },
        sitemap: 'https://bostonexpresscab.com/sitemap.xml',
    }
}