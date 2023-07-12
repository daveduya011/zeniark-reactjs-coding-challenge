import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Card className="p-5">
      <Image
        src="/images/zeniark-logo.png"
        className="mb-9"
        alt="logo"
        width={344}
        height={91}
      />
      <h1 className="text-4xl font-semibold">
        Welcome to the Trivia Challenge!
      </h1>
      <p className="text-xl font-medium tracking-[-0.11px]">
        You will be presented with 10 True or False questions.
      </p>
      <div className="btn hover:bg-primary cursor-auto w-auto sm:w-full max-w-[523px] mt-9">
        Can you score 10/10?
      </div>
      <Link href="/quiz" className="mt-14 link">
        Let’s Start!
      </Link>
    </Card>
  );
}
