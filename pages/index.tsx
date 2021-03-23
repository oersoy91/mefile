import Head from "next/head";
import Button from "../components/button/Button";
import Logo from "../components/logo/Logo";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mefile</title>
      </Head>

      <main className={styles.main}>
        <Button />
        <Logo />
      </main>
    </div>
  );
}
