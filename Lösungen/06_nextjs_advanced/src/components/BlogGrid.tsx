"use client";

import { Post } from "@/model/Post";
import { PostCard } from "./PostCard";
import styles from './BlogGrid.module.css';

interface BlogGridProps {
    posts: Post[];
}

export function BlogGrid({ posts }: BlogGridProps) {
    const hiddenPosts = JSON.parse(localStorage.getItem('hiddenPosts') || '[]');
    const shownPosts = posts.slice(0, 6).filter(post => !hiddenPosts.includes(post.id));
    return (
        <>
            {
                shownPosts.length > 0 ?
                    <div className={styles.postGrid}>
                        {
                            shownPosts.map(post => <PostCard key={post.id} post={post} />)
                        }
                    </div>
                    :
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1.5rem' }}>
                        <p>Alle Posts ausgeblendet</p>
                        <a
                            style={{ cursor: 'pointer', textDecoration: 'underline', marginTop: '1rem' }}
                            onClick={() => {
                                localStorage.setItem('hiddenPosts', '[]');
                                window.location.reload();
                            }}>Alle Posts anzeigen</a>
                    </div>
            }
        </>
    );
}