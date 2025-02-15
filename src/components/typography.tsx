import {cn} from "@/lib/utils";
import type {JSX, PropsWithChildren} from "react";

type Props = {
	className?: string;
};

export function H1({className, children}: PropsWithChildren<Props>) {
	return (
		<h1
			className={cn(
				"scroll-m-20 font-extrabold text-4xl tracking-tight lg:text-5xl",
				className,
			)}
		>
			{children}
		</h1>
	);
}

export function H2({children, className}: PropsWithChildren<Props>) {
	return (
		<h2
			className={cn(
				"scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight first:mt-0",
				className,
			)}
		>
			{children}
		</h2>
	);
}

export function H3({children, className}: PropsWithChildren<Props>) {
	return (
		<h3
			className={cn(
				"scroll-m-20 font-semibold text-2xl tracking-tight",
				className,
			)}
		>
			{children}
		</h3>
	);
}

export function H4({className, children}: PropsWithChildren<Props>) {
	return (
		<h4
			className={cn(
				"scroll-m-20 font-semibold text-xl tracking-tight",
				className,
			)}
		>
			{children}
		</h4>
	);
}

export function P({className, children}: PropsWithChildren<Props>) {
	return (
		<p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
			{children}
		</p>
	);
}

export function Blockquote({className, children}: PropsWithChildren<Props>) {
	return (
		<blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
			{children}
		</blockquote>
	);
}

export function List({children, className}: PropsWithChildren<Props>) {
	return (
		<ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
			{children}
		</ul>
	);
}

export function InlineCode({children, className}: PropsWithChildren<Props>) {
	return (
		<code
			className={cn(
				"relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm",
				className,
			)}
		>
			{children}
		</code>
	);
}

export function Lead({children, className}: PropsWithChildren<Props>) {
	return (
		<p className={cn("text-muted-foreground text-xl", className)}>{children}</p>
	);
}

export function Large({
	children,
	className,
	as: Tag = "p",
}: PropsWithChildren<Props & {as?: keyof JSX.IntrinsicElements}>) {
	return (
		<Tag className={cn("font-semibold text-lg", className)}>{children}</Tag>
	);
}

export function Small({children, className}: PropsWithChildren<Props>) {
	return (
		<small className={cn("font-medium text-sm leading-none", className)}>
			{children}
		</small>
	);
}

export function Muted({children, className}: PropsWithChildren<Props>) {
	return (
		<p className={cn("text-muted-foreground text-sm", className)}>{children}</p>
	);
}
