import Link from "next/link"
import {ReactNode} from "react"

import {cn} from "@/lib/styles"

interface Props {
	children: ReactNode
	href: string
	className?: string
}

function PageLink({children, href, className}: Props) {
	return (
		<Link
			href={href}
			className={cn(
				"relative pb-[2px] text-slate-600 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-slate-900 after:transition-all after:content-[''] hover:after:w-full   dark:text-slate-300  dark:after:bg-slate-50",
				className
			)}
		>
			{children}
		</Link>
	)
}

export default PageLink
