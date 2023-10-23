"use client";
import {AnimatePresence, motion} from "framer-motion";
import {type PropsWithChildren} from "react";

import ArrowDown from "@/components/icons/arrow_down";
import ArrowUp from "@/components/icons/arrow_up";
import {Button} from "@/components/ui/button";
import {useToggle} from "@/lib/hooks/toggle";

export function AnimatedWrapper({children}: PropsWithChildren<{}>) {
	let [on, {toggle}] = useToggle();
	return (
		<motion.div className="px-2 py-3">
			<Button
				variant="subtle"
				className="mb-2 flex items-center gap-1"
				onClick={toggle}
				spacing="compact"
			>
				{on ? <ArrowUp width={20} /> : <ArrowDown width={20} />}
				<span>Filter tags</span>
			</Button>
			<AnimatePresence>
				{on && (
					<motion.div
						key="content"
						initial={{opacity: 0, height: 0}}
						animate={{opacity: 1, height: "auto"}}
						exit={{opacity: 0, height: 0}}
						transition={{duration: 0.5, type: "spring"}}
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
