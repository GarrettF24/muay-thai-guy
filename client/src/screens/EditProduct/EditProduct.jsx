import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function EditProduct(props) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    image_url: "",
    review: "",
  })
  const { id } = useParams()

  useEffect(() => {
    const prefillProduct = () => {
      const product = props.products.find(
        (product) => product.id === Number(id)
      )
      setFormData({
        name: product.name,
        category: product.category,
        brand: product.brand,
        image_url: product.image_url,
        review: product.review,
      })
    }
    if (props.products.length) {
      prefillProduct()
    }
  }, [props.products, id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          props.handleProductUpdate(id, formData)
        }}
      >
        <h3>Product Edit</h3>
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
          placeholder="Review..."
          name="review"
          value={formData.review}
          onChange={handleChange}
        />
        <br />

        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
