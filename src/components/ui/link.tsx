"use client";
import {cva, type VariantProps} from "class-variance-authority";
import NextJSLink from "next/link";
import {usePathname} from "next/navigation";
import {LinkHTMLAttributes} from "react";

import {cn} from "@/lib/styles";

const linkVariants = cva(
	"inline-block text-gray-900 dark:text-gray-200 p-1 rounded transition-colors duration-200 hover:text-gray-700 dark:hover:text-gray-300",
	{
		variants: {
			variant: {
				subtile: "p-0",
				default: "hover:text-blue-500 dark:hover:text-blue-500",
				fancyHover:
					"relative pb-[2px] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-blue-500 after:transition-all after:content-[''] hover:after:w-full after:rounded-md",
			},
			size: {
				default: "text-base",
				sm: "text-sm",
				md: "text-base",
				lg: "text-lg",
				xl: "text-xl",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	}
);

const attributes = (href: string, ...rest: string[]) => {
	if (href.startsWith("https")) {
		return {
			href,
			...rest,
			target: "_blank",
			rel: "noopener noreferrer",
		};
	}
	return {
		href,
		...rest,
	};
};

export interface LinkProps
	extends LinkHTMLAttributes<HTMLLinkElement>,
		VariantProps<typeof linkVariants> {
	href: string;
}

export function Link({className, href, variant, size, children}: LinkProps) {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<NextJSLink
			className={cn(
				linkVariants({variant, size, className}),
				isActive && "text-gray-900 dark:text-gray-50 after:w-full"
			)}
			{...attributes(href)}
		>
			{children}
		</NextJSLink>
	);
}
