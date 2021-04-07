import styles from "./employeeAmount.module.css";
import Charts from "../charts/charts";

export default function EmployeeAmount() {
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.header}>Mitarbeiterzahl</h2>
        <div className={styles.genderContainer}>
          <div className={styles.genderAmountContainer}>
            <p className={styles.amount}>10</p>
            <p>Gesamt</p>
          </div>
          <div className={styles.genderAmountContainer}>
            <p className={styles.amount}>10</p>
            <p>Männlich</p>
          </div>
          <div className={styles.genderAmountContainer}>
            <p className={styles.amount}>10</p>
            <p>Weiblich</p>
          </div>
          <div className={styles.genderAmountContainer}>
            <p className={styles.amount}>10</p>
            <p>Diverse</p>
          </div>
        </div>
        <Charts />
      </div>
    </div>
  );
}
