import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <img src="img/logo_me.png" alt="logo" />
    </div>
  );
}

export default Logo;
