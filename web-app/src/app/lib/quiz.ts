import { endpoint } from "@/app/utils/endpoint";

export async function getQuizQuestions() {
  const data = await fetch(`${endpoint}/quiz/generate-questions`, {
    cache: "no-store",
  });

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}
