import Link from "next/link"

export default function MarketingHeader() {
	return (
		<header className="mb-10 bg-white dark:bg-black dark:text-white">
			<div className="mx-auto flex max-w-4xl items-center justify-between py-5 px-2">
				<Link href="/">
					<strong className="border-b-2 border-slate-900 text-xl">M.C.D</strong>
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
	)
}
