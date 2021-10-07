import React, { useEffect, useState } from "react"
import { getOneProduct } from "../../services/products"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./ProductDetail.css"
// import { useHistory } from "react-router"

export default function ProductDetail(props) {
  const [product, setProduct] = useState({})
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  // const history = useHistory()

  useEffect(() => {
    console.log(id)
    const fetchProduct = async () => {
      const productData = await getOneProduct(id)
      console.log(productData)
      setLoaded(true)
      setProduct(productData)
    }
    fetchProduct()
  }, [id])

  // if (!isLoaded) {
  //   return <h1>Loading...</h1>
  // }

  return (
    <div className="product-detail-page">
      <div className="product-image">
        <img src={product.image_url} alt="image" />
      </div>
      <div className="product-info-container">
        <div className="product-info">
          <h3>Name: {product.name}</h3>
          <h3>Category: {product.category}</h3>
          <h3>Brand: {product.brand}</h3>
        </div>
        <div className="product-review">
          <h5>Review...</h5>
          <p>{product.review}</p>
        </div>
        <div className="product-crud">
          {props.currentUser !== null ? (
            <div className="crud-buttons">
              <Link to={`/products/${id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => props.handleProductDelete(product.id)}>
                Delete
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
