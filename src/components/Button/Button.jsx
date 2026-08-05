import styles from "./Button.module.scss";

export function Button({ onClick, isActive, isDisabled, children }) {
  return (
    <button
      className={`${styles.btn} ${isActive ? styles.active : ""}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
