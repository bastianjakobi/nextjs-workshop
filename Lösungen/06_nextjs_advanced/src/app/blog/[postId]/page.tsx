import { Post } from '@/model/Post';
import styles from '../../page.module.css';

interface BlogPostParams {
    params: {
        postId: string
    },
}

export const dynamic = "force-dynamic";

export default async function BlogPost(props: BlogPostParams) {
    const { postId } = props.params;
    const post = await (await fetch(`${process.env.URL}/api/${postId}`)).json() as Post;

    return (
        <main className={styles.main}>
            <img src={'/' + post.imagePath} alt={post.title} />
            <h1>{post.title.substring(0, 15)}</h1>
            <p>{post.body}</p>
        </main>
    );
}