import { useState } from "react"
import "./CreateProduct.css"
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
    <div class="create-container">
      <div class="form-container">
        <form
          id="contact-form"
          action=""
          method="post"
          onSubmit={(e) => {
            e.preventDefault()
            props.handleProductCreate(formData)
          }}
        >
          <h2>Create a Product</h2>
          <fieldset>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              tabindex="1"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              type="text"
              placeholder="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              type="text"
              placeholder="Brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              tabindex="3"
              required
            />
          </fieldset>
          <fieldset>
            <input
              type="text"
              placeholder="Image"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              tabindex="4"
              required
            />
          </fieldset>
          <fieldset>
            <textarea
              type="text"
              placeholder="Review here..."
              name="review"
              value={formData.review}
              onChange={handleChange}
              tabindex="5"
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
          <p class="copyright">
            Designed by{" "}
            <a href="https://colorlib.com" target="_blank" title="Colorlib">
              Colorlib
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}
