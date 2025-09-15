import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const iconVariants = tv({
  base: "",
  variants: {
    animate: {
      true: "animate-spin",
      false: "",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

interface IconProps
  extends React.ComponentProps<"svg">,
    VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent {...props} className={iconVariants({ animate, className })} />
  );
}
