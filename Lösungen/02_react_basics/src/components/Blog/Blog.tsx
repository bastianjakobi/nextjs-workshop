import { useEffect, useState } from 'react'
import { Post } from '../../model/Post';
import PostCard from '../Post/PostCard';
import './Blog.css'
import { fetchBlogPosts } from '../../utils/utils';

function Blog() {
    const [posts, setPosts] = useState<undefined | Post[]>(undefined);
    const [displayAmount, setDisplayAmount] = useState<number>(5);

    useEffect(() => {
        fetchBlogPosts().then((posts: Post[]) => {
            setPosts(posts);
        });
    }, []);

    return (
        <>
            {
                posts ? (
                    <>
                        <div className='select-amount-container'>
                            <label htmlFor='amount'>Anzahl der angezeigten Posts:</label>
                            <select onChange={(e) => setDisplayAmount(parseInt(e.target.value))} value={displayAmount} className='select-amount' name='amount'>
                                <option value={5}>5 Posts</option>
                                <option value={10}>10 Posts</option>
                                <option value={20}>20 Posts</option>
                                <option value={posts.length}>Alle Posts</option>
                            </select>
                        </div>
                        <div className='blog-grid'>
                            {
                                posts.slice(0, displayAmount).map((post: Post) => {
                                    return <PostCard key={post.id} post={post} />
                                }
                                )
                            }
                        </div>
                    </>
                ) : (
                    <div>Loading...</div>
                )
            }

        </>
    )
}

export default Blog