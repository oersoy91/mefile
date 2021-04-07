import Head from "next/head";
import styles from "../styles/Home.module.css";
import MyApp from "../components/calendar/calendar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mefile</title>
      </Head>

      <main className={styles.main}>
        <MyApp />
      </main>
    </div>
  );
}
