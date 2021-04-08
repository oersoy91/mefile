import styles from "./startContractList.module.css";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";
import useSWR from "swr";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export default function StartContractList() {
  const { data, error } = useSWR("/api/startContractList", fetcher);

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
        <h2 className={styles.header}>Neuzugänge</h2>
        <p className={styles.subhead}>
          Mitarbeiter Neuzugänge in den letzten 30 Tagen
        </p>

        {data.length === 0 ? (
          <>
            <div className={styles.notification}>
              <div>Keine Mitarbeiter Neuzugänge in den letzten 30 Tagen</div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.row}>
              <div>Personal-ID</div>

              <div>Vorname</div>

              <div>Nachname</div>

              <div>Vertragsbeginn</div>
            </div>

            {data.map((employee) => (
              <div className={styles.list} key={employee.id}>
                <div>{employee.id}</div>
                <div>{employee.firstName}</div>
                <div>{employee.lastName}</div>
                <div>
                  {new Date(employee.startContract).toLocaleDateString()}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
