import { cn } from "@/lib/merge";
import React from "react";

interface InputProps extends React.ComponentProps<"input"> {}

export function Input({ type = "text", className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "border-b border-solid border-gray-200 focus:border-pink-base outline-none bg-transparent pb-2 px-2 text-md",
        className
      )}
      {...props}
    />
  );
}
