import "./PostCard.css"
import { Link } from "react-router-dom"

export default function PostCard(props) {
  return (
    <Link className="post-link" to={`/posts/${props.post.id}`}>
      <div className="post-card">
        <h1>{props.post.title}</h1>
      </div>
    </Link>
  )
}
