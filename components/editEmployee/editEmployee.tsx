import { Person } from "../../utils/types";
import styles from "./editEmployee.module.css";
import { patchData } from "../../utils/fetchData";
import { useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type EmployeeDetailProps = {
  persons: Person;
};

const EditEmployee = ({ persons }: EmployeeDetailProps) => {
  const notify = () =>
    toast.info("Mitarbeiter wird aktualisiert!", {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      transition: Zoom,
    });
  const router = useRouter();
  const [firstName, setFirstName] = useState(persons.firstName);
  const [lastName, setLastName] = useState(persons.lastName);
  const [birthday, setBirthday] = useState(
    new Date(persons.birthday).toLocaleDateString()
  );
  const [gender, setGender] = useState(persons.gender);
  const [street, setStreet] = useState(persons.adress.street);
  const [houseNumber, setHouseNumber] = useState(persons.adress.houseNumber);
  const [zipCode, setZipCode] = useState(persons.adress.zipCode);
  const [city, setCity] = useState(persons.adress.city);
  const [email, setEmail] = useState(persons.email);
  const [id, setId] = useState(persons.id);
  const [startContract, setStartContract] = useState(
    new Date(persons.startContract).toLocaleDateString()
  );
  const [endContract, setEndContract] = useState(
    new Date(persons.endContract).toLocaleDateString()
  );
  const [endTrialPeriod, setEndTrialPeriod] = useState(
    new Date(persons.endTrialPeriod).toLocaleDateString()
  );
  const [position, setPosition] = useState(persons.position);
  const [status, setStatus] = useState(persons.status);
  const [eq, setEq] = useState(persons.equipment);
  const [inNumber, setInNumber] = useState(persons.inventoryNumber);
  const [serialNumber, setSerialNumber] = useState(persons.serialNumber);
  const [deliveryDate, setDeliveryDate] = useState(
    new Date(persons.deliveryDate).toLocaleDateString()
  );
  const [returnDate, setReturnDate] = useState(
    new Date(persons.returnDate).toLocaleDateString()
  );

  const sendData = async (e) => {
    e.preventDefault();
    await patchData(id, {
      firstName: firstName,
      lastName: lastName,
      birthday: new Date(birthday).toISOString(),
      gender: gender,
      adress: {
        street,
        houseNumber: parseInt(houseNumber),
        zipCode: parseInt(zipCode),
        city,
      },
      email: email,
      id: id,
      startContract: new Date(startContract).toISOString(),
      endContract: new Date(endContract).toISOString(),
      endTrialPeriod: new Date(endTrialPeriod).toISOString(),
      position: position,
      status: status,
      equipment: eq,
      inventoryNumber: parseInt(inNumber),
      serialNumber: serialNumber,
      deliveryDate: new Date(deliveryDate).toISOString(),
      returnDate: new Date(returnDate).toISOString(),
    });
    notify();
    setTimeout(() => router.reload(), 3000);
  };

  return (
    <>
      <form onSubmit={sendData} autoComplete="off">
        <div className={styles.mainContainer}>
          <div className={styles.employeeDataContainer}>
            <h2 className={styles.mainHeader}>Stammdaten</h2>
            <label htmlFor="firstName">Vorname</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              name="firstName"
              type="text"
              required
              value={firstName}
            />
            <label htmlFor="lastName">Nachname</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
              name="lastName"
              type="text"
              required
              value={lastName}
            />
            <label htmlFor="birthday">Geburtsdatum</label>
            <input
              onChange={(e) => setBirthday(e.target.value)}
              id="birthday"
              name="birthday"
              type="text"
              required
              value={birthday}
            />
            <label htmlFor="gender">Geschlecht</label>
            <select
              onChange={(e) => setGender(e.target.value)}
              id="gender"
              name="gender"
              required
              value={gender}
            >
              <option value="" disabled selected>
                Bitte auswählen
              </option>
              <option value="männlich">männlich</option>
              <option value="weiblich">weiblich</option>
              <option value="diverse">diverse</option>
            </select>
            <label htmlFor="street">Straße</label>
            <input
              onChange={(e) => setStreet(e.target.value)}
              id="street"
              name="street"
              type="text"
              required
              value={street}
            />
            <label htmlFor="houseNumber">Hausnummer</label>
            <input
              onChange={(e) => setHouseNumber(e.target.value)}
              id="houseNumber"
              name="houseNumber"
              type="number"
              required
              value={houseNumber}
            />
            <label htmlFor="zipCode">Postleitzahl</label>
            <input
              onChange={(e) => setZipCode(e.target.value)}
              id="zipCode"
              name="zipCode"
              type="number"
              required
              value={zipCode}
            />
            <label htmlFor="city">Stadt</label>
            <input
              onChange={(e) => setCity(e.target.value)}
              id="city"
              name="city"
              type="text"
              required
              value={city}
            />
            <label htmlFor="email">E-Mail</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              type="email"
              required
              value={email}
            />
          </div>
          <div className={styles.employeeDataContainer}>
            <h2 className={styles.mainHeader}>Personalinformation</h2>
            <label htmlFor="id">Personal ID</label>
            <input
              onChange={(e) => setId(e.target.value)}
              id="id"
              name="id"
              type="number"
              required
              value={id}
            />
            <label htmlFor="startContract">Vertragsbeginn</label>
            <input
              onChange={(e) => setStartContract(e.target.value)}
              id="startContract"
              name="startContract"
              type="text"
              required
              value={startContract}
            />

            <label htmlFor="endContract">Vertragsende</label>
            <input
              onChange={(e) => setEndContract(e.target.value)}
              id="endContract"
              name="endContract"
              type="text"
              required
              value={endContract}
            />

            <label htmlFor="endTrialPeriod">Ende der Probezeit</label>
            <input
              onChange={(e) => setEndTrialPeriod(e.target.value)}
              id="endTrialPeriod"
              name="endTrialPeriod"
              type="text"
              required
              value={endTrialPeriod}
            />

            <label htmlFor="position">Position</label>
            <input
              onChange={(e) => setPosition(e.target.value)}
              id="position"
              name="position"
              type="text"
              required
              value={position}
            />
            <label htmlFor="status">Status</label>
            <select
              onChange={(e) => setStatus(e.target.value)}
              id="status"
              name="status"
              required
              value={status}
            >
              <option value="" disabled selected>
                Bitte auswählen
              </option>
              <option value="Aktiv">Aktiv</option>
              <option value="Inaktiv">Inaktiv</option>
            </select>
          </div>

          <div className={styles.employeeDataContainer}>
            <h2 className={styles.mainHeader}>Geräteausleihe</h2>
            <label htmlFor="eq">Gerät</label>
            <select
              onChange={(e) => setEq(e.target.value)}
              id="eq"
              name="eq"
              required
              value={eq}
            >
              <option value="" disabled selected>
                Bitte auswählen
              </option>
              <option value="MacBook Pro">MacBook Pro</option>
              <option value="MacBook Air">MacBook Air</option>
            </select>

            <label htmlFor="inNumer">Inventurnummer</label>
            <input
              onChange={(e) => setInNumber(e.target.value)}
              id="inNumber"
              name="inNumber"
              type="number"
              required
              value={inNumber}
            />

            <label htmlFor="serialNumber">Seriennummer</label>
            <input
              onChange={(e) => setSerialNumber(e.target.value)}
              id="serialNumber"
              name="serialNumber"
              type="text"
              required
              value={serialNumber}
            />
            <label htmlFor="deliveryDate">Übergabedatum</label>
            <input
              onChange={(e) => setDeliveryDate(e.target.value)}
              id="deliveryDate"
              name="deliveryDate"
              type="text"
              required
              value={deliveryDate}
            />
            <label htmlFor="returnlDate">Rückgabedatum</label>
            <input
              onChange={(e) => setReturnDate(e.target.value)}
              id="returnDate"
              name="returnDate"
              type="text"
              required
              value={returnDate}
            />
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button type="submit" className={styles.btn}>
            Abschicken
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default EditEmployee;
