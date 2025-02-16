import {cn} from "@/lib/utils";
import type {HTMLAttributes} from "react";

const Card = ({className, ...props}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"rounded-xl border bg-card text-card-foreground shadow",
			className,
		)}
		{...props}
	/>
);

const CardHeader = ({className, ...props}: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);

const CardTitle = ({className, ...props}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn("font-semibold leading-none tracking-tight", className)}
		{...props}
	/>
);

const CardDescription = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("text-muted-foreground text-sm", className)} {...props} />
);

const CardContent = ({className, ...props}: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("p-6 pt-0", className)} {...props} />
);

const CardFooter = ({className, ...props}: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("flex items-center p-6 pt-0", className)} {...props} />
);

export {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent};
