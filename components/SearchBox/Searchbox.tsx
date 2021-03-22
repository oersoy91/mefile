import styles from "./Searchbox.module.css";

const Searchbox = ({ ...other }) => {
  return (
    <div className={styles.wrapper}>
      <img src="img/icon_search.svg" alt="searchIcon" />
      <input
        className={styles.input}
        {...other}
        placeholder="Nach Personen suchen"
      />
    </div>
  );
};

export default Searchbox;
