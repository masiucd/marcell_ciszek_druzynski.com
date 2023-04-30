"use client"

import Link from "next/link"
import {useRouter} from "next/navigation"

const Ctas = () => {
	const router = useRouter()
	return (
		<div>
			<button
				onClick={() => {
					router.back()
				}}
			>
				<span>Previous page</span>
			</button>
			<Link href="/">
				<span>Home</span>
			</Link>
		</div>
	)
}

export default Ctas
