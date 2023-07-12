import Card from "@/components/Card";
import Image from "next/image";
import { inter } from "@/fonts";
import Link from "next/link";
import CheckIcon from "@/components/Icons/CheckIcon";
import WrongIcon from "@/components/Icons/WrongIcon";

export type ResultItem = {
  question: string;
  answer: boolean;
  playerAnswer: boolean;
};

function Result(props: { score: number; items: ResultItem[] }) {
  return (
    <Card className="justify-between">
      {/*  Header */}
      <header className="w-full flex flex-col items-center">
        <div className="w-full flex-col sm:flex-row flex justify-between items-center px-7 py-5">
          <Image src="/images/logo.png" width={60} height={65} alt="logo" />
          <div
            className={`text-md sm:text-3xl font-semibold tracking-[0.15px] ${inter.className}`}
          >
            Final Results
          </div>
          <div className="w-[60px]"></div>
        </div>
        <div className="line" />
      </header>

      {/*  Score */}
      <div className="m-4">
        <p className="text-2xl sm:text-5xl font-semibold mx-10 max-w-[580px] tracking-[0.25px]">
          {props.score}/{props.items.length}
        </p>
        <p className="text-lg sm:text-xl font-medium">Your Score</p>
      </div>
      <div className="line" />

      {/*  Questions and Correct Answers  */}
      <div className={`text-center px-16 py-4 ${inter.className}`}>
        <ol className="text-gray-400 text-md">
          {props.items.map((item, index) => {
            return (
              <li
                key={index}
                className="list-decimal py-5 text-left border-b-2 border-gray-light border-dashed"
              >
                <div className="flex justify-between items-center">
                  <div className="px-4">
                    <div className="text-foreground tracking-[0.08px] text-base">
                      {item.question}
                    </div>
                    <div className="mt-2 text-neutral-400 tracking-[0.07px] text-sm italic">
                      The correct answer is{" "}
                      <span
                        className={`font-extrabold ${
                          item.answer ? "text-success" : "text-error-light"
                        }`}
                      >
                        {item.answer ? "True" : "False"}
                      </span>
                      . You answered{" "}
                      <span
                        className={
                          item.playerAnswer
                            ? "text-success"
                            : "text-error-light"
                        }
                      >
                        {item.playerAnswer ? "True" : "False"}
                      </span>
                      .
                    </div>
                  </div>
                  {item.playerAnswer == item.answer ? (
                    <CheckIcon className="text-success" />
                  ) : (
                    <WrongIcon className="text-error-dark" />
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/*  Footer  */}
      <footer className="w-full flex flex-col items-center py-12">
        <Link href="/quiz" className="link">
          Play Again
        </Link>
      </footer>
    </Card>
  );
}

export default Result;
