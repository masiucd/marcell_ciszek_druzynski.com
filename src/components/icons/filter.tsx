import {cn} from "@/lib/styles";

import {Props} from "./types";

export function Filter({className, width = 24, height = 24}: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			className={cn(
				"dark:stroke-gray-100 stroke-gray-900 fill-current dark:fill-white ",
				className
			)}
			viewBox="0 0 24 24"
		>
			<path d="M22 3L2 3 10 12.46 10 19 14 21 14 12.46 22 3z"></path>
		</svg>
	);
}
