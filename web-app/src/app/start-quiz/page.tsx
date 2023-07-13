import { getQuizQuestions } from "@/app/lib/quiz";
import Questions from "@/components/Questions";

function Page() {
  const questions = getQuizQuestions();
  return <Questions questions={questions} />;
}

export default Page;
