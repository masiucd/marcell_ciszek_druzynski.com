import {ReactNode} from "react"

import {cn} from "@/lib/styles"

interface Props {
	children: ReactNode
	className?: string
	fluid?: boolean
}

function PageWrapper({children, className, fluid = false}: Props) {
	return (
		<div
			className={cn(
				"flex flex-col flex-1",
				fluid ? "max-w-none" : "max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8",
				className
			)}
		>
			{children}
		</div>
	)
}

export default PageWrapper
