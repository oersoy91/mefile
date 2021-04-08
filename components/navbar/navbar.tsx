import Link from "next/link";
import styles from "./navbar.module.css";
import Popup from "../popup/popup";
import { useState } from "react";

function Navbar() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div>
          <Link href="/dashboard">
            <img
              className={styles.logo}
              src="/img/mefileIcon.svg"
              alt="mefileIcon"
            />
          </Link>
        </div>
        <nav className={styles.navContainer}>
          <Link href="/employees">
            <div className={styles.header}>
              <img src="/img/employeesIcon.svg" alt="employeeIcon" />
              Mitarbeiterliste
            </div>
          </Link>
          <Link href="/dashboard">
            <div className={styles.header}>
              <img src="/img/homeIcon.svg" alt="homeIcon" />
              Startseite
            </div>
          </Link>
          <Link href="/newEmployee">
            <div className={styles.header}>
              <img
                className={styles.addEmployeeIcon}
                src="/img/addEmployeeIcon2.svg"
                alt="addEmployeeIcon"
              />
              Mitarbeiter hinzufügen
            </div>
          </Link>
        </nav>
        <div>
          <img
            className={styles.infoIcon}
            src="/img/infoIcon.svg"
            alt="infoIcon"
            onClick={() => setButtonPopup(true)}
          />
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className={styles.popupContainer}>
          <h1>Impressum</h1>
          <p>Angaben gemäß § 5 TMG</p>
          <p>mefile GmbH</p>
          <p>Frankenweg 93</p>
          <p>48167 Münster</p>
          <p>Tel.: +49(251) 234 56789</p>
          <p>E-Mail: info@mefile.de</p>
          <p> Vertreten durch Geschäftsführer: Osman Ersoy</p>
          <h2> Rechtliches</h2>
          <p>Eintragung im Handelsregister</p>
          <p>Registernummer: HRB 123456789</p>
          <p>Registergericht: Amtsgericht Münster</p>
          <p>USt-IdNr.: DE123456789</p>
          <h2>website: www.mefile.de</h2>
        </div>
      </Popup>
    </>
  );
}

export default Navbar;
