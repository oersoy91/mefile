import styles from "./employeeList.module.css";

const EmployeeList = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerImg}></div>

        <button className={styles.headerFirstname}>
          <div>First Name</div>
        </button>

        <button className={styles.headerLastname}>
          <div>Last Name</div>
        </button>

        <button className={styles.headerStatus}>
          <div>Status</div>
        </button>

        <button className={styles.headerPosition}>
          <div>Position</div>
        </button>
      </div>
      <div className={styles.row}>
        <div className={styles.img}>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1616359182~hmac=42412ebdcb8cc2e1a78d51911edc9864"
            alt=""
          />
        </div>
        <div className={styles.firstname}>Osman</div>

        <div className={styles.lastname}>Ersoy</div>

        <div className={styles.status}>Aktiv</div>

        <div className={styles.position}>Junior Web Developer</div>
      </div>
      <div className={styles.row}>
        <div className={styles.img}>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1616359182~hmac=42412ebdcb8cc2e1a78d51911edc9864"
            alt=""
          />
        </div>
        <div className={styles.firstname}>Leon</div>

        <div className={styles.lastname}>Machens</div>

        <div className={styles.status}>Aktiv</div>

        <div className={styles.position}> Senior Lead Developer</div>
      </div>
      <div className={styles.row}>
        <div className={styles.img}>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1616359182~hmac=42412ebdcb8cc2e1a78d51911edc9864"
            alt=""
          />
        </div>
        <div className={styles.firstname}>Philipp</div>

        <div className={styles.lastname}>Gartz</div>

        <div className={styles.status}>Aktiv</div>

        <div className={styles.position}> Senior Web Developer</div>
      </div>
    </div>
  );
};

export default EmployeeList;
