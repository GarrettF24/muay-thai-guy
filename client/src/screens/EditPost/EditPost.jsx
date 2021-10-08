import { useState, useEffect } from "react"
import { useParams } from "react-router"
import "./EditPost.css"
import React from "react"

export default function EditPost(props) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  })

  const { id } = useParams()

  useEffect(() => {
    const prefillPost = () => {
      const post = props.posts.find((post) => post.id === Number(id))
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
    <div className="edit-form-holder">
      <div className="edit-post-form-container">
        <form
          id="edit-post-form"
          action=""
          method="post"
          onSubmit={(e) => {
            e.preventDefault()
            props.handlePostUpdate(id, formData)
          }}
        >
          <h2 className="edit-post-form-h2">Edit a Post</h2>
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
      </div>
    </div>
  )
}

// ;<form
//   id="edit-form"
//   action=""
//   method="post"
//   onSubmit={(e) => {
//     e.preventDefault()
//     props.handleProductCreate(formData)
//   }}
// >
//   <h2>Edit a Product</h2>
//   <fieldset>
//     <input
//       type="text"
//       placeholder="Name"
//       name="name"
//       value={formData.name}
//       onChange={handleChange}
//       type="text"
//       tabindex="1"
//       required
//       autofocus
//     />
//   </fieldset>
//   <fieldset>
//     <input
//       type="text"
//       placeholder="Category"
//       name="category"
//       value={formData.category}
//       onChange={handleChange}
//       tabindex="2"
//       required
//     />
//   </fieldset>
//   <fieldset>
//     <input
//       type="text"
//       placeholder="Brand"
//       name="brand"
//       value={formData.brand}
//       onChange={handleChange}
//       tabindex="3"
//       required
//     />
//   </fieldset>
//   <fieldset>
//     <input
//       type="text"
//       placeholder="Image"
//       name="image_url"
//       value={formData.image_url}
//       onChange={handleChange}
//       tabindex="4"
//       required
//     />
//   </fieldset>
//   <fieldset>
//     <textarea
//       type="text"
//       placeholder="Review here..."
//       name="review"
//       value={formData.review}
//       onChange={handleChange}
//       tabindex="5"
//       required
//     ></textarea>
//   </fieldset>
//   <fieldset>
//     <button
//       name="submit"
//       type="submit"
//       id="contact-submit"
//       data-submit="...Sending"
//     >
//       Submit
//     </button>
//   </fieldset>
//   <p class="copyright">
//     Designed by{" "}
//     <a href="https://colorlib.com" target="_blank" title="Colorlib">
//       Colorlib
//     </a>
//   </p>
// </form>
