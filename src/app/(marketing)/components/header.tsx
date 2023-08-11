import {Link} from "@/components/ui/link";

import {HeaderContent} from "./header-content";

export default function MarketingHeader() {
	return (
		<header className="sticky left-0 top-0 z-10 mb-10 bg-white dark:bg-black dark:text-white">
			<div className="mx-auto flex max-w-4xl items-center justify-between px-2 py-5">
				<Link href="/" variant="subtile">
					<strong className="text-xl hover:opacity-60">
						<span className="text-gray-900 dark:text-primary-100 ">
							Marcell.C.D
						</span>
					</strong>
				</Link>
				<HeaderContent />
			</div>
		</header>
	);
}
