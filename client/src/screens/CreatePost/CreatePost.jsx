import React from "react"

export default function CreatePost(props) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  })
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
        props.handlePostCreate(formData)
      }}
    >
      <h3>New Blog Post</h3>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        placeholder="Content"
        name="content"
        value={formData.content}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}
