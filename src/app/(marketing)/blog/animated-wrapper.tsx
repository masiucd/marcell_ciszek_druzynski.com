"use client";
import {AnimatePresence, motion} from "framer-motion";
import {type PropsWithChildren} from "react";

import ArrowDown from "@/components/icons/arrow_down";
import ArrowUp from "@/components/icons/arrow_up";
import {Button} from "@/components/ui/button";
import {useToggle} from "@/lib/hooks/toggle";

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
			<Button
				size="xs"
				variant="solid"
				className="mb-2 flex items-center gap-1 text-sm shadow-md"
				onClick={toggle}
				selected={selected}
			>
				{on ? <ArrowUp width={20} /> : <ArrowDown width={20} />}
				<span className="text-sm capitalize ">Filter by topics</span>
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
		</div>
	);
}
