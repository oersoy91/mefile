import Head from "next/head";
import styles from "../styles/Home.module.css";
import Login from "../components/login/login";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mefile</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <img src="img/mefileLogo.svg" alt="logo" />
          <p className={styles.heading}>Deine digiale Personalakte</p>
        </div>
        <Login />
      </main>
    </div>
  );
}
