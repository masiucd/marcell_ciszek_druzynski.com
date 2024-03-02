"use client";
import {AnimatePresence, motion} from "framer-motion";
import {type PropsWithChildren} from "react";

import ArrowDown from "@/components/icons/arrow-down";
import ArrowUp from "@/components/icons/arrow-up";
import {useToggle} from "@/lib/hooks/toggle";
import {cn} from "@/lib/styles";

type Props = {
	selected?: boolean;
};

export function AnimatedWrapper({
	children,
	selected = false,
}: PropsWithChildren<Props>) {
	let [on, {toggle}] = useToggle();

	return (
		<div className="px-1 py-2">
			<button
				onClick={toggle}
				className={cn(selected ? "text-primary-500" : "text-gray-500")}
			>
				{on ? <ArrowUp width={20} /> : <ArrowDown width={20} />}
				<span className="text-sm capitalize ">Filter by topics</span>
			</button>
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
		</div>
	);
}
