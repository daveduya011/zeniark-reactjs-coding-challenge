import Card from "@/components/Card";
import Image from "next/image";
import { inter } from "@/fonts";

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
        <div className="w-full flex justify-between items-center px-7 py-5">
          <div>
            <Image
              src="/images/logo.png"
              width={60}
              height={65}
              alt="logo"
              className="mr-7 inline"
            />
            <p className="text-2xl font-semibold inline">
              Category: {props.category}
            </p>
          </div>
          <div
            className={`text-lg font-medium tracking-[0.1px] mr-7 ${inter.className}`}
          >
            1 of 10
          </div>
        </div>
        <div className="line" />
      </header>

      {/*  Body */}
      <p className="text-5xl max-w-[580px] tracking-[0.25px]">
        {props.question}
      </p>

      {/*  Footer  */}
      <footer className="w-full flex flex-col items-center">
        <div className="line" />
        <div className="flex justify-between items-center px-5 py-10 gap-12">
          <button className="btn-success">
            <span>
              <Image src="/images/check.svg" width={28} height={20} alt="" />
            </span>
            True
          </button>
          <button className="btn-error">
            <span>
              <Image src="/images/wrong.svg" width={20} height={22.8} alt="" />
            </span>
            False
          </button>
        </div>
      </footer>
    </Card>
  );
}

export default Question;
