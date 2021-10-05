import LoginForm from "../../components/LoginForm/LoginForm"
export default function Login(props) {
  return <LoginForm handleLogin={props.handleLogin} />
}
