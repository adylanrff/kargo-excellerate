import React from "react"
import styles from "../component/Button.module.css"

const Button = (props) => {
  return (
    <button>
      <span>{props.name}</span>
    </button>
  )
}

export default Button
