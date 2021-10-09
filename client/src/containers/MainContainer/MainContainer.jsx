import { useEffect, useState } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import {
  deleteProduct,
  getAllProducts,
  postProduct,
  putProduct,
} from "../../services/products"
import {
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
} from "../../services/posts"
import Products from "../../screens/Products/Products"
import ProductDetail from "../../screens/ProductDetail/ProductDetail"
import EditProduct from "../../screens/EditProduct/EditProduct"
import CreateProduct from "../../screens/CreateProduct/CreateProduct"
import LandingPage from "../../components/LandingPage/LandingPage"
import Posts from "../../screens/Posts/Posts"
import PostDetail from "../../screens/PostDetail/PostDetail"
import About from "../../screens/About/About"
import CreatePost from "../../screens/CreatePost/CreatePost"
import EditPost from "../../screens/EditPost/EditPost"
import "./MainContainer.css"

export default function MainContainer(props) {
  const [products, setProducts] = useState([])
  const [posts, setPosts] = useState([])

  const history = useHistory()

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

  const handleProductCreate = async (productData) => {
    const newProduct = await postProduct(productData)
    setProducts((prevState) => [...prevState, newProduct])
    history.push("/products")
  }

  const handleProductDelete = async (id) => {
    await deleteProduct(id)
    setProducts((prevState) =>
      prevState.filter((productItem) => productItem.id !== id)
    )
    history.push("/products")
  }

  const handleProductUpdate = async (id, productData) => {
    const updatedProduct = await putProduct(id, productData)
    setProducts((prevState) =>
      prevState.map((product) => {
        return product.id === Number(id) ? updatedProduct : product
      })
    )
    history.push("/products")
  }

  const handlePostCreate = async (postData) => {
    const newPost = await createPost(postData)
    setPosts((prevState) => [...prevState, newPost])
    history.push("/posts")
  }

  const handlePostDelete = async (id) => {
    await deletePost(id)
    setPosts((prevState) => prevState.filter((post) => post.id !== id))
    history.push("/posts")
  }

  const handlePostUpdate = async (id, postData) => {
    const updatedPost = await updatePost(id, postData)
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? updatedPost : post
      })
    )
    history.push("/posts")
  }

  return (
    <Switch>
      <Route path="/posts/create">
        <CreatePost handlePostCreate={handlePostCreate} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/products/:id/edit">
        <EditProduct
          products={products}
          handleProductUpdate={handleProductUpdate}
        />
      </Route>
      <Route path="/products/create">
        <CreateProduct handleProductCreate={handleProductCreate} />
      </Route>
      <Route path="/products/:id">
        <ProductDetail
          handleProductDelete={handleProductDelete}
          products={products}
          currentUser={props.currentUser}
        />
      </Route>
      <Route path="/products">
        <Products
          // handleSearch={handleSearch}
          currentUser={props.currentUser}
          products={products}
        />
      </Route>
      <Route path="/posts/:id/edit">
        <EditPost posts={posts} handlePostUpdate={handlePostUpdate} />
      </Route>
      <Route path="/posts/:id">
        <PostDetail
          handlePostDelete={handlePostDelete}
          posts={posts}
          currentUser={props.currentUser}
        />
      </Route>
      <Route path="/posts">
        <Posts currentUser={props.currentUser} posts={posts} />
      </Route>
      <LandingPage />
    </Switch>
  )
}
