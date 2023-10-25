import {cva, type VariantProps} from "class-variance-authority";
import {type ButtonHTMLAttributes} from "react";

import {cn} from "@/lib/styles";

const buttonVariants = cva("relative cursor-pointer shadow-sm active:top-1", {
	variants: {
		variant: {
			solid:
				"bg-gray-900 font-semibold text-gray-50 transition-opacity duration-150 hover:opacity-60 dark:bg-gray-100 dark:text-zinc-900",
			faded:
				"bg-gray-700/75 text-gray-50/80 transition-opacity duration-150 hover:opacity-60 dark:bg-gray-200/75 dark:text-gray-950/80",
			bordered:
				"border border-primary-600 bg-transparent transition-opacity duration-150 hover:opacity-60 dark:border-primary-400",
			light:
				"border-none bg-transparent text-primary-500 shadow-md dark:shadow-sm dark:shadow-primary-50/40",
			flat: "border-none bg-primary-500/20 text-primary-600 dark:text-blue-400",
			ghost:
				"border border-primary-500 bg-transparent duration-150 hover:bg-primary-500/75 hover:text-gray-50",
		},
		size: {
			sm: "px-2 py-1 text-sm",
			md: "px-3 py-2 text-base",
			lg: "px-4 py-3 text-lg",
		},
		radius: {
			sm: "rounded-sm",
			md: "rounded-md",
			lg: "rounded-lg",
			full: "rounded-full",
			none: "rounded-none",
		},
	},
	defaultVariants: {
		variant: "solid",
		size: "md",
		radius: "md",
	},
});

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

export function Button({
	className,
	variant,
	size,
	radius,
	...props
}: ButtonProps) {
	return (
		<button
			className={cn(buttonVariants({variant, size, radius, className}))}
			{...props}
		/>
	);
}
