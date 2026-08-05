import { useEffect, useState } from "react";

import { API_URL } from "../../constants";
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";

export function HomePage() {
  const [questions, setQuestions] = useState([]);

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}`);
    }

    const questions = await response.json();

    setQuestions(questions);
    return questions;
  });

  useEffect(() => {
    getQuestions("react");
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <QuestionCardList cards={questions} />
    </>
  );
}
