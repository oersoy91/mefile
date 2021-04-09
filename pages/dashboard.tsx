import Head from "next/head";
import styles from "../styles/dashboard.module.css";
import Cal from "../components/calendar/calendar";
import EmployeeAmount from "../components/employeeAmount/employeeAmount";
import BirthdayList from "../components/birthdayList/birthdayList";
import EndContractList from "../components/endContractList/endContractList";
import EndTrialPeriodList from "../components/endTrialPeriodList/endTrialPeriodList";
import EquipmentReturnList from "../components/equipmentReturnList/equipmentReturnList";
import StartContractList from "../components/startContractList/startContractList";
import Navbar from "../components/navbar/navbar";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mefile</title>
      </Head>

      <main className={styles.main}>
        <Navbar />
        <div className={styles.calendar}>
          <Cal />
        </div>

        <div className={styles.firstLine}></div>
        <EmployeeAmount />
        <div className={styles.line}></div>
        <BirthdayList />
        <div className={styles.line}></div>

        <EndTrialPeriodList />
        <div className={styles.line}></div>

        <EndContractList />
        <div className={styles.line}></div>

        <EquipmentReturnList />
        <div className={styles.line}></div>

        <StartContractList />
        <div className={styles.line}></div>
      </main>
    </div>
  );
}
