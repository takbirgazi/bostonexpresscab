import ServiceClient from "./ServiceClient";
import { Metadata } from "next";

interface ServiceType {
    slug: string
}

export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/service-posts`);
    const data: ServiceType[] = await res.json();
    return data.map(({ slug }) => ({ services: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ services: string }> }): Promise<Metadata> {
    const { services } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/service-posts/${services}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) return { title: "Service Not Found" };

    const data = await res.json();

    return {
        title: data.meta_title,
        description: data.meta_description,
        robots: "index, follow",
        alternates: {
            canonical: `https://bostonexpresscab.com/${services}`,
        },
        keywords: data.meta_tag?.split(" "),
        openGraph: {
            title: data.meta_title || data.title,
            description: data.meta_description,
            url: `https://bostonexpresscab.com/${services}`,
        },
        twitter: {
            card: "summary_large_image",
            title: data.meta_title || data.title,
            description: data.meta_description,
        },
    };
}

export default async function ServicePage({ params }: { params: Promise<{ services: string }> }) {
    const { services } = await params;
    return <ServiceClient route={services} />;
}
