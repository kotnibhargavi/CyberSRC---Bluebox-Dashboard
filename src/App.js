import { RiWalletLine, RiDatabase2Line, RiUserLine } from "react-icons/ri"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import StatsCard from "./components/StatsCard"
import Table from "./components/Table"
import styles from "./styles/App.module.css"

const tableData = [
  {
    name: "Mike Bhand",
    email: "mikebhand@gmail.com",
    userType: "Admin",
    joined: "25 Apr 2019",
    status: "Active",
  },
  {
    name: "Andrew Strauss",
    email: "and@gmail.com",
    userType: "Editor",
    joined: "25 Apr 2019",
    status: "Approved",
  },
  {
    name: "Ross Kopelman",
    email: "kopelman@gmail.com",
    userType: "Subscriber",
    joined: "25 Apr 2019",
    status: "Approved",
  },
  {
    name: "Mike Hussy",
    email: "mikehussy@gmail.com",
    userType: "Admin",
    joined: "25 Apr 2019",
    status: "Pending",
  },
  {
    name: "Kevin Pietersen",
    email: "pietersen@gmail.com",
    userType: "Admin",
    joined: "25 Apr 2019",
    status: "Active",
  },
]

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <main className={styles.main}>
        <Header />
        <div className={styles.content}>
          <h1>Dashboard</h1>

          <div className={styles.stats}>
            <StatsCard title="Stock Total" value="$150000" increase="60%" color="purple" icon={RiWalletLine} />
            <StatsCard title="Total Profit" value="$25000" increase="30%" color="blue" icon={RiDatabase2Line} />
            <StatsCard title="Unique Visitors" value="250000" increase="30%" color="coral" icon={RiUserLine} />
          </div>

          <Table data={tableData} />
        </div>
      </main>
    </div>
  )
}

export default App

