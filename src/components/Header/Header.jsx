import { Button } from "../Button";

import styles from "./Header.module.scss";
import ReactLogo from "../../assets/react.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <p>
        <img src={ReactLogo} alt="react logo" />
        <span>ReactCards</span>
      </p>

      <div className={styles.buttons}>
        <Button isActive>Add</Button>
        <Button>Login</Button>
      </div>
    </header>
  );
}
