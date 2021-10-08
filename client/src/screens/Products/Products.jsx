import React, { useState } from "react"
import ProductCard from "../../components/ProductCard/ProductCard"
// import Search from "../../components/Search/Search"
import "./Products.css"
import { Link } from "react-router-dom"
export default function Products(props) {
  return (
    <>
      <div className="products-container">
        {/* <Search
          products={props.products}
          onsSubmit={props.handleSubmit}
          handleSearch={props.handleSearch}
        /> */}
        <div className="product-header">
          <h1>Check out my reviews on top selling brands</h1>
        </div>
        {props.products.map((product, index) => {
          return <ProductCard key={index} product={product} />
        })}
        {props.currentUser !== null ? (
          <div className="create-button">
            <Link to="/products/create">
              <button>Create</button>
            </Link>
          </div>
        ) : null}
      </div>
    </>
  )
}
