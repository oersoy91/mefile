import styles from "./employeeAmount.module.css";
import Charts from "../charts/charts";
import useSWR from "swr";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export default function EmployeeAmount() {
  const { data, error } = useSWR("/api/genderAmount", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  const male = data[0].männlich;
  const female = data[0].weiblich;
  const divers = data[0].diverse;
  const total = data[0].total;
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.header}>Mitarbeiter</h2>
        <p className={styles.subhead}>Anzahl der Mitarbeiter nach Geschlecht</p>
        <div className={styles.genderContainer}>
          <div className={styles.genderAmountContainer}>
            <p className={styles.amount}>{total}</p>
            <p>Gesamt</p>
          </div>
          <div className={styles.genderAmountContainer}>
            <p className={styles.amount}>{male}</p>
            <p>Männlich</p>
          </div>
          <div className={styles.genderAmountContainer}>
            <p className={styles.amount}>{female}</p>
            <p>Weiblich</p>
          </div>
          <div className={styles.genderAmountContainer}>
            <p className={styles.amount}>{divers}</p>
            <p>Diverse</p>
          </div>
        </div>
        <Charts />
      </div>
    </div>
  );
}
