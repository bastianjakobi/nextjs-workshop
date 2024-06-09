"use client";

import { useEffect, useState } from 'react';
import { Post } from "@/model/Post";
import { PostCard } from "./PostCard";
import styles from './BlogGrid.module.css';

interface BlogGridProps {
    posts: Post[];
}

export function BlogGrid({ posts }: BlogGridProps) {
    const [hiddenPosts, setHiddenPosts] = useState<number[]>([]);
    const [shownPosts, setShownPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedHiddenPosts = JSON.parse(localStorage.getItem('hiddenPosts') || '[]');
        setHiddenPosts(storedHiddenPosts);
    }, []);

    useEffect(() => {
        const filteredPosts = posts.slice(0, 6).filter(post => !hiddenPosts.includes(post.id));
        setShownPosts(filteredPosts);
        setLoading(false);
    }, [hiddenPosts, posts]);

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
                    !loading &&
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1.5rem' }}>
                        <p>Alle Posts ausgeblendet</p>
                    </div>
            }
        </>
    );
}