import React, { useEffect, useState } from "react"
import { getOneProduct } from "../../services/products"
import { useParams } from "react-router-dom"

export default function ProductDetail(props) {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getOneProduct(id)
      setProduct(productData)
    }
    fetchProduct()
  }, [id])

  return (
    <div className="product-detail-page">
      <div className="product-image">
        <img src={props.image_url} alt="image" />
      </div>
      <div className="product-info">
        <h3>{props.name}</h3>
        <h3>{props.category}</h3>
        <h3>{props.brand}</h3>
      </div>
      <div className="product-review">
        <p>{props.review}</p>
      </div>
      <div className="product-crud">
        {props.currentUser ? (
          <div className="crud-btns">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ) : null}
      </div>
    </div>
  )
}
