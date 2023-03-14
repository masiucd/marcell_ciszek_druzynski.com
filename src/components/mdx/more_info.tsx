"use client"
import {ReactNode} from "react"

import {useToggle} from "@/lib/hooks/toggle"

interface Props {
	children: ReactNode
	buttonText?: string
	title: string
	description: string
}

export default function MoreInfo({
	children,
	buttonText = "Read more",
	title,
	description,
}: Props) {
	const [on, {toggle}] = useToggle()
	return (
		<div className="relative gap-2 rounded-md bg-gray-100 p-1 shadow">
			<InfoIcon />
			<div className="flex flex-col gap-1 border-l-2 border-slate-900 pl-2">
				<strong className="m-0 text-lg font-bold">{title}</strong>
				<p className="m-0">{description}</p>
				<button
					className="mb-2 max-w-max rounded bg-slate-900 py-1 px-2 font-bold text-white hover:opacity-50"
					onClick={toggle}
				>
					{buttonText}
				</button>
				{on && <section>{children}</section>}
			</div>
		</div>
	)
}

function InfoIcon() {
	return (
		<div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 font-bold text-white">
			I
		</div>
	)
}
