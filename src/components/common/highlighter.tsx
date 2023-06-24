import {ReactNode} from "react";

interface Props {
	children: ReactNode;
}
function HighlightWrapper({children}: Props) {
	return (
		<span className="border-b-2 border-gray-900 text-gray-600 dark:border-gray-500 dark:text-gray-300">
			{children}
		</span>
	);
}

export default HighlightWrapper;
