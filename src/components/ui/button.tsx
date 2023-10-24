import {cva, type VariantProps} from "class-variance-authority";
import {type ButtonHTMLAttributes} from "react";

import {cn} from "@/lib/styles";

const buttonVariants = cva(
	"cursor-pointer rounded text-gray-900  transition-colors duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-60 dark:text-white ",
	{
		variants: {
			variant: {
				primary: "bg-blue-500 text-gray-100 hover:bg-blue-600 hover:shadow-lg",
				link: "bg-transparent text-blue-500 shadow-none  hover:underline dark:text-gray-100",
				default: "bg-gray-300/20 hover:bg-gray-300/80",
				subtle:
					"bg-transparent shadow-none hover:bg-gray-300/80 dark:hover:bg-gray-100/80 dark:hover:text-gray-900",
				secondary:
					"bg-gray-300/20 shadow-none hover:bg-gray-300/80 dark:hover:bg-gray-100/80 dark:hover:text-gray-900",
			},
			size: {
				default: "h-8",
				sm: "h-7",
				md: "h-10",
				lg: "h-11",
			},
			spacing: {
				compact: "p-1",
				reset: "p-0",
				default: "px-2 py-1",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
			spacing: "default",
		},
	}
);

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

export function Button({className, variant, size, ...props}: ButtonProps) {
	return (
		<button
			className={cn(buttonVariants({variant, size, className}))}
			{...props}
		/>
	);
}
