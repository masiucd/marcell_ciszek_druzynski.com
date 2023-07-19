"use client";
import {ReactNode} from "react";

import Info from "@/components/icons/info";
import {useToggle} from "@/lib/hooks/toggle";

import ArrowDown from "../icons/arrow_down";
import ArrowUp from "../icons/arrow_up";

interface Props {
	children: ReactNode;
	buttonText?: string;
	title: string;
	description: string;
}

export default function MoreInfo({
	children,
	buttonText = "Read more",
	title,
	description,
}: Props) {
	const [on, {toggle}] = useToggle();
	return (
		<div className="relative gap-2 rounded-md bg-gray-100 p-1 shadow">
			<InfoIcon />
			<div className="flex flex-col gap-1 border-l-2 border-gray-900 pl-2">
				<strong className="m-0 text-lg font-bold">{title}</strong>
				<p className="m-0">{description}</p>
				<button
					className="mb-2 flex max-w-max items-center gap-2 rounded bg-gray-900 px-2 py-1 font-bold text-white hover:opacity-50"
					onClick={toggle}
				>
					<span>{buttonText}</span>
					{on ? <ArrowUp /> : <ArrowDown />}
				</button>
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
