import { cn } from "@/lib/merge";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
export const textVariants = tv({
  variants: {
    variant: {
      "body-sm-bold": "text-sm leading-5 font-semibold",
      "body-md": "text-base leading-6 font-normal",
      "body-md-bold": "text-base leading-6 font-semibold",
    },
  },
  defaultVariants: {
    variant: "body-md",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export function Text({ as = "span", children, className, variant }: TextProps) {
  return React.createElement(
    as,
    {
      className: cn(textVariants({ variant }), className),
    },
    children
  );
}
