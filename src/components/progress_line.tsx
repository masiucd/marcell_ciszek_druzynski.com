"use client";

import {
	motion,
	useMotionValue,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion";

export const ProgressLine = () => {
	const width = useMotionValue(0);
	const {scrollY} = useScroll();
	useMotionValueEvent(scrollY, "change", (current) => {
		const PageHeight = document.body.scrollHeight - window.innerHeight;
		const percentage = (current / PageHeight) * 100;
		width.set(percentage);
	});

	const lineWidth = useTransform(
		width,
		[0, 100],
		["calc(0% - 0px)", "calc(100% - 5px)"]
		// ["0%", "100%"]
	);

	return (
		<motion.div
			style={{
				width: lineWidth,
			}}
			className="fixed left-0 top-0 z-10 h-[5px] w-2 origin-[0%] rounded-r-lg bg-gradient-to-t from-gray-300 to-blue-500 shadow dark:to-blue-500"
		/>
	);
};
