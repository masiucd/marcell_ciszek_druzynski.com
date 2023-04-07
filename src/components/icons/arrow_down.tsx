import {Props} from "./types"

function ArrowDown({className, width = 24, height = 24}: Props) {
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
			<path d="M12 5L12 19"></path>
			<path d="M19 12L12 19 5 12"></path>
		</svg>
	)
}

export default ArrowDown
