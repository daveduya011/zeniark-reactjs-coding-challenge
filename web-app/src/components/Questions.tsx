"use client";
import { useState } from "react";
import Question from "@/components/Question";
import Result, { ResultItem } from "@/components/Result";

export type QuestionItem = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string;
};
function Questions({ questions }: { questions: QuestionItem[] }) {
  console.log(questions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playerAnswers, setPlayerAnswers] = useState<ResultItem[]>([]);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const item = questions[currentIndex];

  // Write down the users answer, return the correct answer
  function setAnswer(answer: string) {
    const isCorrect = item.correct_answer == answer;

    const resultItem = {
      question: item.question,
      answer: item.correct_answer,
      playerAnswer: answer,
      isCorrect: isCorrect,
    };

    setPlayerAnswers((prevState) => [...prevState, resultItem]);
    setCurrentIndex(currentIndex + 1);
    if (isCorrect) setCorrectAnswersCount(correctAnswersCount + 1);

    return isCorrect;
  }

  if (currentIndex < questions.length) {
    return (
      <Question
        question={item.question}
        category={item.category}
        answer={item.correct_answer}
        index={currentIndex}
        totalQuestions={questions.length}
        setAnswer={setAnswer}
      />
    );
  } else {
    return <Result score={correctAnswersCount} items={playerAnswers} />;
  }
}

export default Questions;
