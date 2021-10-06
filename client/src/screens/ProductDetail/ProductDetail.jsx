import React, { useEffect, useState } from "react"
import { getOneProduct } from "../../services/products"
import { useParams } from "react-router-dom"

export default function ProductDetail(props) {
  const [product, setProduct] = useState({})
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

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

  if (!isLoaded) {
    return <h1>Loading Jam...</h1>
  }

  return (
    <div className="product-detail-page">
      <div className="product-image">
        <img src={product.image_url} alt="image" />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <h3>{product.category}</h3>
        <h3>{product.brand}</h3>
      </div>
      <div className="product-review">
        <p>{product.review}</p>
      </div>
      <div className="product-crud">
        {props.currentUser !== null ? (
          <div className="crud-buttons">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ) : null}
      </div>
    </div>
  )
}
