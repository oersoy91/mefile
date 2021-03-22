import Head from "next/head";
import EmployeeList from "../components/employeeList/employeeList";
import Searchbox from "../components/searchbox/searchbox";
import { useState } from "react";

import styles from "../styles/Home.module.css";

export default function EmployeeListPage({ persons }) {
  const [keyword, setKeyword] = useState("");

  const filterPersons = persons.filter(
    (person) =>
      person.first_name.toLowerCase().includes(keyword) ||
      person.last_name.toLowerCase().includes(keyword)
  );

  const inputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>mefile</title>
      </Head>

      <main className={styles.main}>
        <Searchbox onChange={inputChange} />
        <EmployeeList persons={filterPersons} />
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
