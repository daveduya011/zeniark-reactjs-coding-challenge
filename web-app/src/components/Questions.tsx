"use client";
import { useState } from "react";
import Question from "@/components/Question";

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

  return (
    <Question
      question={questions[currentIndex].question}
      category={questions[currentIndex].category}
      answer={questions[currentIndex].correct_answer}
      index={currentIndex + 1}
      totalQuestions={questions.length}
    />
  );
}

export default Questions;
