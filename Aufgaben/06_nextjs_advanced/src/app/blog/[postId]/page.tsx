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
    
    // TODO 3: Post aus API laden und in Variable post speichern

    return (
        <main className={styles.main}>
            {/* TODO 4: post wie in README.md beschrieben rendern */}
        </main>
    );
}