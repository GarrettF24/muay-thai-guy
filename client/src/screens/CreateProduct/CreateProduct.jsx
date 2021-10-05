import { useState } from "react"

export default function CreateProduct(props) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    image_url: "",
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
    <form
      onSubmit={(e) => {
        e.preventDefault()
        props.handleProductCreate(formData)
      }}
    >
      <h3>New Product</h3>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        placeholder="Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        placeholder="Brand"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        placeholder="Image"
        name="image_url"
        value={formData.image_url}
        onChange={handleChange}
      />
      <br />
      <textarea
        type="text"
        placeholder="Review"
        name="review"
        value={formData.review}
        onChange={handleChange}
      />
      <br />

      <br />
      <button>Submit</button>
    </form>
  )
}
