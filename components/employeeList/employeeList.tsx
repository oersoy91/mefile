import { Person } from "../../server/db";
import styles from "./employeeList.module.css";

export type EmployeeListProps = {
  persons: Person[];
};

const EmployeeList = ({ persons }: EmployeeListProps) => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerImg}></div>

        <button className={styles.headerFirstname}>
          <div>First Name</div>
        </button>

        <button className={styles.headerLastname}>
          <div>Last Name</div>
        </button>

        <button className={styles.headerStatus}>
          <div>Status</div>
        </button>

        <button className={styles.headerPosition}>
          <div>Position</div>
        </button>
      </div>

      {persons.map((person) => (
        <div className={styles.row} key={person._id}>
          <div className={styles.img}>
            <img src={person.profile_picture} alt={person.first_name} />
          </div>
          <div className={styles.firstname}>{person.first_name}</div>

          <div className={styles.lastname}>{person.last_name}</div>

          <div className={styles.status}>{person.status}</div>

          <div className={styles.position}>{person.position}</div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
