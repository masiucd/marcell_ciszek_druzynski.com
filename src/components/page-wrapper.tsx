import type {PropsWithChildren} from "react";
import {cn} from "../lib/utils";

type Props = {
	className?: string;
};

export function PageWrapper({children, className}: PropsWithChildren<Props>) {
	return (
		<section
			className={cn(
				"mx-auto flex w-full max-w-6xl flex-1 flex-col bg-green-300 md:bg-red-200",
				className,
			)}
		>
			{children}
		</section>
	);
}
