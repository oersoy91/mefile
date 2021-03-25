import styles from "./loadingSpinner.module.css";
import MoonLoader from "react-spinners/MoonLoader";

function LoadingSpinner() {
  return (
    <div className={styles.wrapper}>
      <MoonLoader color="#248291" size={50} />
    </div>
  );
}

export default LoadingSpinner;
