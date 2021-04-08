import { ChangeEventHandler } from "react";
import styles from "./Searchbox.module.css";

export type SearchboxProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Searchbox = ({ onChange }: SearchboxProps) => {
  return (
    <div className={styles.wrapper}>
      <img src="img/searchIcon.svg" alt="searchIcon" />
      <input
        className={styles.input}
        onChange={onChange}
        placeholder="Nach Personen suchen"
      />
    </div>
  );
};

export default Searchbox;
