import Head from "next/head";
import styles from "../styles/Home.module.css";
import Cal from "../components/calendar/calendar";
import Charts from "../components/charts/charts";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mefile</title>
      </Head>

      <main className={styles.main}>
        <Cal />
        <Charts />
      </main>
    </div>
  );
}
