import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"
import "./Nav.css"

export default function Nav(props) {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/products">Products</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
        {props.currentUser ? (
          <div>
            <p className="nav-username">{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  )
}
