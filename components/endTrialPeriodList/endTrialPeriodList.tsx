import styles from "./endTrialPeriodList.module.css";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";
import useSWR from "swr";
import Link from "next/link";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export default function EndTrialPeriodList() {
  const { data, error } = useSWR("/api/endTrialPeriodList", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  console.log(data);
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.header}>Probezeiten</h2>

        {data.length > 0 ? (
          <>
            <p className={styles.subhead}>
              Probezeit von Mitarbeitern die in den nächsten 30 Tagen auslaufen.
            </p>
          </>
        ) : (
          <></>
        )}

        {data.length === 0 ? (
          <>
            <div className={styles.notification}>
              <div>
                Keine Mitarbeiter deren Probezeit in den nächsten 30 Tagen
                ausläuft.
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.row}>
              <div></div>
              <div>ID</div>

              <div>Vorname</div>

              <div>Nachname</div>

              <div>Ende der Probezeit</div>
            </div>

            {data.map((employee) => (
              <Link href={`/employee/${employee.id}`} key={employee.id}>
                <div className={styles.list}>
                  <div>
                    <img
                      src={
                        employee.profileImg
                          ? employee.profileImg
                          : `/img/profileImg.png`
                      }
                      alt={employee.firstName}
                    />
                  </div>
                  <div>{employee.id}</div>
                  <div>{employee.firstName}</div>
                  <div>{employee.lastName}</div>
                  <div>
                    {new Date(employee.endTrialPeriod).toLocaleDateString()}
                  </div>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
