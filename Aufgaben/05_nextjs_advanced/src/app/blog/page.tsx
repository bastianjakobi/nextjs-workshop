import Link from 'next/link';
import globalStyles from '../page.module.css';
import styles from './blog.module.css';
import { Post } from '@/model/Post';
import Image from 'next/image';

export const dynamic = "force-dynamic";

export default async function Blog() {

    // TODO 1: Posts aus API laden und in Variable posts speichern
    return (
        <main className={globalStyles.main}>
            <h1>Blog</h1>
            <p>Das ist die Blog-Seite welche im Rahmen des Next.js Workshops erstellt wurde.</p>
            <div>
                <h2>Blog Posts</h2>
                <div className={styles.postGrid}>
                    // TODO 2: posts wie in README.md beschrieben rendern
                </div>
            </div>
        </main>
    );
}