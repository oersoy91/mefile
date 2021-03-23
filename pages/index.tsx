import Head from "next/head";
import Button from "../components/button/Button";
import Logo from "../components/logo/Logo";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mefile</title>
      </Head>

      <main className={styles.main}>
        <Button />
        <Logo />
        <Link href={"/employeeListPage"}>
          <button>Klick mich um auf die nächste Seite zu gelangen</button>
        </Link>
      </main>
    </div>
  );
}
