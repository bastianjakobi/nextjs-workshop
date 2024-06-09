"use client";

import { Post } from "@/model/Post";
import Link from "next/link";
import styles from './PostCard.module.css';

interface PostCardProps {
    post: Post;
}

function handleRemovePost(e: React.MouseEvent<HTMLButtonElement>, id: number) {
    e.preventDefault();
    const hiddenPosts = JSON.parse(localStorage.getItem('hiddenPosts') || '[]');
    if (!hiddenPosts.includes(id)) {
        localStorage.setItem('hiddenPosts', JSON.stringify([...hiddenPosts, id]));
        window.location.reload();
    }
}

export function PostCard({ post }: PostCardProps) {
    return (
        <Link href={`/blog/${post.id}`}>
            <div className={styles.post}>
                <button className={styles.postRemoveButton} onClick={(e) => handleRemovePost(e, post.id)}>
                    X
                </button>
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
    )
}