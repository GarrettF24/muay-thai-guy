import React from "react"
import "./Search.css"
export default function Search(props) {
  return (
    <div className="search-input">
      <input
        className="search-form"
        name="search"
        value={props.products.name}
        onChange={(e) => props.handleSearch(e)}
        placeholder="Search"
        type="text"
      />
    </div>
  )
}
