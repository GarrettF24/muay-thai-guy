import React from "react"
import { useState } from "react"
import "./CreatePost.css"
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
    <div className="create-form-holder">
      <div className="create-post-form-container"></div>
      <form
        id="create-post-form"
        action=""
        method="post"
        onSubmit={(e) => {
          e.preventDefault()
          props.handleProductCreate(formData)
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

// ;<div class="create-container">
//   <div class="form-container">
//     <form
//       id="create-post-form"
//       action=""
//       method="post"
//       onSubmit={(e) => {
//         e.preventDefault()
//         props.handleProductCreate(formData)
//       }}
//     >
//       <h2>Create a Post</h2>
//       <fieldset>
//         <input
//           type="text"
//           placeholder="Title"
//           name="title"
//           value={formData.name}
//           onChange={handleChange}
//           type="text"
//           tabindex="1"
//           required
//           autofocus
//         />
//       </fieldset>
//       <fieldset>
//         <input
//           type="text"
//           placeholder="Category"
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           tabindex="2"
//           required
//         />
//       </fieldset>
//       <fieldset>
//         <input
//           type="text"
//           placeholder="Brand"
//           name="brand"
//           value={formData.brand}
//           onChange={handleChange}
//           tabindex="3"
//           required
//         />
//       </fieldset>
//       <fieldset>
//         <input
//           type="text"
//           placeholder="Image"
//           name="image_url"
//           value={formData.image_url}
//           onChange={handleChange}
//           tabindex="4"
//           required
//         />
//       </fieldset>
//       <fieldset>
//         <textarea
//           type="text"
//           placeholder="Review here..."
//           name="review"
//           value={formData.review}
//           onChange={handleChange}
//           tabindex="5"
//           required
//         ></textarea>
//       </fieldset>
//       <fieldset>
//         <button
//           name="submit"
//           type="submit"
//           id="contact-submit"
//           data-submit="...Sending"
//         >
//           Submit
//         </button>
//       </fieldset>
//       <p class="copyright">
//         Designed by{" "}
//         <a href="https://colorlib.com" target="_blank" title="Colorlib">
//           Colorlib
//         </a>
//       </p>
//     </form>
//   </div>
// </div>
