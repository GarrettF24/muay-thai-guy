import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"

export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <Link to="/home">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/products">Products</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}
