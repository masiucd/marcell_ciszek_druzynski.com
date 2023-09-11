import {PropsWithChildren} from "react";

import {cn} from "@/lib/styles";

type Props = {
	className?: string;
};

export function NavListItem({children, className}: PropsWithChildren<Props>) {
	return (
		<li className={cn("text-sm hover:opacity-50 ", className)}>{children}</li>
	);
}
