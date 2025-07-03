export interface BlogPostProps {
    id: number;
    title: string;
    slug: string;
    photo: string;
    description: string;
    created_at: string;
    meta_title?: string;
    meta_tag?: string;
    meta_description?: string;
}