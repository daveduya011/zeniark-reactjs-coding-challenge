function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center
          gap-2 bg-background rounded-card w-full
          max-w-card min-h-card text-center ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
