import Card from "@/components/Card";
import Image from "next/image";
import { inter } from "@/fonts";
import Link from "next/link";
import CheckIcon from "@/components/Icons/CheckIcon";
import WrongIcon from "@/components/Icons/WrongIcon";

export type ResultItem = {
  question: string;
  answer: string;
  playerAnswer: string;
  isCorrect: boolean;
};

function Result(props: { score: number; items: ResultItem[] }) {
  return (
    <Card className="justify-between">
      {/*  Header */}
      <header className="w-full flex flex-col items-center">
        <div className="w-full flex-col sm:flex-row flex justify-between items-center px-7 py-5">
          <Link href="/">
            <Image src="/images/logo.png" width={60} height={65} alt="logo" />
          </Link>
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
        <p className="text-4xl sm:text-5xl font-semibold mx-10 max-w-[580px] tracking-[0.25px]">
          {props.score}/{props.items.length}
        </p>
        <p className="text-xl font-medium">Your Score</p>
      </div>
      <div className="line" />

      {/*  Questions and Correct Answers  */}
      <div
        className={`text-center pl-10 pr-5 sm:pl-16 sm:pr-16 ${inter.className}`}
      >
        <ol className="text-gray-400 text-md">
          {props.items.map((item, index) => {
            return (
              <li
                key={index}
                className="list-decimal py-5 text-left border-b-2 border-gray-light border-dashed"
              >
                <div className="grid grid-flow-col justify-between items-center">
                  <div className="px-4">
                    <div
                      className="text-foreground tracking-[0.08px] text-base"
                      dangerouslySetInnerHTML={{ __html: item.question }}
                    />
                    <div className="mt-2 text-neutral-400 tracking-[0.07px] text-sm italic">
                      The correct answer is{" "}
                      <span
                        className={`font-extrabold ${
                          item.answer == "True"
                            ? "text-success"
                            : "text-error-light"
                        }`}
                      >
                        {item.answer}
                      </span>
                      . You answered{" "}
                      <span
                        className={
                          item.playerAnswer == "True"
                            ? "text-success"
                            : "text-error-light"
                        }
                      >
                        {item.playerAnswer}
                      </span>
                      .
                    </div>
                  </div>
                  <div>
                    {item.isCorrect ? (
                      <CheckIcon className="text-success-light w-3 sm:w-6" />
                    ) : (
                      <WrongIcon className="text-error-dark w-3 sm:w-6" />
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/*  Footer  */}
      <footer className="w-full flex flex-col items-center py-12">
        <a href="/" className="link">
          Play Again
        </a>
      </footer>
    </Card>
  );
}

export default Result;
