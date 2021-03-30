import { Person } from "../../utils/types";
import styles from "./employeeDetails.module.css";

export type EmployeeDetailProps = {
  persons: Person;
};
const EmployeeDetails = ({ persons }: EmployeeDetailProps) => {
  return (
    <div className={styles.container}>
      <div>{persons.last_name}</div>
      <div>{persons.first_name}</div>
      <div>{persons.id}</div>
      <div>{persons.age}</div>
    </div>
  );
};

export default EmployeeDetails;
