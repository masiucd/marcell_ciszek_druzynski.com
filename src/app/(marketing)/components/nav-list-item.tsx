import {type ReactNode} from "react";

import {cn} from "@/lib/styles";

interface Props {
	children: ReactNode;
	className?: string;
}

export function NavListItem({children, className}: Props) {
	return <li className={cn("hover:opacity-50", className)}>{children}</li>;
}
