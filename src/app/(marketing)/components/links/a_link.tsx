"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {ReactNode} from "react";

import {cn} from "@/lib/styles";

interface Props {
	children: ReactNode;
	href: string;
	className?: string;
}

const isActive = (path: string, pathname: string | null) => pathname === path;
function A({children, href, className}: Props) {
	const pathname = usePathname();
	return (
		<Link
			href={href}
			className={cn(
				"capitalize text-sm sm:text-base",
				getActiveStyles(href, pathname),
				className
			)}
		>
			<span>{children}</span>
		</Link>
	);
}

function getActiveStyles(path: string, pathname: string | null) {
	if (isActive(path, pathname)) {
		return "border-b-2 border-gray-950/70 text-gray-900/80 text-gray-400/70 dark:border-gray-400/70";
	}
	return null;
}

export default A;
