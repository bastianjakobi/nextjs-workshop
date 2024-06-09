import { Post } from '@/model/Post';
import styles from '../../page.module.css';
import Image from 'next/image';

interface BlogPostParams {
    params: {
        postId: string
    },
}

export async function generateMetadata(params: BlogPostParams) {
    const { postId } = params.params;
    const post = await (await fetch(`${process.env.URL}/api/${postId}`)).json() as Post;

    return {
        title: post.title,
        description: post.body,
    };
}

export const dynamic = "force-dynamic";

export default async function BlogPost(props: BlogPostParams) {
    const { postId } = props.params;
    const post = await (await fetch(`${process.env.URL}/api/${postId}`)).json() as Post;

    return (
        <main className={styles.main}>
            <Image src={'/' + post.imagePath} alt={post.title} width={640} height={427} className={styles.postImage} />
            <h1>{post.title.substring(0, 15)}</h1>
            <p>{post.body}</p>
        </main>
    );
}