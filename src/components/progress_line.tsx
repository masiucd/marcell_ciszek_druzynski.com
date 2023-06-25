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
		["calc(0% - 0px)", "calc(100% - 10px)"]
		// ["0%", "100%"]
	);

	return (
		<motion.div
			style={{
				// width: `${width.get()}%`,
				width: lineWidth,
				// width: scrollYProgress,
				// scaleX: remainingPercentage,
				// height,
			}}
			className="fixed left-0 top-0 z-10 h-[5px] w-2 origin-[0%] rounded-r-lg bg-gradient-to-r from-blue-500 to-gray-600 shadow dark:to-gray-200"
		/>
	);
};
