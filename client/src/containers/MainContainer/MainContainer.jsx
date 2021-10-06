import { useEffect, useState } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import {
  deleteProduct,
  getAllProducts,
  postProduct,
  putProduct,
} from "../../services/products"
import { getAllPosts } from "../../services/posts"
import Products from "../../screens/Products/Products"
import ProductDetail from "../../screens/ProductDetail/ProductDetail"
import EditProduct from "../../screens/EditProduct/EditProduct"
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

  return (
    <Switch>
      <Route path="/products/:id/edit">
        <EditProduct
          products={products}
          handleProductUpdate={handleProductUpdate}
        />
      </Route>
      <Route path="/products/:id">
        <ProductDetail
          handleDelete={handleProductDelete}
          products={products}
          currentUser={props.currentUser}
        />
      </Route>
      <Route path="/products">
        <Products products={products} />
      </Route>
    </Switch>
  )
}
