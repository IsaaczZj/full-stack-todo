import React from "react";
import { cn } from "@/lib/merge";
import { tv, type VariantProps } from "tailwind-variants";
import plus from "@/assets/icons/plus.svg";
import Image from "next/image";

const buttonVariants = tv({
  base: "flex items-center justify-center cursor-pointer transition rounded-lg group gap-2",
  variants: {
    variant: {
      primary: "bg-gray-200 hover:bg-pink-light",
    },
    size: {
      md: "h-14 py-4 px-5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

export function Button({
  variant = "primary",
  size = "md",
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size }),
        disabled && "opacity-50 pointer-events-none",
        className
      )}
      {...props}
      disabled={disabled}
    >
     <svg 
        className="h-5 w-5 fill-pink-base" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z"/>
      </svg>
      <span className="text-gray-400 font-bold text-sm">{children}</span>
    </button>
  );
}