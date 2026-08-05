import { Button } from "../Button";

import styles from "./QuestionCard.module.scss";

export function QuestionCard({ card }) {
  return (
    <div className={styles.card}>
      <div className={styles.labels}>
        <div>Level: {card.level}</div>
        <div>{card.completed ? "Completed" : "Not Completed"}</div>
      </div>

      <h5 className={styles.title}>{card.question}</h5>

      <div className={styles.answers}>
        <span>short answer: </span>
        <p className={styles.answer}>{card.answer}</p>
      </div>

      <Button onClick={() => {}}>View</Button>
    </div>
  );
}
