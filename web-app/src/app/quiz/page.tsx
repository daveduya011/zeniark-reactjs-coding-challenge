import Question from "@/components/Question";

function Page() {
  return (
    <Question
      question="Greenland is almost as big as Africa"
      category="Geography"
      answer={true}
      index={1}
    />
  );
}

export default Page;
