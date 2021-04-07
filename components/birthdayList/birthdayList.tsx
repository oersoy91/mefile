import styles from "./birthdayList.module.css";

export default function BirthdayList() {
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

        <div className={styles.list}>
          <div>001</div>

          <div>Osman</div>

          <div>Ersoy</div>

          <div>31.05.1991</div>
        </div>
        <div className={styles.list}>
          <div>001</div>

          <div>Osman</div>

          <div>Ersoy</div>

          <div>31.05.1991</div>
        </div>
      </div>
    </div>
  );
}
