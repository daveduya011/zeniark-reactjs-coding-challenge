import "@/styles/globals.css";
import type { Metadata } from "next";
import { poppins } from "@/fonts";

export const metadata: Metadata = {
  title: "Zeniark Trivia Challenge",
  description: "A Trivia App Presented to Zeniark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
