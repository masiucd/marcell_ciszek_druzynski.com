import {Props} from "./types";

function Info({className, height = 24, width = 24}: Props) {
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
			viewBox="0 0 24 24"
			className={className}
		>
			<circle cx="12" cy="12" r="10"></circle>
			<path d="M12 16L12 12"></path>
			<path d="M12 8L12.01 8"></path>
		</svg>
	);
}

export default Info;
