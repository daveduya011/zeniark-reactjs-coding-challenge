import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-full items-center justify-center p-8">
      <Card>
        <Image
          src="/images/zeniark-logo.png"
          className="mb-10"
          alt="logo"
          width={344}
          height={91}
        />
        <h1 className="text-3xl font-semibold mb-2">
          Welcome to the Trivia Challenge!
        </h1>
        <p className="text-lg font-medium">
          You will be presented with 10 True or False questions.
        </p>
        <div className="btn cursor-auto w-auto sm:w-full max-w-md mt-7">
          Can you score 10/10?
        </div>
        <Link
          href="/quiz"
          className="mt-12 text-3xl font-semibold text-primary border-b-primary border-b-4 uppercase"
        >
          {"Let's Start!"}
        </Link>
      </Card>
    </main>
  );
}
