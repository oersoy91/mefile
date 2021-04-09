import type { Employee } from "../utils/types";
import styles from "../styles/employees.module.css";
import useSWR from "swr";
import Searchbox from "../components/searchbox/Searchbox";
import { ChangeEvent, useState } from "react";
import Head from "next/head";
import EmployeeList from "../components/employeeList/employeeList";
import LoadingSpinner from "../components/loadingSpinner/loadingSpinner";
import Popup from "../components/popup/popup";
import NewEmployee from "../components/newEmployee/newEmployee";
import Navbar from "../components/navbar/navbar";

export type EmployeeListPageProps = { persons: Employee[] };

export const fetcher = (url) => fetch(url).then((res) => res.json());
export default function EmployeeListPage() {
  const { data: employeeList, error } = useSWR("/api/employees", fetcher);
  const [keyword, setKeyword] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value.toLowerCase());
  };

  if (error) return <div>failed to load</div>;
  if (!employeeList)
    return (
      <div className={styles.container}>
        <LoadingSpinner />
      </div>
    );

  const filterEmployees = employeeList.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(keyword) ||
      employee.lastName.toLowerCase().includes(keyword)
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>mefiele</title>
      </Head>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.addEmployee}>
          <button
            className={styles.addEmployeeButton}
            onClick={() => setButtonPopup(true)}
          >
            Mitarbeiter hinzufügen
            <img src="img/addEmployeeIcon.svg" alt="searchIcon" />
          </button>
        </div>
        <Searchbox onChange={inputChange} />

        <EmployeeList persons={filterEmployees} />
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <NewEmployee />
      </Popup>
    </div>
  );
}
