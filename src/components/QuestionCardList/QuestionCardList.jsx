import { QuestionCard } from "../QuestionCard/QuestionCard";

import styles from "./QuestionCardList.module.scss";

export function QuestionCardList({ cards }) {
  return (
    <div className={styles.cards}>
      {cards.map((card) => (
        <QuestionCard card={card} key={card.id} />
      ))}
    </div>
  );
}
