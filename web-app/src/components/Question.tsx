import Card from "@/components/Card";
import Image from "next/image";
import { inter } from "@/fonts";
import CheckIcon from "@/components/Icons/CheckIcon";
import WrongIcon from "@/components/Icons/WrongIcon";

function Question(props: {
  question: string;
  category: string;
  answer: boolean;
  index: number;
}) {
  return (
    <Card className="justify-between">
      {/*  Header */}
      <header className="w-full flex flex-col items-center">
        <div className="w-full flex-col sm:flex-row flex justify-between items-center px-7 py-5">
          <div className="flex text-center justify-center flex-wrap items-center gap-2 sm:gap-7">
            <Image src="/images/logo.png" width={60} height={65} alt="logo" />
            <p className="text-xl sm:text-2xl font-semibold inline">
              Category: {props.category}
            </p>
          </div>
          <div
            className={`text-md sm:text-lg font-medium tracking-[0.1px] mr-7 ${inter.className}`}
          >
            1 of 10
          </div>
        </div>
        <div className="line" />
      </header>

      {/*  Body */}
      <p className="text-2xl sm:text-5xl m-10 max-w-[580px] tracking-[0.25px]">
        {props.question}
      </p>

      {/*  Footer  */}
      <footer className="w-full flex flex-col items-center">
        <div className="line" />
        <div className="w-full flex flex-wrap justify-between sm:justify-center items-center px-5 py-10 gap-2 sm:gap-12">
          <button className="btn-success w-full sm:w-auto">
            <CheckIcon />
            True
          </button>
          <button className="btn-error w-full sm:w-auto">
            <WrongIcon />
            False
          </button>
        </div>
      </footer>
    </Card>
  );
}

export default Question;
