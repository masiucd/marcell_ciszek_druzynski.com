"use client";
import {type VariantProps} from "class-variance-authority";
import NextJSLink from "next/link";
import {usePathname} from "next/navigation";
import {LinkHTMLAttributes} from "react";

import {cn} from "@/lib/styles";

import {linkVariants} from "./link-variants";

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
	disableActive?: boolean;
}

export function Link({
	className,
	href,
	variant,
	size,
	children,
	disableActive = false,
}: LinkProps) {
	const pathname = usePathname();
	const isActive = !disableActive && pathname === href;
	return (
		<NextJSLink
			className={cn(
				isActive &&
					"underline decoration-gray-700 underline-offset-4 dark:decoration-gray-100 dark:text-primary-100",
				linkVariants({variant, size, className})
			)}
			{...attributes(href)}
		>
			{children}
		</NextJSLink>
	);
}
