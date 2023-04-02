import Link from "next/link"
import {ReactNode} from "react"

import {cn} from "@/lib/styles"

import Arrow from "../icons/arrow"

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
			{children || (
				<div className="flex items-center gap-2 hover:animate-pulse">
					<span>Read more</span>
					<span className="">
						<Arrow width={20} height={20} />
					</span>
				</div>
			)}
		</Link>
	)
}
