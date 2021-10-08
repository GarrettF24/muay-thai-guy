import React, { useState } from "react"
import ProductCard from "../../components/ProductCard/ProductCard"
import Search from "../../components/Search/Search"
import "./Products.css"
import { Link } from "react-router-dom"
export default function Products(props) {
  // const [searchResult, setSearchResult] = useState([])
  // const [applySort, setApplySort] = useState(false)

  // const handleSearch = (event) => {
  //   const results = props.products.filter((product) =>
  //     product.name.toLowerCase().includes(event.target.value.toLowerCase())
  //   )
  //   setSearchResult(results)
  //   setApplySort(true)
  // }

  return (
    <>
      <div className="products-container">
        {/* <Search
          products={props.products}
          onsSubmit={props.handleSubmit}
          handleSearch={handleSearch}
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
