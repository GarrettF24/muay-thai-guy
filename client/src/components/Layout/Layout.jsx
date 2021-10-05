import React from "react"
import Footer from "../Footer/Footer"
import Nav from "../Nav/Nav"

export default function Layout(props) {
  return (
    <div>
      <Nav />
      <div className="container">{props.children}</div>
      <Footer />
    </div>
  )
}
