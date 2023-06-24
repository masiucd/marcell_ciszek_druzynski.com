import type {ReactNode} from "react";

import {cn} from "@/lib/styles";

import {TypographyH1} from "./typography";

type ExclusiveProps =
	| {children?: never; title: string}
	| {children: ReactNode; title?: never};

type Props = ExclusiveProps & {
	className?: string;
};

function PageTitle({children, title, className}: Props) {
	return (
		<aside aria-label="page-title" className={cn("mb-5", className)}>
			{children ? children : <TypographyH1>{title}</TypographyH1>}
		</aside>
	);
}

export default PageTitle;
