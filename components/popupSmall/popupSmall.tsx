import { PopupProps } from "../../utils/types";
import styles from "./popupSmall.module.css";

function PopupSmall(props: PopupProps) {
  return props.trigger ? (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        <button
          className={styles.closeBtn}
          onClick={() => props.setTrigger(false)}
        >
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default PopupSmall;
