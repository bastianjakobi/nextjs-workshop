import globalStyles from '../page.module.css';
import { Post } from '@/model/Post';
import { BlogGrid } from '@/components/BlogGrid';
import { ShowAllButton } from '@/components/ShowAllButton';
import { Metadata } from 'next';

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Blog",
    description: "Das ist die Blog-Seite welche im Rahmen des Next.js Workshops erstellt wurde.",
};

export default async function Blog() {
    const posts = await (await fetch(`${process.env.URL}/api`)).json() as Post[];
    return (
        <main className={globalStyles.main}>
            <h1>Blog</h1>
            <p>Das ist die Blog-Seite welche im Rahmen des Next.js Workshops erstellt wurde.</p>
            <div>
                <h2>Blog Posts</h2>
                <BlogGrid posts={posts} />
                <ShowAllButton />
            </div>
        </main>
    );
}