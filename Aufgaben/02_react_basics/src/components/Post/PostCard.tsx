import { Post } from "../../model/Post";
import './PostCard.css'

interface PostCardProps {
    post: Post
}

function PostCard(props: PostCardProps) {
    const { post } = props
    return (
        <div className="card">
            <img src={'/' + post.imagePath} alt={post.title} className="card-image"/>
            <h2>
                {post.title}
            </h2>
            <p>
                {post.body.substring(0, 100)}...
            </p>
        </div>
    )
}

export default PostCard