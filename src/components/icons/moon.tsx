import {Props} from "./types";

function Moon({width = 20, height = 20, className}: Props) {
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
			className={className}
			viewBox="0 0 24 24"
		>
			<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
		</svg>
	);
}

export default Moon;
