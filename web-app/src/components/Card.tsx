import React from "react";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col items-center justify-center
                gap-2 bg-background rounded-card w-full
                max-w-card min-h-card text-center p-5"
    >
      {children}
    </div>
  );
}

export default Card;
