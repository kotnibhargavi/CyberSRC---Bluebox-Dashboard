import styles from "../styles/StatsCard.module.css"

const StatsCard = ({ title, value, increase, color, icon: Icon }) => {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <div className={styles.value}>{value}</div>
        <div className={styles.increase}>Increased by {increase}</div>
      </div>
    </div>
  )
}

export default StatsCard

