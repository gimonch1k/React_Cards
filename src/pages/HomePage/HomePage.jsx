import { useEffect, useState } from "react";

import { API_URL } from "../../constants";
import { QuestionCard } from "../../components/QuestionCard";
import { Button } from "../../components/Button";

import styles from "./HomePage.module.scss";

export function HomePage() {
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    try {
      const response = await fetch(`${API_URL}/react`);
      return await response.json();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getQuestions().then(setQuestions);
  }, []);

  return (
    <>
      homepage
      {questions.map((card) => (
        <QuestionCard card={card} key={card.id} />
      ))}
    </>
  );
}
