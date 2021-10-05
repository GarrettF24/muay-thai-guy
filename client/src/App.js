import "./App.css"
import { Switch, Route } from "react-router"
import Layout from "./components/Layout/Layout"
import Login from "./screens/Login/Login"

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App
