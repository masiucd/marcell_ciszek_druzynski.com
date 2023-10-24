"use client";
import {AnimatePresence, motion} from "framer-motion";
import {type PropsWithChildren} from "react";

import ArrowDown from "@/components/icons/arrow_down";
import ArrowUp from "@/components/icons/arrow_up";
import {Button} from "@/components/ui/button";
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
	console.log("selected", selected);
	return (
		<motion.div className="px-1 py-2">
			<Button
				variant="subtle"
				className={cn(
					"mb-2 flex items-center gap-1 shadow-md",
					selected &&
						"bg-gray-900 dark:bg-primary-200 text-gray-50 dark:text-gray-900 hover:text-gray-950"
				)}
				onClick={toggle}
				spacing="compact"
			>
				{on ? <ArrowUp width={20} /> : <ArrowDown width={20} />}
				<span className="capitalize">Filter by topics</span>
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
