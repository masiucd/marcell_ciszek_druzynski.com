"use client";
import {type PropsWithChildren} from "react";

import Info from "@/components/icons/info";
import {useToggle} from "@/lib/hooks/toggle";

import ArrowDown from "../icons/arrow_down";
import ArrowUp from "../icons/arrow_up";
import {Button} from "../ui/button";

type Props = {
	buttonText?: string;
	title: string;
	description: string;
};

export default function MoreInfo({
	children,
	buttonText = "Read more",
	title,
	description,
}: PropsWithChildren<Props>) {
	const [on, {toggle}] = useToggle();
	return (
		<div className="relative gap-2 rounded-md bg-gray-100 p-1  shadow dark:bg-gray-900 ">
			<InfoIcon />
			<div className="flex flex-col gap-1 border-l-2 border-gray-900 pl-2">
				<strong className="text-base  font-bold dark:text-white">
					{title}
				</strong>
				<p className="m-0 text-base">{description}</p>
				<Button
					className="mb-2 flex max-w-max items-center gap-2 rounded "
					onClick={toggle}
					size="sm"
				>
					<span>{buttonText}</span>
					{on ? <ArrowUp /> : <ArrowDown />}
				</Button>
				{on && <section>{children}</section>}
			</div>
		</div>
	);
}

function InfoIcon() {
	return (
		<span className="absolute -right-2 -top-2 flex ">
			<Info className="fill-gray-900 stroke-white" />
		</span>
	);
}
