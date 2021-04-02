import styles from "./popup.module.css";

function Popup(props) {
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
    ""
  );
}

export default Popup;
