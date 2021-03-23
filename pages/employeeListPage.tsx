import type { Person } from "../utils/types";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Searchbox from "../components/searchbox/Searchbox";
import { ChangeEvent, useState } from "react";
import Head from "next/head";
import EmployeeList from "../components/employeeList/employeeList";

export type EmployeeListPageProps = { persons: Person[] };

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function EmployeeListPage() {
  const { data: employeeList, error } = useSWR("/api/employeeList", fetcher);
  const [keyword, setKeyword] = useState("");

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value.toLowerCase());
  };

  if (error) return <div>failed to load</div>;
  if (!employeeList) return <div>loading...</div>;

  const filterPersons = employeeList.filter(
    (person) =>
      person.first_name.toLowerCase().includes(keyword) ||
      person.last_name.toLowerCase().includes(keyword)
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>mefiele</title>
      </Head>
      <main className={styles.main}>
        <Searchbox onChange={inputChange} />
        <EmployeeList persons={filterPersons} />
      </main>
    </div>
  );
}
