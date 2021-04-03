import { deleteData } from "../../utils/fetchData";
import { Person } from "../../utils/types";
import styles from "./employeeDetails.module.css";
import { useRouter } from "next/router";
import PopupSmall from "../popupSmall/popupSmall";
import Popup from "../popup/popup";
import EditEmployee from "../editEmployee/editEmployee";

import { useState } from "react";

export type EmployeeDetailProps = {
  persons: Person;
};

const EmployeeDetails = ({ persons }: EmployeeDetailProps) => {
  const [buttonPopupDelete, setButtonPopupDelete] = useState(false);
  const [buttonPopupEdit, setButtonPopupEdit] = useState(false);

  const router = useRouter();
  const adress =
    persons.adress?.street +
    " " +
    persons.adress?.houseNumber +
    ", " +
    persons.adress?.zipCode +
    " " +
    persons.adress?.city;

  return (
    <>
      <div className={styles.headerContainer}>
        <img
          src={persons.profileImg ? persons.profileImg : `/img/profileImg.png`}
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
          <input
            type="text"
            value={new Date(persons.startContract).toLocaleDateString()}
          />
          <label htmlFor="name">Vertragsende</label>
          <input
            type="text"
            value={new Date(persons.endContract).toLocaleDateString()}
          />
          <label htmlFor="name">Ende der Probezeit</label>
          <input
            type="text"
            value={new Date(persons.endTrialPeriod).toLocaleDateString()}
          />
          <label htmlFor="name">Position</label>
          <input type="text" value={persons.position} />
          <label htmlFor="name">Status</label>
          <input type="text" value={persons.status} />
        </div>
        <div className={styles.employeeDataContainer} id="eqData">
          <h2 className={styles.mainHeader}>Geräteausleihe</h2>
          <label htmlFor="name">Gerät</label>
          <input type="text" value={persons.equipment} />
          <label htmlFor="name">Inventurnummer</label>
          <input type="text" value={persons.inventoryNumber} />
          <label htmlFor="name">Seriennummer</label>
          <input type="text" value={persons.serialNumber} />
          <label htmlFor="name">Übergabedatum</label>
          <input
            type="text"
            value={new Date(persons.deliveryDate).toLocaleDateString()}
          />
          <label htmlFor="name">Rückgabedatum</label>
          <input
            type="text"
            value={new Date(persons.returnDate).toLocaleDateString()}
          />
        </div>
      </div>
      <div className={styles.btnContainer}>
        <div>
          <button
            onClick={() => setButtonPopupEdit(true)}
            className={styles.btn}
          >
            Mitarbeiter bearbeiten
          </button>
        </div>
        <div>
          <button
            onClick={() => setButtonPopupDelete(true)}
            className={styles.btnDelete}
          >
            Mitarbeiter löschen
          </button>
        </div>
      </div>
      <PopupSmall trigger={buttonPopupDelete} setTrigger={setButtonPopupDelete}>
        <h3>Möchten Sie den Mitarbeiter wirklich aus dem System löschen?</h3>
        <div className={styles.popupContainer}>
          <button
            onClick={() => setButtonPopupDelete(false)}
            className={styles.btn}
          >
            Abbrechen
          </button>
          <button
            onClick={() =>
              deleteData(persons.id).then(() => router.push("/employees"))
            }
            className={styles.btnDelete}
          >
            Löschen
          </button>
        </div>
      </PopupSmall>
      <Popup trigger={buttonPopupEdit} setTrigger={setButtonPopupEdit}>
        <EditEmployee persons={persons} />
      </Popup>
    </>
  );
};

export default EmployeeDetails;
