import Link from "next/link"
import {ReactNode} from "react"

import {cn} from "@/lib/styles"

import ReadMoreContent from "./read_more_content"

interface Props {
	url: string
	className?: string
	children?: ReactNode
}

export default function ReadMoreLink({url, className, children}: Props) {
	return (
		<Link
			href={url}
			className={cn(
				"text-slate-500 transition-all hover:text-blue-600 ",
				className
			)}
		>
			{children || <ReadMoreContent />}
		</Link>
	)
}
