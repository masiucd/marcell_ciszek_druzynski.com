"use client"

import {AnimatePresence, motion} from "framer-motion"

import ArrowLeft from "@/components/icons/arrow_left"
import ArrowRight from "@/components/icons/arrow_right"
import {useToggle} from "@/lib/hooks/toggle"
import {cn} from "@/lib/styles"

interface Props {
	title?: string
	className?: string
	arrow?: "left" | "right"
}

export default function LinkContent({
	title = "Read more",
	className,
	arrow = "right",
}: Props) {
	const [on, {setTrue, setFalse}] = useToggle()
	return (
		<div
			className={cn("flex items-center gap-2 hover:animate-pulse", className)}
		>
			<span onMouseEnter={setTrue} onMouseLeave={setFalse}>
				{title}
			</span>
			<AnimatePresence>
				{on && (
					<motion.span
						initial={{opacity: 0, x: 10}}
						animate={{opacity: 1, x: 0}}
						exit={{opacity: 0, x: 10}}
					>
						<ArrowIcon arrow={arrow} />
					</motion.span>
				)}
			</AnimatePresence>
		</div>
	)
}

function ArrowIcon({arrow}: {arrow: "left" | "right"}) {
	if (arrow === "left") {
		return <ArrowLeft width={20} height={20} />
	}
	return <ArrowRight width={20} height={20} />
}
