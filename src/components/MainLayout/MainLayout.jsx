// import "./MainLayout.module.scss";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";

import { Header } from "../Header";

export function MainLayout() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.mainLayout}>
      <Header />

      <div className={styles.wrapper}>
        <main className={styles.main}>
          <Outlet />
        </main>

        <footer className={styles.footer}>
          React Question Cards Application | {currentYear} <br />
          by Dmytro
        </footer>
      </div>
    </div>
  );
}
