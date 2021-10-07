import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"
import "./Nav.css"
import { IoMdLogOut } from "react-icons/io"

export default function Nav(props) {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img id="nav-logo" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/products">Products</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
        {props.currentUser ? (
          <div className="nav-user">
            <p className="nav-username"> Hello, {props.currentUser.username}</p>
            <IoMdLogOut className="logout" onClick={props.handleLogout} />
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  )
}
