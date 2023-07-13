import Card from "@/components/Card";
import Image from "next/image";
import { inter } from "@/fonts";
import CheckIcon from "@/components/Icons/CheckIcon";
import WrongIcon from "@/components/Icons/WrongIcon";
import Link from "next/link";

function Question(props: {
  question: string;
  category: string;
  answer: string;
  index: number;
  totalQuestions: number;
  setAnswer: (answer: string) => void;
  className?: string;
}) {
  return (
    <Card className={`justify-between ${props.className || ""}`}>
      {/*  Header */}
      <header className="w-full flex flex-col items-center">
        <div
          className="w-full grid grid-flow-row sm:grid-flow-col place-items-center sm:place-content-between
         px-7 py-5 items-center gap-2 sm:gap-7"
        >
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Link href="/">
              <Image src="/images/logo.png" width={60} height={65} alt="logo" />
            </Link>
            <p className="text-xl sm:text-2xl font-semibold inline">
              Category: {props.category}
            </p>
          </div>
          <div
            className={`text-md sm:text-lg font-medium tracking-[0.1px] sm:mr-7 ${inter.className}`}
          >
            {props.index + 1} of {props.totalQuestions}
          </div>
        </div>
        <div className="line" />
      </header>

      {/*  Body */}
      <div
        className="text-2xl sm:text-5xl m-5 sm:m-10 max-w-[580px] tracking-[0.25px]"
        dangerouslySetInnerHTML={{ __html: props.question }}
      />

      {/*  Footer  */}
      <footer className="w-full flex flex-col items-center">
        <div className="line" />
        <div className="w-full flex flex-wrap justify-between sm:justify-center items-center px-5 py-10 gap-2 sm:gap-12">
          <button
            className="btn-success w-full sm:w-auto"
            onClick={() => props.setAnswer("True")}
          >
            <CheckIcon />
            True
          </button>
          <button
            className="btn-error w-full sm:w-auto"
            onClick={() => props.setAnswer("False")}
          >
            <WrongIcon />
            False
          </button>
        </div>
      </footer>
    </Card>
  );
}

export default Question;
