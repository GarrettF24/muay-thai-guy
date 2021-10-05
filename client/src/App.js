import "./App.css"
import { Switch, Route } from "react-router"
import Layout from "./components/Layout/Layout"
import Login from "./screens/Login/Login"
import { useState } from "react"

import { loginUser, registerUser } from "./services/auth"
import Signup from "./screens/Signup/Signup"

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
  }

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <Signup handleRegister={handleRegister} />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App
