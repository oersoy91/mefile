import Link from "next/link";
import { Person } from "../../utils/types";
import styles from "./employeeList.module.css";

export type EmployeeListProps = {
  persons: Person[];
};

const EmployeeList = ({ persons }: EmployeeListProps) => {
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.header}>Mitarbeiterliste</h2>

        <div className={styles.row}>
          <div></div>
          <div>ID</div>

          <div>Vorname</div>

          <div>Nachname</div>

          <div>Position</div>
        </div>
        {persons.map((person) => (
          <Link href={`/employee/${person.id}`} key={person.id}>
            <div className={styles.list}>
              <div>
                <img
                  src={
                    person.profileImg
                      ? person.profileImg
                      : `/img/profileImg.png`
                  }
                  alt={person.firstName}
                />
              </div>
              <div>{person.id}</div>
              <div>{person.firstName}</div>
              <div>{person.lastName}</div>
              <div>{person.position}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
