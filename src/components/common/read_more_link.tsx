import Link from "next/link"
import {ReactNode} from "react"

import {cn} from "@/lib/styles"

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
				"text-slate-500  transition-all after:pl-1 after:content-[''] hover:text-blue-600 after:hover:content-['->']",
				className
			)}
		>
			{children || "Read more"}
		</Link>
	)
}
