import { Link } from "react-router-dom"
import "./Posts.css"
import PostCard from "../../components/PostCard/PostCard"
export default function Posts(props) {
  return (
    <>
      <div className="posts-container">
        {props.posts.map((post, index) => {
          return <PostCard key={index} post={post} />
        })}
      </div>
      {props.currentUser !== null ? (
        <div className="create-post-button">
          <Link to="/posts/create">
            <button>Create</button>
          </Link>
        </div>
      ) : null}
    </>
  )
}
