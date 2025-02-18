import type {PropsWithChildren} from "react";
import {cn} from "../lib/utils";

type Props = {
	className?: string;
	as?: "div" | "section" | "article";
};

export function PageWrapper({
	children,
	className,
	as,
}: PropsWithChildren<Props>) {
	const Component = as ?? "section";
	return (
		<Component
			className={cn("mx-auto flex w-full max-w-6xl flex-1 flex-col", className)}
		>
			{children}
		</Component>
	);
}
