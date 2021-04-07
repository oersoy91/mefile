import Head from "next/head";
import styles from "../styles/Home.module.css";
import Cal from "../components/calendar/calendar";
import EmployeeAmount from "../components/employeeAmount/employeeAmount";
import BirthdayList from "../components/birthdayList/birthdayList";
import EndContractList from "../components/endContractList/endContractList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mefile</title>
      </Head>

      <main className={styles.main}>
        <BirthdayList />
        <Cal />
        <EmployeeAmount />
        <EndContractList />
      </main>
    </div>
  );
}
