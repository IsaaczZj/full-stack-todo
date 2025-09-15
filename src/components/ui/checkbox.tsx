import React from "react";
import { Skeleton } from "./skeleton";
import { cn } from "@/lib/utils";

interface CheckBoxProps extends React.ComponentProps<"input"> {
  loading?: boolean;
}
export function CheckBox({ className, loading, ...props }: CheckBoxProps) {
  if (loading) {
    return <Skeleton rounded="sm" className="h-5 w-5" />;
  }
  return (
    <label className="inline-flex items-center justify-center cursor-pointer relative group">
      <input
        type="checkbox"
        className={cn(
          "h-5 w-5 rounded-sm appearance-none peer flex items-center justify-center border-2 transition cursor-pointer overflow-hidden border-green-base hover:border-green-dark hover:bg-green-dark/20 checked:border-green-base checked:bg-green-base group-hover:checked:border-green-dark group-hover:checked:bg-green-dark",
          className
        )}
        {...props}
      />
      <svg
        className="absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </label>
  );
}
