import {unstable_ViewTransition as ViewTransition} from "react";

import {Link} from "@/components/link";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<header>
				<div className="h-[5rem]">header</div>
			</header>
			<main className="flex min-h-[calc(100dvh-10rem)] flex-col border border-blue-500">
				<ViewTransition>{children}</ViewTransition>
			</main>
			<footer>
				<div className="mx-auto flex h-[5rem] max-w-6xl items-center border border-red-500">
					<ul className="mx-auto flex max-w-xl justify-center gap-5 rounded p-2 capitalize shadow">
						{/* TODO start with a few of the links then add more in the feature */}
						<li>
							<Link href="/">home</Link>
						</li>
						<li>
							<Link href="/blog">blog</Link>
						</li>
						<li>
							<Link href="/about">about</Link>
						</li>
						<li>
							<Link href="/stack">stack</Link>
						</li>
						<li>
							<Link href="/readings">readings</Link>
						</li>
						<li>
							<Link href="/contact">contact</Link>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
}
