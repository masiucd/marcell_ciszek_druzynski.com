"use client"
import {ReactNode} from "react"

import {useToggle} from "@/lib/hooks/toggle"

interface Props {
	children: ReactNode
}

// we could make a server component name Content where we could read filed from the file system
// and extra content in the drop down. To prevent to pass in the string in the mdx file as a prpop

export default function DropDown({children}: Props) {
	const [on, {toggle}] = useToggle()
	return (
		// TODO: Add drop down functionality
		<div>
			{on && <div>on</div>}
			<h1>Drop down</h1>
			{children}
			<button
				className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
				onClick={toggle}
			>
				toggle
			</button>
		</div>
	)
}
