import {cva, type VariantProps} from "class-variance-authority";
import {type ButtonHTMLAttributes} from "react";

import {cn} from "@/lib/styles";

const buttonVariants = cva(
	"rounded text-gray-900 shadow transition-colors duration-150 ease-in-out dark:text-white",
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
				default: "h-10",
				sm: "h-9 px-3",
				md: "h-10  px-4",
				lg: "h-11  px-8",
				icon: "h-10 w-10",
				reset: "h-10 w-10 p-0",
			},
			spacing: {
				compact: "h-6 p-1",
				default: "px-3 py-2",
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
