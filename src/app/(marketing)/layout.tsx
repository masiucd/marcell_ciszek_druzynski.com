import Link from "next/link"
import {ReactNode} from "react"

import HighlightWrapper from "@/components/common/highlighter"
import PageWrapper from "@/components/page_wrapper"

interface Props {
	children: ReactNode
}

export default function MarketingLayout({children}: Props) {
	return (
		<>
			{/* TODO make common component */}
			<header className="mb-10 bg-white dark:bg-black dark:text-white">
				<div className="mx-auto flex max-w-4xl items-center justify-between py-5 px-2">
					<Link href="/">
						<strong className="border-b-2 border-slate-900 text-xl">
							M.C.D
						</strong>
					</Link>
					<nav className="">
						<ul className="flex gap-3">
							<li>
								<Link href="/blog">Blog</Link>
							</li>
							<li>
								<Link href="/about">About</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<PageWrapper>{children}</PageWrapper>
			{/* TODO make common component */}
			<footer className="w-full bg-white px-2 dark:bg-black dark:text-white">
				<div className="mx-auto flex max-w-4xl items-center justify-between">
					<small>
						Made by Marcell Ciszek Druzynski built with{" "}
						<HighlightWrapper>Next js</HighlightWrapper>, Typeset{" "}
						<HighlightWrapper>Space mono and Mulish</HighlightWrapper>. Deployed
						on <HighlightWrapper>Vercel</HighlightWrapper>{" "}
					</small>
				</div>
			</footer>
		</>
	)
}
