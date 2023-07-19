import {ReactNode} from "react";

import {cn} from "@/lib/styles";

interface Props {
	children: ReactNode;
	className?: string;
}
function HighlightWrapper({children, className}: Props) {
	return (
		<span
			className={cn(
				"border-b-2 border-gray-900 text-gray-600 dark:border-gray-500 dark:text-gray-300",
				className
			)}
		>
			{children}
		</span>
	);
}

export default HighlightWrapper;
