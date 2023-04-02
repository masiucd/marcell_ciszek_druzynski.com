"use client"
import {AnimatePresence, motion} from "framer-motion"
import Link from "next/link"
import {ReactNode} from "react"

import Arrow from "@/components/icons/arrow"
import {useToggle} from "@/lib/hooks/toggle"
import {cn} from "@/lib/styles"

interface Props {
	url: string
	className?: string
	children?: ReactNode
}

export default function ReadMoreLink({url, className, children}: Props) {
	const [on, {setTrue, setFalse}] = useToggle()
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
					<span onMouseEnter={setTrue} onMouseLeave={setFalse}>
						Read more
					</span>
					<AnimatePresence>
						{on && (
							<motion.span
								initial={{opacity: 0, x: 10}}
								animate={{opacity: 1, x: 0}}
								exit={{opacity: 0, x: 10}}
							>
								<Arrow width={20} height={20} />
							</motion.span>
						)}
					</AnimatePresence>
				</div>
			)}
		</Link>
	)
}
