import "./PostCard.css"
import { Link } from "react-router-dom"

export default function PostCard(props) {
  return (
    <div className="post-card">
      <Link to={`/posts/${props.post.id}`}>
        <h1>{props.post.title}</h1>
      </Link>
    </div>
  )
}
