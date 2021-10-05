import React from "react"
import SignupForm from "../../components/SignupForm/SignupForm"

export default function Signup(props) {
  return <SignupForm handleRegister={props.handleRegister} />
}
