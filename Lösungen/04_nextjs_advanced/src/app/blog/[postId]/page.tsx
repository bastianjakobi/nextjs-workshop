import { Post } from '@/model/Post';
import styles from '../../page.module.css';

interface BlogPostParams {
    params: {
        postId: string
    },
}

export default async function BlogPost(props: BlogPostParams) {
    const { postId } = props.params;
    const post = await fetch(`http://localhost:3000/api/${postId}`);
    const postJson = await post.json() as Post;

    return (
        <main className={styles.main}>
            <img src={'/' + postJson.imagePath} alt={postJson.title} />
            <h1>{postJson.title.substring(0, 15)}</h1>
            <p>{postJson.body}</p>
        </main>
    );
}