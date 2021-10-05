import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"
import "./Nav.css"

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/home">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/products">Products</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Admin</Link>
      </div>
    </nav>
  )
}
