import {cva, type VariantProps} from "class-variance-authority";
import {type ButtonHTMLAttributes} from "react";

import {cn} from "@/lib/styles";

const buttonVariants = cva("rounded px-3 py-1", {
	variants: {
		variant: {
			primary: "bg-blue-500 hover:bg-blue-600 text-white",
			secondary: "bg-gray-500 hover:bg-gray-600 text-white",
			tertiary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
			link: "bg-transparent hover:bg-gray-200 text-gray-900",
			ghost: "bg-transparent hover:bg-gray-200 text-gray-900",
			uniformed: " hover:bg-gray-300 text-gray-900",
		},
		size: {
			default: "h-10 px-4 py-2",
			sm: "h-9 rounded-md px-3",
			md: "h-10 rounded-md px-4",
			lg: "h-11 rounded-md px-8",
			icon: "h-10 w-10",
			reset: "h-10 w-10 p-0",
		},
	},
	defaultVariants: {
		variant: "uniformed",
		size: "md",
	},
});

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
