import React from "react"
import ProductCard from "../../components/ProductCard/ProductCard"
import "./Products.css"
import { Link } from "react-router-dom"
export default function Products(props) {
  return (
    <>
      <div className="products-container">
        {props.products.map((product, index) => {
          return <ProductCard key={index} product={product} user={props.user} />
        })}
        <div className="create-button">
          <Link to="/products/create">
            <button>Create</button>
          </Link>
        </div>
      </div>
    </>
  )
}
