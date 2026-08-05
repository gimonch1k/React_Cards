import styles from "./Loader.module.css";

export function Loader() {
  return (
    <div className={styles.backdrop}>
      <span className={styles.loader}></span>
    </div>
  );
}
