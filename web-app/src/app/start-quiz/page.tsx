import Question from "@/components/Question";
import { getQuizQuestions } from "@/app/lib/quiz";
import Questions from "@/components/Questions";

async function Page() {
  const { data: questions } = await getQuizQuestions();
  return <Questions questions={questions} />;
}

export default Page;
