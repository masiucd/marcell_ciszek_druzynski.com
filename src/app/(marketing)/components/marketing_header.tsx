import Link from "next/link"
import {ReactNode} from "react"

import A from "./links/a_link"

function NavListItem({children}: {children: ReactNode}) {
	return <li className="hover:opacity-50">{children}</li>
}

export default function MarketingHeader() {
	return (
		<header className="sticky left-0 top-0 mb-10 bg-white dark:bg-black dark:text-white">
			<div className=" mx-auto flex max-w-4xl items-center justify-between px-2 py-5">
				<Link href="/">
					<strong className="border-b-2 border-slate-900 text-xl hover:opacity-60">
						Marcell.C.D
					</strong>
				</Link>
				<nav className="">
					<ul className="flex gap-3">
						<NavListItem>
							<A href="/blog">Blog</A>
						</NavListItem>
						<NavListItem>
							<A href="/terms">Terms</A>
						</NavListItem>
						<NavListItem>
							<A href="/about">About</A>
						</NavListItem>
					</ul>
				</nav>
			</div>
		</header>
	)
}
