import type {PropsWithChildren} from "react";
import {cn} from "../lib/utils";

type Props = {
	className?: string;
	as?: "div" | "section" | "article";
	isBlogPost?: boolean;
};

export function PageWrapper({
	children,
	className,
	as,
	isBlogPost = false,
}: PropsWithChildren<Props>) {
	const Component = isBlogPost ? "article" : (as ?? "section");
	return (
		<Component
			className={cn(
				"mx-auto flex w-full flex-1 flex-col md:max-w-6xl",
				isBlogPost && "prose dark:prose-dark md:max-w-3xl",
				className,
			)}
		>
			{children}
		</Component>
	);
}
