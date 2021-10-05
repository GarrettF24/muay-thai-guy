import { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"
import { getAllProducts } from "../../services/products"
import { getAllPosts } from "../../services/posts"
import Products from "../../screens/Products/Products"

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
    <Switch>
      <Route path="/products">
        <Products products={products} />
      </Route>
    </Switch>
  )
}
