import Link from 'next/link';
import globalStyles from '../page.module.css';
import styles from './blog.module.css';

export default function Blog() {
    return (
        <main className={globalStyles.main}>
            <h1>Blog</h1>
            <p>Das ist die Blog-Seite welche im Rahmen des Next.js Workshops von <b>Bastian Jakobi</b> erstellt wurde.</p>
            <h2>Blog Posts</h2>
            <ul className={styles.postList}>
                <li><Link href="/blog/1">Blog Post 1</Link></li>
                <li><Link href="/blog/2">Blog Post 2</Link></li>
                <li><Link href="/blog/3">Blog Post 3</Link></li>
            </ul>
        </main>
    );
}