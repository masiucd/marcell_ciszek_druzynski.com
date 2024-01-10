import {siteData} from "@/config/site_data";

export default function MarketingFooter() {
	return (
		<footer className="w-full bg-gray-50 px-2  dark:bg-gray-950 dark:text-gray-50">
			<div className="mx-auto flex max-w-4xl items-center justify-between py-2">
				<small>
					Made by Marcell Ciszek Druzynski built with{" "}
					<a
						href="https://nextjs.org/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-500 drop-shadow-lg hover:underline dark:text-gray-400"
					>
						Next-js
					</a>
					, Typeset{" "}
					<span className="text-gray-500 drop-shadow-lg hover:underline dark:text-gray-400">
						{siteData.fontBody}
					</span>
				</small>
			</div>
		</footer>
	);
}
