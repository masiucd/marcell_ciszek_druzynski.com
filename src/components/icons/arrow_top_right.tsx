import {Props} from "./types"

function ArrowTopRight({className, width = 24, height = 24}: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			width={width}
			height={height}
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
		>
			<path d="M7 17L17 7"></path>
			<path d="M7 7L17 7 17 17"></path>
		</svg>
	)
}

export default ArrowTopRight
