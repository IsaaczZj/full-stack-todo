import React from "react";
import { cn } from "@/lib/merge";
import { tv, type VariantProps } from "tailwind-variants";
import { Skeleton } from "./skeleton";

const buttonIconVariants = tv({
  base: "h-6 w-6 p-1 inline-flex items-center justify-center rounded cursor-pointer transition group",
  variants: {
    variant: {
      primary: "bg-green-base hover:bg-green-dark",
      secondary: "bg-gray-200 hover:bg-pink-base",
      tertiary: "bg-transparent hover:bg-gray-200",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const iconVariants = tv({
  base: "transition h-4 w-4",
  variants: {
    variant: {
      primary: "fill-white",
      secondary: "fill-pink-base group-hover:fill-white",
      tertiary: "fill-gray-300 group-hover:fill-gray-400",
    },
  },
});

interface ButtonIconProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonIconVariants> {
  icon?: "pencil" | "trash";
  loading?: boolean;
}

const icons = {
  pencil: (
    <path d="M28.4138 9.17122L22.8288 3.58497C22.643 3.39921 22.4225 3.25185 22.1799 3.15131C21.9372 3.05077 21.6771 2.99902 21.4144 2.99902C21.1517 2.99902 20.8916 3.05077 20.6489 3.15131C20.4062 3.25185 20.1857 3.39921 20 3.58497L4.58626 19C4.39973 19.185 4.25185 19.4053 4.15121 19.648C4.05057 19.8907 3.99917 20.151 4.00001 20.4137V26C4.00001 26.5304 4.21072 27.0391 4.5858 27.4142C4.96087 27.7893 5.46958 28 6.00001 28H11.5863C11.849 28.0008 12.1093 27.9494 12.352 27.8488C12.5947 27.7481 12.815 27.6002 13 27.4137L28.4138 12C28.5995 11.8142 28.7469 11.5937 28.8474 11.3511C28.948 11.1084 28.9997 10.8483 28.9997 10.5856C28.9997 10.3229 28.948 10.0628 28.8474 9.82012C28.7469 9.57744 28.5995 9.35694 28.4138 9.17122ZM11.5863 26H6.00001V20.4137L17 9.41372L22.5863 15L11.5863 26ZM24 13.585L18.4138 7.99997L21.4138 4.99997L27 10.585L24 13.585Z" />
  ),
  trash: (
    <path d="M27 6H22V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2H13C12.2044 2 11.4413 2.31607 10.8787 2.87868C10.3161 3.44129 10 4.20435 10 5V6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H6V26C6 26.5304 6.21071 27.0391 6.58579 27.4142C6.96086 27.7893 7.46957 28 8 28H24C24.5304 28 25.0391 27.7893 25.4142 27.4142C25.7893 27.0391 26 26.5304 26 26V8H27C27.2652 8 27.5196 7.89464 27.7071 7.70711C27.8946 7.51957 28 7.26522 28 7C28 6.73478 27.8946 6.48043 27.7071 6.29289C27.5196 6.10536 27.2652 6 27 6ZM12 5C12 4.73478 12.1054 4.48043 12.2929 4.29289C12.4804 4.10536 12.7348 4 13 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V6H12V5ZM24 26H8V8H24V26ZM14 13V21C14 21.2652 13.8946 21.5196 13.7071 21.7071C13.5196 21.8946 13.2652 22 13 22C12.7348 22 12.4804 21.8946 12.2929 21.7071C12.1054 21.5196 12 21.2652 12 21V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12C13.2652 12 13.5196 12.1054 13.7071 12.2929C13.8946 12.4804 14 12.7348 14 13ZM20 13V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22C18.7348 22 18.4804 21.8946 18.2929 21.7071C18.1054 21.5196 18 21.2652 18 21V13C18 12.7348 18.1054 12.4804 18.2929 12.2929C18.4804 12.1054 18.7348 12 19 12C19.2652 12 19.5196 12.1054 19.7071 12.2929C19.8946 12.4804 20 12.7348 20 13Z"/>
  ),
};

export function ButtonIcon({
  icon = "pencil",
  variant = "primary",
  disabled,
  className,
  loading,
  ...props
}: ButtonIconProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className="h-6 w-6 p-1 inline-flex items-center justify-center rounded transition group"
      />
    );
  }

  return (
    <button
      className={cn(
        buttonIconVariants({ variant }),
        disabled && "opacity-50 pointer-events-none",
        className
      )}
      disabled={disabled}
      {...props}
    >
      <svg 
        className={cn(iconVariants({ variant }))}
        viewBox="0 0 32 32" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {icons[icon]}
      </svg>
    </button>
  );
}