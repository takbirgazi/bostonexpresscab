'use client';

import PageHeader from '@/components/SharedComponent/PageHeader/PageHeader';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BlogPostProps } from '../BlogPostPropsType';


export default function BlogClient({ route }: { route: string }) {
    const slug = route; // get the last part of the path

    const [blog, setBlog] = useState<BlogPostProps | null>(null);
    const [recentPosts, setRecentPosts] = useState<BlogPostProps[]>([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${slug}`, {
                    cache: 'no-store',
                });

                if (!res.ok) {
                    setError(true);
                    return;
                }

                const data = await res.json();
                setBlog(data);
            } catch (error) {
                console.error("Error fetching blog data:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        if (slug) fetchBlogData();
    }, [slug]);

    useEffect(() => {
        const fetchRecentPosts = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
                    cache: 'no-store',
                });

                if (!res.ok) return;

                const data = await res.json();
                setRecentPosts(data.data);
            } catch (error) {
                console.error("Error fetching recent posts:", error);
            }
        };

        fetchRecentPosts();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[100svh] bg-gradient-to-r from-blue-100 via-white to-blue-100">
                <p className="text-gray-600">Loading blog...</p>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="flex items-center justify-center h-[100svh] text-center bg-gradient-to-r from-blue-100 via-white to-blue-100 px-4">
                <div>
                    <h1 className="text-3xl font-bold text-red-600">404 - Blog Not Found</h1>
                    <p className="text-gray-600 mt-2">Sorry, the blog post you&lsquo;re looking for doesn&lsquo;t exist.</p>
                    <Link href="/" className="inline-block mt-4 text-indigo-600 hover:underline">
                        Go to homepage
                    </Link>
                </div>
            </div>
        );
    }

    const formattedDate = new Date(blog.created_at).toLocaleDateString();
    const pageHeaderData = {
        // heading: blog.title,
        heading: '',
        bgImage: `https://admin.bostonexpresscab.com/${blog.photo}`,
    };

    return (
        <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100">
            <PageHeader pageHeaderData={pageHeaderData} />

            <main className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-10">
                {/* Blog Content */}
                <article className="md:col-span-3">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">{blog.title}</h1>
                    <p className="text-sm text-gray-500 mb-4">Published on {formattedDate}</p>

                    {blog.photo && (
                        <div className="relative w-full min-h-80 mb-6 rounded-md overflow-hidden">
                            <Image
                                src={`https://admin.bostonexpresscab.com/${blog.photo}`}
                                alt={blog.title}
                                width={1250}
                                height={400}
                                className="object-cover"
                            />
                        </div>
                    )}

                    <div
                        className="prose prose-indigo max-w-none py-4"
                        dangerouslySetInnerHTML={{ __html: blog.description }}
                    />
                </article>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <div>
                        <h2 className="text-xl font-semibold border-b pb-2 mb-4">Recent Posts</h2>
                        <ul className="space-y-2">
                            {recentPosts?.map((post) => (
                                <li key={post.id}>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-indigo-600 hover:underline text-sm"
                                    >
                                        {post.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </main>
        </div>
    );
}