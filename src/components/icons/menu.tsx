"use client";
import {motion} from "framer-motion";

import {Props} from "./types";

interface MenuIconProps extends Props {
	on: boolean;
}

function MenuIcon({className, width = 24, height = 24, on}: MenuIconProps) {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			className={className}
			viewBox="0 0 24 24"
			animate={{
				y: on ? 6 : 0,
				// x: on ? 6 : 0,
			}}
		>
			<motion.path
				animate={{
					// x: on ? 2 : 0,
					// rotate: on ? 45 : 0,
					// x: on ? 1 : 0,
					rotate: on ? 45 : 0,
					y: on ? -5 : 0,
				}}
				d="M3 12L21 12"
			></motion.path>
			<motion.path
				animate={{
					// x: on ? 100 : 0,
					// x: on ? 3 : 0,
					rotate: on ? -45 : 0,
				}}
				d="M3 6L21 6"
			></motion.path>
			<motion.path
				animate={{
					x: on ? 2 : 0,
					opacity: on ? 0 : 1,
				}}
				d="M3 18L21 18"
			></motion.path>
		</motion.svg>
	);
}

export default MenuIcon;
