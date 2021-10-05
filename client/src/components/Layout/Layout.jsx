import React from "react"
import Footer from "../Footer/Footer"
import Nav from "../Nav/Nav"
import "./Layout.css"

export default function Layout(props) {
  return (
    <div>
      <Nav />
      <div className="container">{props.children}</div>
      <Footer />
    </div>
  )
}
