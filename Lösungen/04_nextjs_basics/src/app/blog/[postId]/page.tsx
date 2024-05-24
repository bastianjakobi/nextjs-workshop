import styles from '../../page.module.css';

interface BlogPostParams {
    params: {
        postId: string
    },
}

export default function BlogPost(props: BlogPostParams) {
    const { postId } = props.params;
    return (
        <main className={styles.main}>
            <h1>Blog Post {postId}</h1>
            <p>Das ist die Blog-Post-Seite welche im Rahmen des Next.js Workshops von <b>Bastian Jakobi</b> erstellt wurde.</p>
        </main>
    );
}