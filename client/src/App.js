import "./App.css"
import { Switch, Route } from "react-router"
import Layout from "./components/Layout/Layout"
import Login from "./screens/Login/Login"
import { useState } from "react"

import { loginUser } from "./services/auth"

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
  }

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App
