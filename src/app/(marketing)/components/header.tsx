import Link from "next/link";

import {HeaderContent} from "./header-content";
import {Nav} from "./nav";

export default function MarketingHeader() {
	return (
		<header className="sticky left-0 top-0 z-10 mb-10 bg-white dark:bg-black dark:text-white">
			<div className="mx-auto flex max-w-4xl items-center justify-between px-2 py-5">
				<Link href="/">
					<strong className="text-xl hover:opacity-60">Marcell.C.D</strong>
				</Link>

				<div className="flex gap-3">
					<HeaderContent />
					<Nav />
				</div>
			</div>
		</header>
	);
}
