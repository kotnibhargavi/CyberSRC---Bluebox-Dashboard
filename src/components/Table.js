import styles from "../styles/Table.module.css"

const Table = ({ data }) => {
  return (
    <div className={styles.tableContainer}>
      <h2>Standard Table Design</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>User Type</th>
            <th>Joined</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.userType}</td>
              <td>{row.joined}</td>
              <td>
                <span className={`${styles.status} ${styles[row.status.toLowerCase()]}`}>{row.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table

