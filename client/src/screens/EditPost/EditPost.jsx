import { useState, useEffect } from "react"
import { useParams } from "react-router"

import React from "react"

export default function EditPost(props) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  })

  const { id } = useParams()

  useEffect(() => {
    const prefillPost = () => {
      const post = props.post.find((post) => post.id === Number(id))
      setFormData({
        title: post.title,
        content: post.content,
      })
    }
    if (props.posts.length) {
      prefillPost()
    }
  }, [props.posts, id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        props.handlePostUpdate(id, formData)
      }}
    >
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <br />
      <textarea
        type="text"
        placeholder="Content"
        name="content"
        value={formData.content}
        onChange={handleChange}
      />
      <br />
      <button>Submit</button>
    </form>
  )
}
