import Link from "next/link";
import { Employee } from "../../utils/types";
import styles from "./employeeList.module.css";

export type EmployeeListProps = {
  employees: Employee[];
};

const EmployeeList = ({ employees }: EmployeeListProps) => {
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
        {employees.map((employee) => (
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
              <div>{employee.position}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
