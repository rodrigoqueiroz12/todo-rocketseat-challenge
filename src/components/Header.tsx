import logo from "/logo.svg"
import styles from "./Header.module.css"

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src={logo} alt="A rocket with a todo text" />
      </a>
    </header>
  )
}
