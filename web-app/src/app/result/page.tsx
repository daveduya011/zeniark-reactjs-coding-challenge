import Result from "@/components/Result";

function Page() {
  return (
    <Result
      score={1}
      items={[
        {
          question: "Peyton Manning retired after winning Super Bowl XLIX.",
          playerAnswer: false,
          answer: true,
        },
        {
          question:
            "Donkey Kong was originally set to be a Popeye arcade game.",
          playerAnswer: true,
          answer: true,
        },
        {
          question:
            "Former United States Presidents John Adams and Thomas Jefferson died within hours of each other.",
          playerAnswer: true,
          answer: false,
        },
      ]}
    />
  );
}

export default Page;
