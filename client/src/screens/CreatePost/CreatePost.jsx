import React from "react"
import { useState } from "react"
import "./CreatePost.css"
export default function CreatePost(props) {
  const [formData, setFormData] = useState({
    title: "",
    review: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className="create-form-holder">
      <div className="create-post-form-container"></div>
      <form
        id="create-post-form"
        action=""
        method="post"
        onSubmit={(e) => {
          e.preventDefault()
          props.handlePostCreate(formData)
        }}
      >
        <h2>Create a Post</h2>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={formData.name}
          onChange={handleChange}
          type="text"
          tabindex="1"
          required
          autofocus
        />
        <br />
        <textarea
          type="text"
          placeholder="Review here..."
          name="review"
          value={formData.review}
          onChange={handleChange}
          tabindex="5"
          required
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
