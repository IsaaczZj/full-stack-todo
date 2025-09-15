import { cn } from "@/lib/merge";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const skeletonVariants = tv({
  base: "animate-pulse bg-gray-200 pointer-events-none",
  variants: {
    rounded: {
      sm: "rounded-sm",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
});

interface SkeletonProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof skeletonVariants> {}
export function Skeleton({
  className,
  rounded = "sm",
  ...props
}: SkeletonProps) {
  return (
    <div className={skeletonVariants({ rounded, className })} {...props} />
  );
}
