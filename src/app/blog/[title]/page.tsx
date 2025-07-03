import { Metadata } from "next";
import BlogClient from "./BlogClient";
import { BlogPostProps } from "../BlogPostPropsType";

interface BlogType {
    data: BlogPostProps[]
}

export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/all-blog`);
    const { data }: BlogType = await res.json();

    return data.map(({ slug }) => ({ title: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ title: string }> }): Promise<Metadata> {
    const { title } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${title}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) return { title: "Service Not Found" };

    const data = await res.json();

    return {
        title: {
            default: data.meta_title || data.title,
            template: `%s | Boston Express Cab`,
            absolute: data.meta_title || data.title,
        },
        description: data.meta_description,
        robots: "index, follow",
        alternates: {
            canonical: `https://bostonexpresscab.com/blog/${title}`,
        },
        keywords: data.meta_tag?.split(" "),
        openGraph: {
            title: data.meta_title || data.title,
            description: data.meta_description,
            url: `https://bostonexpresscab.com/blog/${title}`,
        },
        twitter: {
            card: "summary_large_image",
            title: data.meta_title || data.title,
            description: data.meta_description,
        },
    };
}

export default async function ServicePage({ params }: { params: Promise<{ title: string }> }) {
    const { title } = await params;
    return <BlogClient route={title} />;
}
