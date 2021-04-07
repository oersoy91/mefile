import Head from "next/head";
import styles from "../styles/Home.module.css";
import Cal from "../components/calendar/calendar";
import Charts from "../components/charts/charts";
import EmployeeAmount from "../components/employeeAmount/employeeAmount";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mefile</title>
      </Head>

      <main className={styles.main}>
        <Cal />
        <EmployeeAmount />
      </main>
    </div>
  );
}
