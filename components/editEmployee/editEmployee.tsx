import { Employee } from "../../utils/types";
import styles from "./editEmployee.module.css";
import { patchData } from "../../utils/fetchData";
import { useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type EmployeeDetailProps = {
  employee: Employee;
};

const EditEmployee = ({ employee }: EmployeeDetailProps) => {
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
  const [firstName, setFirstName] = useState(employee.firstName);
  const [lastName, setLastName] = useState(employee.lastName);
  const [birthday, setBirthday] = useState(
    employee.birthday.toString().split("T")[0]
  );
  const [gender, setGender] = useState(employee.gender);
  const [street, setStreet] = useState(employee.adress.street);
  const [houseNumber, setHouseNumber] = useState(employee.adress.houseNumber);
  const [zipCode, setZipCode] = useState(employee.adress.zipCode);
  const [city, setCity] = useState(employee.adress.city);
  const [email, setEmail] = useState(employee.email);
  const [ID, setId] = useState(employee.id);
  const [startContract, setStartContract] = useState(
    employee.startContract.toString().split("T")[0]
  );
  const [endContract, setEndContract] = useState(
    employee.endContract.toString().split("T")[0]
  );

  const [position, setPosition] = useState(employee.position);
  const [status, setStatus] = useState(employee.status);
  const [eq, setEq] = useState(employee.equipment);
  const [inNumber, setInNumber] = useState(employee.inventoryNumber);
  const [serialNumber, setSerialNumber] = useState(employee.serialNumber);
  const [deliveryDate, setDeliveryDate] = useState(
    employee.deliveryDate.toString().split("T")[0]
  );
  const [returnDate, setReturnDate] = useState(
    employee.returnDate.toString().split("T")[0]
  );

  const sendData = async (e) => {
    const endTrialPeriod = new Date(startContract);
    endTrialPeriod.setDate(endTrialPeriod.getDate() + 90);

    e.preventDefault();
    await patchData(employee.id, {
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
      id: ID,
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
      profileImg: "",
    });
    notify();
    setTimeout(() => router.push(`/employee/${ID}`), 3000);
    setTimeout(() => router.reload(), 3100);
  };

  console.log(birthday);
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
              type="date"
              max={new Date().toISOString().split("T")[0]}
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
              value={ID}
            />
            <label htmlFor="startContract">Vertragsbeginn</label>
            <input
              onChange={(e) => setStartContract(e.target.value)}
              id="startContract"
              name="startContract"
              type="date"
              required
              value={startContract}
            />

            <label htmlFor="endContract">Vertragsende</label>
            <input
              onChange={(e) => setEndContract(e.target.value)}
              id="endContract"
              name="endContract"
              type="date"
              min={new Date(startContract).toISOString().split("T")[0]}
              required
              value={endContract}
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
              type="date"
              required
              value={deliveryDate}
            />
            <label htmlFor="returnlDate">Rückgabedatum</label>
            <input
              onChange={(e) => setReturnDate(e.target.value)}
              id="returnDate"
              name="returnDate"
              type="date"
              min={new Date(deliveryDate).toISOString().split("T")[0]}
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
