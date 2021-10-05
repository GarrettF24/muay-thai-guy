import { useEffect, useState } from "react"
import { getAllProducts } from "../../services/products"
import { getAllPosts } from "../../services/posts"

export default function MainContainer(props) {
  const [products, setProducts] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts()
      setProducts(products)
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getAllPosts()
      setPosts(posts)
    }
    fetchPosts()
  }, [])

  return (
    <div>
      <h1>MainContainer</h1>
    </div>
  )
}
