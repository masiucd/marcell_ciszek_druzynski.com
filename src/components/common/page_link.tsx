"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {ReactNode} from "react";

import {cn} from "@/lib/styles";

import {ButtonTypes} from "./buttons";

interface Props {
	children: ReactNode;
	href: string;
	className?: string;
}
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

function PageLink({children, href, className}: Props) {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link
			className={cn(
				"inline-block relative pb-[2px] text-gray-600 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-gray-900 after:transition-all after:content-[''] hover:after:w-full   dark:text-gray-300  dark:after:bg-gray-50 font-bold",
				isActive && "text-gray-900 dark:text-gray-50 after:w-full",
				className
			)}
			{...attributes(href)}
		>
			{children}
		</Link>
	);
}

// TODO Make one component but different styles, factory pattern?
export function RegularLink({children, href, className}: Props) {
	return (
		<Link
			className={cn(
				ButtonTypes.link,
				"hover:text-gray-800/70 dark:text-gray-200/70",
				className
			)}
			{...attributes(href)}
		>
			{children}
		</Link>
	);
}

export default PageLink;
