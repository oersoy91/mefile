import { deleteData } from "../../utils/fetchData";
import { Employee } from "../../utils/types";
import styles from "./employeeDetails.module.css";
import { useRouter } from "next/router";
import PopupSmall from "../popupSmall/popupSmall";
import Popup from "../popup/popup";
import EditEmployee from "../editEmployee/editEmployee";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";

export type EmployeeDetailProps = {
  employee: Employee;
};

const EmployeeDetails = ({ employee }: EmployeeDetailProps) => {
  const notify = async () =>
    await toast.error("Mitarbeiter wird gelöscht!", {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      transition: Zoom,
    });
  const [buttonPopupDelete, setButtonPopupDelete] = useState(false);
  const [buttonPopupEdit, setButtonPopupEdit] = useState(false);

  const router = useRouter();
  const adress =
    employee.adress?.street +
    " " +
    employee.adress?.houseNumber +
    ", " +
    employee.adress?.zipCode +
    " " +
    employee.adress?.city;

  function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <>
      <div className={styles.headerContainer}>
        <img
          src={
            employee.profileImg ? employee.profileImg : `/img/profileImg.png`
          }
          alt={employee.firstName}
          className={styles.headerImg}
        />
        <div className={styles.headerNamePosition}>
          <h1 className={styles.headerName}>
            {employee.firstName} {employee.lastName}
          </h1>
          <p className={styles.headerPosition}>{employee.position}</p>
        </div>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.employeeDataContainer}>
          <h2 className={styles.mainHeader}>Stammdaten</h2>
          <label htmlFor="firstName">Vorname</label>
          <input type="text" value={employee.firstName} />
          <label htmlFor="lastName">Nachname</label>
          <input type="text" value={employee.lastName} />
          <label htmlFor="birthday">Geburtsdatum</label>
          <input
            type="text"
            value={new Date(employee.birthday).toLocaleDateString()}
          />
          <label htmlFor="age">Alter</label>
          <input type="text" value={getAge(employee.birthday)} />
          <label htmlFor="gender">Geschlecht</label>
          <input type="text" value={employee.gender} />
          <label htmlFor="adress">Adresse</label>
          <input type="text" value={adress} />
          <label htmlFor="email">E-Mail</label>
          <input type="text" value={employee.email} />
        </div>
        <div className={styles.employeeDataContainer}>
          <h2 className={styles.mainHeader}>Personalinformation</h2>
          <label htmlFor="id">Personal ID</label>
          <input type="text" value={employee.id} />
          <label htmlFor="startContract">Vertragsbeginn</label>
          <input
            type="text"
            value={new Date(employee.startContract).toLocaleDateString()}
          />
          <label htmlFor="endContract">Vertragsende</label>
          <input
            type="text"
            value={new Date(employee.endContract).toLocaleDateString()}
          />
          <label htmlFor="endTrialPeriod">Ende der Probezeit</label>
          <input
            type="text"
            value={new Date(employee.endTrialPeriod).toLocaleDateString()}
          />
          <label htmlFor="position">Position</label>
          <input type="text" value={employee.position} />
          <label htmlFor="status">Status</label>
          <input type="text" value={employee.status} />
        </div>
        <div className={styles.employeeDataContainer}>
          <h2 className={styles.mainHeader}>Geräteausleihe</h2>
          <label htmlFor="eq">Gerät</label>
          <input type="text" value={employee.equipment} />
          <label htmlFor="inNumer">Inventurnummer</label>
          <input type="text" value={employee.inventoryNumber} />
          <label htmlFor="serialNumber">Seriennummer</label>
          <input type="text" value={employee.serialNumber} />
          <label htmlFor="deliveryDate">Übergabedatum</label>
          <input
            type="text"
            value={new Date(employee.deliveryDate).toLocaleDateString()}
          />
          <label htmlFor="returnlDate">Rückgabedatum</label>
          <input
            type="text"
            value={new Date(employee.returnDate).toLocaleDateString()}
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
              notify()
                .then(() => deleteData(employee.id))
                .then(() => setTimeout(() => router.push("/employees"), 3000))
            }
            className={styles.btnDelete}
          >
            Löschen
          </button>
        </div>
      </PopupSmall>
      <Popup trigger={buttonPopupEdit} setTrigger={setButtonPopupEdit}>
        <EditEmployee employee={employee} />
      </Popup>
      <ToastContainer />
    </>
  );
};

export default EmployeeDetails;
