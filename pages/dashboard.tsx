import Head from "next/head";
import styles from "../styles/Home.module.css";
import Cal from "../components/calendar/calendar";
import EmployeeAmount from "../components/employeeAmount/employeeAmount";
import BirthdayList from "../components/birthdayList/birthdayList";
import EndContractList from "../components/endContractList/endContractList";
import EndTrialPeriodList from "../components/endTrialPeriodList/endTrialPeriodList";
import EquipmentReturnList from "../components/equipmentReturnList/equipmentReturnList";
import StartContractList from "../components/startContractList/startContractList";
import Navbar from "../components/navbar/navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mefile</title>
      </Head>

      <main className={styles.main}>
        <Navbar />
        <BirthdayList />
        <Cal />
        <EndTrialPeriodList />
        <EmployeeAmount />
        <EndContractList />
        <EquipmentReturnList />
        <StartContractList />
      </main>
    </div>
  );
}
