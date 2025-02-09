import {
  RiDashboardLine,
  RiPuzzleLine,
  RiStackLine,
  RiFileListLine,
  RiTableLine,
  RiFileTextLine,
  RiMoreLine,
} from "react-icons/ri"
import styles from "../styles/Sidebar.module.css"

const Sidebar = () => {
  const menuItems = [
    { icon: RiDashboardLine, text: "Dashboard", active: true },
    { icon: RiPuzzleLine, text: "UI Elements" },
    { icon: RiStackLine, text: "Components" },
    { icon: RiFileListLine, text: "Forms Stuff" },
    { icon: RiTableLine, text: "Data Table" },
    { icon: RiFileTextLine, text: "Icons" },
    { icon: RiFileTextLine, text: "Sample Page" },
    { icon: RiMoreLine, text: "Extra" },
  ]

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h2>blueBox</h2>
      </div>

      <div className={styles.profile}>
        <img src="/placeholder.svg?height=40&width=40" alt="Profile" className={styles.avatar} />
        <div className={styles.profileInfo}>
          <h3>Angelina Doe</h3>
          <p>angelina@doe.com</p>
        </div>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((item, index) => (
          <a key={index} href="#" className={`${styles.navItem} ${item.active ? styles.active : ""}`}>
            <item.icon />
            <span>{item.text}</span>
          </a>
        ))}
      </nav>

      <button className={styles.addProject}>Add Project</button>
    </div>
  )
}

export default Sidebar

