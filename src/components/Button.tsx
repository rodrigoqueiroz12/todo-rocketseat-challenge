import { ReactNode } from "react"
import styles from "./Button.module.css"

interface ButtonProps {
  type?: "button" | "submit" | "reset"
  variant?: "primary" | "secondary" | "danger"
  children: ReactNode
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`
        ${styles.button}
        ${props.variant === "primary" ? styles.primary : null} 
        ${props.variant === "secondary" ? styles.secondary : null}
        ${props.variant === "danger" ? styles.danger : null}
      `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
