import {cn} from "@/lib/styles";

import {Props} from "./types";

function Twitter({className, width = 24, height = 24}: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			fill="none"
			// stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1"
			className={cn("stroke-red-100 fill-current dark:fill-white ", className)}
		>
			<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
		</svg>
	);
}

export default Twitter;
