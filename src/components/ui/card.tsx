import { cn } from "@/lib/utils";

interface CardProps extends React.ComponentProps<"div"> {}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "p-5 border border-solid border-gray-200 rounded-lg bg-white shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
