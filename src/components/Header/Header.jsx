import { useNavigate } from "react-router-dom";

import { Button } from "../Button";

import styles from "./Header.module.scss";
import ReactLogo from "../../assets/react.svg";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <p onClick={() => navigate("/")}>
        <img src={ReactLogo} alt="react logo" />
        <span>ReactCards</span>
      </p>

      <div className={styles.buttons}>
        <Button onClick={() => navigate("/addquestion")}>Add</Button>
        <Button>Login</Button>
      </div>
    </header>
  );
}
