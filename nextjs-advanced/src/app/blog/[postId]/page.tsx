import { Post } from '@/model/Post';
import styles from '../../page.module.css';

interface BlogPostParams {
    params: {
        postId: string
    },
}

export default async function BlogPost(props: BlogPostParams) {
    const { postId } = props.params;
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const postJson = await post.json() as Post;

    return (
        <main className={styles.main}>
            <h1>{postJson.title.substring(0, 15)}</h1>
            <p>{postJson.body}</p>
        </main>
    );
}