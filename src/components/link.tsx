import {cn} from "@/lib/utils";
import NextLink, {type LinkProps} from "next/link";
import type {PropsWithChildren} from "react";

interface CustomLinkProps extends LinkProps {
	className?: string;
}

export function Link(props: PropsWithChildren<CustomLinkProps>) {
	return (
		<NextLink {...props} className={cn("hover:opacity-50", props.className)} />
	);
}
