import styles from "./birthdayList.module.css";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";
import useSWR from "swr";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Charts() {
  const { data, error } = useSWR("/api/birthdayList", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div className={styles.spinnerContainer}>
        <LoadingSpinner />
      </div>
    );

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.header}>Geburtstage</h2>
        <p className={styles.subhead}>Geburtstage der nächsten 30 Tage</p>
        <div className={styles.row}>
          <div className={styles.firstname}>Personal-ID</div>

          <div className={styles.lastname}>Vorname</div>

          <div className={styles.status}>Nachname</div>

          <div className={styles.position}>Geburtsdatum</div>
        </div>

        {data.map((employee) => (
          <div className={styles.list} key={employee.id}>
            <div>{employee.id}</div>
            <div>{employee.firstName}</div>
            <div>{employee.lastName}</div>
            <div>{new Date(employee.birthday).toLocaleDateString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
