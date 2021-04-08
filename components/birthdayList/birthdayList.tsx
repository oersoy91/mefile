import styles from "./birthdayList.module.css";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";
import useSWR from "swr";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BirthdayList() {
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

        {data.length === 0 ? (
          <>
            <div className={styles.notification}>
              <div>Keine Geburtstage in den nächsten 30 Tagen</div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.row}>
              <div>Personal-ID</div>

              <div>Vorname</div>

              <div>Nachname</div>

              <div>Geburtsdatum</div>
            </div>

            {data.map((employee) => (
              <div className={styles.list} key={employee.id}>
                <div>{employee.id}</div>
                <div>{employee.firstName}</div>
                <div>{employee.lastName}</div>
                <div>{new Date(employee.birthday).toLocaleDateString()}</div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
