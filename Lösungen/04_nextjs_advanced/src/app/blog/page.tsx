import Link from 'next/link';
import globalStyles from '../page.module.css';
import styles from './blog.module.css';
import { Post } from '@/model/Post';
import Image from 'next/image';

export default async function Blog() {

    const posts = await fetch('http://localhost:3000/api')
    const postsJson = await posts.json() as Post[];
    return (
        <main className={globalStyles.main}>
            <h1>Blog</h1>
            <p>Das ist die Blog-Seite welche im Rahmen des Next.js Workshops von <b>Bastian Jakobi</b> erstellt wurde.</p>
            <div>
                <h2>Blog Posts</h2>
                <div className={styles.postGrid}>
                    {postsJson.slice(0, 6).map(post => (
                        <Link href={`/blog/${post.id}`} key={post.id}>
                            <div className={styles.post}>
                                <img src={'/' + post.imagePath} alt={post.title} className={styles.postImage} />
                                <div className={styles.postContent}>
                                    <h2>
                                        {post.title.substring(0, 15)}
                                    </h2>
                                    <p>
                                        {post.body.substring(0, 100)}...
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}