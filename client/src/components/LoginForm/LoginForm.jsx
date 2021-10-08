import React from "react"
import { useState } from "react"
import "./LoginForm.css"
export default function LoginForm(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className="login-container">
      <form
        id="login-form"
        onSubmit={(e) => {
          e.preventDefault()
          props.handleLogin(formData)
        }}
      >
        <h3>Login</h3>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

//   id="create-product-form"
//   action=""
//   method="post"
//   onSubmit={(e) => {
//     e.preventDefault()
//     props.handleProductCreate(formData)
//   }}
// >
//   <h2>Create a Product</h2>
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
