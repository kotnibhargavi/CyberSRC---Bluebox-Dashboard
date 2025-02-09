import { RiSearchLine, RiNotification3Line, RiSettings3Line } from "react-icons/ri"
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <RiSearchLine />
        <input type="text" placeholder="Search Project" />
      </div>

      <div className={styles.rightSection}>
        <button className={styles.iconButton}>
          <RiNotification3Line />
        </button>
        <button className={styles.iconButton}>
          <RiSettings3Line />
        </button>
        <img src="/placeholder.svg?height=32&width=32" alt="Profile" className={styles.profilePic} />
      </div>
    </header>
  )
}

export default Header

