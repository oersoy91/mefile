import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <img src="img/mefileLogo.svg" alt="logo" />
    </div>
  );
}

export default Logo;
