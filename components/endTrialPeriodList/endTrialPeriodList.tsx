import styles from "./endTrialPeriodList.module.css";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";
import useSWR from "swr";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export default function EndTrialPeriodList() {
  const { data, error } = useSWR("/api/endTrialPeriodList", fetcher);

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
        <h2 className={styles.header}>Probezeiten</h2>
        <p className={styles.subhead}>
          Probezeit von Mitarbeitern die in den nächsten 30 Tagen auslaufen
        </p>
        <div className={styles.notification}>
          <div>
            Keine Mitarbeiter deren Probezeit in den nächsten 30 Tagen ausläuft
          </div>
        </div>

        <div className={styles.row}>
          <div>Personal-ID</div>

          <div>Vorname</div>

          <div>Nachname</div>

          <div>Ende der Probezeit</div>
        </div>

        {data.map((employee) => (
          <div className={styles.list} key={employee.id}>
            <div>{employee.id}</div>
            <div>{employee.firstName}</div>
            <div>{employee.lastName}</div>
            <div>{new Date(employee.endTrialPeriod).toLocaleDateString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
