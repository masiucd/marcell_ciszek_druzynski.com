"use client"

import Link from "next/link"
import {usePathname} from "next/navigation"
import {ReactNode} from "react"

import {cn} from "@/lib/styles"

interface Props {
	children: ReactNode
	href: string
	className?: string
}

const isActive = (path: string, pathname: string | null) => pathname === path
function A({children, href, className}: Props) {
	const pathname = usePathname()

	return (
		<Link
			href={href}
			className={cn(
				"capitalize text-sm sm:text-base",
				isActive(href, pathname)
					? "border-b-2 border-slate-950/70 text-slate-900/70"
					: "",
				className
			)}
		>
			{/* <a className={isActive("/blog") ? "active" : ""}>Blog</a> */}
			{children}
		</Link>
	)
}

export default A
