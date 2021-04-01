import { deleteData } from "../../utils/fetchData";
import { Person } from "../../utils/types";
import styles from "./employeeDetails.module.css";

export type EmployeeDetailProps = {
  persons: Person;
};

const EmployeeDetails = ({ persons }: EmployeeDetailProps) => {
  const adress =
    persons.adress.street +
    " " +
    persons.adress.houseNumber +
    ", " +
    persons.adress.zipCode +
    " " +
    persons.adress.city;

  return (
    <>
      <div className={styles.headerContainer}>
        <img
          src={persons.profileImg}
          alt={persons.firstName}
          className={styles.headerImg}
        />
        <div className={styles.headerNamePosition}>
          <h1 className={styles.headerName}>
            {persons.firstName} {persons.lastName}
          </h1>
          <p className={styles.headerPosition}>{persons.position}</p>
        </div>
      </div>

      <div className={styles.navContainer}>
        <nav>
          <ul className={styles.navLink}>
            <li>
              <a href="#baseData">Stammdaten</a>
            </li>
            <li>
              <a href="#personData">Personalinformation</a>
            </li>
            <li>
              <a href="#eqData">Geräteausleihe</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.employeeDataContainer} id="baseData">
          <h2 className={styles.mainHeader}>Stammdaten</h2>
          <label htmlFor="name">Vorname</label>
          <input type="text" value={persons.firstName} />
          <label htmlFor="name">Nachname</label>
          <input type="text" value={persons.lastName} />
          <label htmlFor="name">Geburtsdatum</label>
          <input
            type="text"
            value={new Date(persons.birthday).toLocaleDateString()}
          />
          <label htmlFor="name">Geschlecht</label>
          <input type="text" value={persons.gender} />
          <label htmlFor="name">Adresse</label>
          <input type="text" value={adress} />
          <label htmlFor="name">E-Mail</label>
          <input type="text" value={persons.email} />
        </div>
        <div className={styles.employeeDataContainer} id="personData">
          <h2 className={styles.mainHeader}>Personalinformation</h2>
          <label htmlFor="name">Personal ID</label>
          <input type="text" value={persons.id} />
          <label htmlFor="name">Vertragsbeginn</label>
          <input type="text" value={persons.lastName} />
          <label htmlFor="name">Vertragsende</label>
          <input type="text" value={persons.birthday} />
          <label htmlFor="name">Ende der Probezeit</label>
          <input type="text" value={persons.gender} />
          <label htmlFor="name">Position</label>
          <input type="text" value={adress} />
          <label htmlFor="name">Status</label>
          <input type="text" value={persons.email} />
        </div>
        <div className={styles.employeeDataContainer} id="eqData">
          <h2 className={styles.mainHeader}>Geräteausleihe</h2>
          <label htmlFor="name">Gerät</label>
          <input type="text" value={persons.id} />
          <label htmlFor="name">Inventurnummer</label>
          <input type="text" value={persons.lastName} />
          <label htmlFor="name">Seriennummer</label>
          <input type="text" value={persons.birthday} />
          <label htmlFor="name">Übergabedatum</label>
          <input type="text" value={persons.gender} />
          <label htmlFor="name">Rückgabedatum</label>
          <input type="text" value={adress} />
        </div>
      </div>
      <div className={styles.btnContainer}>
        <div>
          <button className={styles.btnEdit}>Mitarbeiter bearbeiten</button>
        </div>
        <div>
          <button
            onClick={() => deleteData(persons.id)}
            className={styles.btnDelete}
          >
            Mitarbeiter löschen
          </button>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
