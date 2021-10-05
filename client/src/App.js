import "./App.css"
import { Switch, Route } from "react-router"
import Layout from "./components/Layout/Layout"
import Login from "./screens/Login/Login"
import Signup from "./screens/Signup/Signup"
import { useState, useEffect } from "react"

import { loginUser, registerUser, verifyUser } from "./services/auth"

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])

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
