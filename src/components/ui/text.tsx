import React from "react";
import {tv} from 'tailwind-variants'
export const textVariants = tv({
  variants:{
    variant:{
      "body-sm-bold":"text-sm leading-5 font-semibold"
    }
  }
})

interface TextProps {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export function Text({ as = 'span',children,className }: TextProps) {
  return React.createElement(
    as,
    {
      className:
    },
    children
  );
}
