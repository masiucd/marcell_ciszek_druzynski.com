"use client"

import {useRouter} from "next/navigation"

import LinkContent from "@/app/(marketing)/components/links/link_content"

import Button from "../common/buttons"
import {RegularLink} from "../common/page_link"

const Ctas = () => {
	const router = useRouter()
	return (
		<div className="flex gap-5">
			<Button
				className="flex w-20 justify-end p-0"
				buttonType="link"
				onClick={() => {
					router.back()
				}}
			>
				{/* <span>Previous</span> */}
				<LinkContent
					title="Prev"
					arrow="left"
					className="text-slate-500  hover:text-blue-500 dark:text-slate-100 dark:hover:text-blue-500"
				/>
			</Button>
			<RegularLink href="/">
				<span>Home</span>
			</RegularLink>
		</div>
	)
}

export default Ctas
