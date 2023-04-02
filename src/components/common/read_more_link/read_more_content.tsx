"use client"

import {AnimatePresence, motion} from "framer-motion"

import Arrow from "@/components/icons/arrow"
import {useToggle} from "@/lib/hooks/toggle"

export default function ReadMoreContent() {
	const [on, {setTrue, setFalse}] = useToggle()
	return (
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
	)
}
