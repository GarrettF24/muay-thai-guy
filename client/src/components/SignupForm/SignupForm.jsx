import { useState } from "react"

export default function SignupForm(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
    <form
      onSubmit={(e) => {
        e.preventDefault()
        props.handleRegister(formData)
      }}
    >
      <h3>Sign Up</h3>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <br />

      <input
        type="text"
        placeholder="Email"
        name="email"
        value={formData.email}
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
  )
}
