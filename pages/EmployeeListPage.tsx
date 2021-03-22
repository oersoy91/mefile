import Head from "next/head";
import EmployeeList from "../components/employeeList/employeeList";
import styles from "../styles/Home.module.css";

export default function EmployeeListPage({ persons }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>mefile</title>
      </Head>

      <main className={styles.main}>
        <EmployeeList persons={persons} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/employeeList");
  const persons = await res.json();

  return {
    props: {
      persons,
    },
  };
};
