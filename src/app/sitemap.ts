import type { MetadataRoute } from 'next'
import { BlogPostProps } from './blog/BlogPostPropsType';

interface BlogType {
    data: BlogPostProps[]
}

interface ServiceType {
    slug: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://bostonexpresscab.com';

    const blogResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/all-blog`)
    const { data }: BlogType = await blogResponse.json();
    const blogsSlags = data.map(blog => `blog/${blog.slug}`);

    const serviceResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/service-posts`)
    const services: ServiceType[] = await serviceResponse.json();
    const servicesSlag = services.map(service => service.slug);

    const paths = [...blogsSlags, ...servicesSlag];

    const lastModified = new Date();
    return paths.map(path => ({
        url: `${baseUrl}/${path}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 1,
    }))
}