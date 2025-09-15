import React from "react";
import { cn } from "@/lib/merge";
import { tv, type VariantProps } from "tailwind-variants";
import { Skeleton } from "./skeleton";

const badgeVariants = tv({
  base: "inline-flex items-center justify-center rounded-full",
  variants: {
    variant: {
      primary: "bg-green-light text-green-dark",
      secondary: "bg-pink-light text-pink-dark",
    },
    size: {
      sm: "py-0.5 px-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

interface BadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {
  loading?: boolean;
}

export function Badge({
  variant = "primary",
  size = "sm",
  className,
  children,
  loading,
  ...props
}: BadgeProps) {
  if (loading) {
    return <Skeleton rounded="full" className="w-6 h-6" />;
  }

  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      <span className="text-sm font-bold">{children}</span>
    </div>
  );
}