import {ReactNode} from "react";

import {cn} from "@/lib/styles";

interface Props {
	children: ReactNode
	className?: string
	fluid?: boolean
}

function PageWrapper({children, className, fluid = false}: Props) {
	return (
		<main
			aria-label="Page wrapper"
			className={cn(
				"flex flex-col flex-1",
				fluid ? "max-w-none" : "max-w-4xl w-full mx-auto px-2",
				className
			)}
		>
			{children}
		</main>
	);
}

export default PageWrapper;
