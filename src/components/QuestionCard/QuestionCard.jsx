import { Button } from "../Button";

import styles from "./QuestionCard.module.scss";

export function QuestionCard() {
  return (
    <div className={styles.card}>
      <div className={styles.labels}>
        <div>Level: 1</div>
        <div>Complited</div>
      </div>

      <h5 className={styles.title}>Що таке JSX?</h5>

      <div className={styles.answers}>
        <span>short answer: </span>
        <p className={styles.answer}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
          error.
        </p>
      </div>

      <Button onClick={() => {}}>View</Button>
    </div>
  );
}
