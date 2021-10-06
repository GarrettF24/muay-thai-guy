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
    const prefillFormData = () => {
      const singleProduct = props.products.find(
        (product) => product.id === Number(id)
      )
      setFormData({
        name: singleProduct.name,
        category: singleProduct.category,
        brand: singleProduct.brand,
        image_url: singleProduct.image_url,
        review: singleProduct.review,
      })
    }
    if (props.products.length) {
      prefillFormData()
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
        name="category"
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
  )
}
