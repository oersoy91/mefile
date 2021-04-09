import styles from "./login.module.css";
import Popup from "../popup/popup";
import { useState } from "react";

const Login = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <form className={styles.form} autoComplete="off">
        <div className={styles.wrapper}>
          <input
            className={styles.input}
            type="email"
            placeholder="Mailadresse"
          />
          <img src="img/mailIcon.svg" alt="mailIcon" />
        </div>
        <div className={styles.wrapper}>
          <input
            type="password"
            className={styles.input}
            placeholder="Passwort"
          />
          <img src="img/passwordIcon.svg" alt="passwordIcon" />
        </div>
        <button className={styles.btn}>Anmelden</button>
        <div className={styles.newAccount}>
          <p>
            Noch kein Account?{" "}
            <span onClick={() => setButtonPopup(true)}>
              Jetzt kostenlos registrieren.
            </span>
          </p>
        </div>
      </form>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <p className={styles.heading}>Registrieren</p>
        <p className={styles.test111}>Es geht schnell und einfach.</p>
        <form className={styles.formPopup}>
          <div className={styles.wrapper}>
            <input type="text" className={styles.input} placeholder="Vorname" />
            <img src="img/userIcon.svg" alt="userIcon" />
          </div>
          <div className={styles.wrapper}>
            <input
              type="text"
              className={styles.input}
              placeholder="Nachname"
            />
            <img src="img/userIcon.svg" alt="userIcon" />
          </div>
          <div className={styles.wrapper}>
            <input
              type="email"
              className={styles.input}
              placeholder="Mailadresse"
            />
            <img src="img/mailIcon.svg" alt="mailIcon" />
          </div>
          <div className={styles.wrapper}>
            <input
              type="passwort"
              className={styles.input}
              placeholder="Passwort"
            />
            <img src="img/passwordIcon.svg" alt="passwordIcon" />
          </div>
          <button className={styles.btn}>Registrieren</button>
        </form>
        <p className={styles.subheading}>
          Indem du auf „Registrieren“ klickst, stimmst du unseren
          Nutzungsbedingungen zu.
        </p>
      </Popup>
    </>
  );
};

export default Login;
