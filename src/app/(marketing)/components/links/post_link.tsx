import Link from "next/link";
import {type PropsWithChildren} from "react";

import {cn} from "@/lib/styles";

import LinkContent from "./link_content";

type Props = {
	url: string;
	className?: string;
	title?: string;
	LinkClassName?: string;
	arrow: "left" | "right";
};

export default function PostLink({
	url,
	className,
	children,
	title,
	LinkClassName,
	arrow,
}: PropsWithChildren<Props>) {
	return (
		<Link
			href={url}
			className={cn(
				"text-gray-500 dark:text-gray-100 transition-all hover:text-blue-500 dark:hover:text-blue-500",
				className
			)}
		>
			{children || (
				<LinkContent title={title} className={LinkClassName} arrow={arrow} />
			)}
		</Link>
	);
}
