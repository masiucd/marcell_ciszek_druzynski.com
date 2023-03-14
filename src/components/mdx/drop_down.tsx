"use client"
import {ReactNode} from "react"

import {useToggle} from "@/lib/hooks/toggle"

interface Props {
	children: ReactNode
	buttonText?: string
}

// we could make a server component name Content where we could read filed from the file system
// and extra content in the drop down. To prevent to pass in the string in the mdx file as a prpop

export default function DropDown({children, buttonText = "More info"}: Props) {
	const [on, {toggle}] = useToggle()
	return (
		<div>
			<button
				className="mb-2 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
				onClick={toggle}
			>
				{buttonText}
			</button>
			{on && (
				<section className="rounded-md bg-gray-900 py-1 px-2 text-white shadow">
					{children}
				</section>
			)}
		</div>
	)
}
