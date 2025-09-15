import { cn } from "@/lib/merge";
import React from "react";

interface ContainerProps extends React.ComponentProps<"div"> {}
export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("max-w-xl px-3 mx-auto", className)} {...props}>
      {children}
    </div>
  );
}
