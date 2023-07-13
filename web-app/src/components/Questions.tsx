"use client";
import { useEffect, useState } from "react";
import Question from "@/components/Question";
import Result, { ResultItem } from "@/components/Result";
import { Transition } from "@headlessui/react";

export type QuestionItem = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string;
};
function Questions({ questions }: { questions: QuestionItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playerAnswers, setPlayerAnswers] = useState<ResultItem[]>([]);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isTransitioning, setTransitioning] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionItem>(
    questions[0],
  );

  useEffect(() => {
    setTransitioning(true);
    setTimeout(() => {
      setTransitioning(false);
      setCurrentQuestion(questions[currentIndex]);
    }, 250);
  }, [currentIndex]);

  // Write down the users answer, return the correct answer
  function setAnswer(answer: string) {
    const isCorrect = currentQuestion.correct_answer == answer;

    const resultItem = {
      question: currentQuestion.question,
      answer: currentQuestion.correct_answer,
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
      <Transition
        show={!isTransitioning}
        appear={true}
        className="flex w-full h-auto items-center justify-center relative"
        enter="transform transition duration-[200ms]"
        enterFrom="opacity-0 rotate-[-20deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-50 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Question
          question={currentQuestion.question}
          category={currentQuestion.category}
          answer={currentQuestion.correct_answer}
          index={currentIndex}
          totalQuestions={questions.length}
          setAnswer={setAnswer}
        />
      </Transition>
    );
  } else {
    return <Result score={correctAnswersCount} items={playerAnswers} />;
  }
}

export default Questions;
