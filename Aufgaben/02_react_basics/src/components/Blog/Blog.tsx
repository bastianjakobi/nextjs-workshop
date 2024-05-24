import { useEffect } from 'react'
import { Post } from '../../model/Post';
import PostCard from '../Post/PostCard';
import './Blog.css'
import { fetchBlogPosts } from '../../utils/utils';

function Blog() {
    // TODO 1.1: Erstelle den 'posts' State
    const posts = undefined;

    // TODO 1.2: Erstelle den 'displayAmount' State
    const displayAmount = undefined;

    useEffect(() => {
        fetchBlogPosts().then((posts: Post[]) => {
            // TODO 2: Speichere die erhaltenen Posts im 'posts' State
        });
    }, []);

    return (
        <>
            {
                posts ? (
                    <>
                        <div className='select-amount-container'>
                            <label htmlFor='amount'>Anzahl der angezeigten Posts:</label>
                            <select
                                onChange={(e) => {
                                    // Optional: TODO 5: Setze den 'displayAmount' State bei jeder Änderung auf den Wert des Select-Elements
                                }}
                                // Optional: TODO 4: Nutze den 'displayAmount' als Standardwert für das Select-Element
                                value={undefined}
                                className='select-amount'
                                name='amount'>
                                <option value={5}>5 Posts</option>
                                <option value={10}>10 Posts</option>
                                <option value={20}>20 Posts</option>
                                <option value={30}>Alle Posts</option>
                            </select>
                        </div>
                        <div className='blog-grid'>
                            {
                                // TODO 3: Rendere alle Posts, die im 'posts' State gespeichert sind wie in der README beschrieben.

                                // Optional: TODO 6: Rendere nur die Anzahl an Posts, die im 'displayAmount' State gespeichert ist
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