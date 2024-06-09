import { Post } from "@/model/Post";
import Link from "next/link";
import styles from './PostCard.module.css';

interface PostCardProps {
    post: Post;
}

// TODO 5: handleRemovePost Funktion hinzufügen

export function PostCard({ post }: PostCardProps) {
    return (
        <Link href={`/blog/${post.id}`}>
            <div className={styles.post}>
                {/* TODO 4: Nachfolgend den 'Ausblenden' Button hinzufügen */}
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