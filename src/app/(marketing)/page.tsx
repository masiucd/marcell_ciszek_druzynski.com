import {TypographyH1} from "@/components/common/typography";
import {Link} from "@/components/ui/link";

import {TypeItTitle} from "./components/type-it-title";

export default async function Home() {
	return (
		<section className="flex flex-1 items-center">
			<div className="flex max-w-md flex-col gap-1 text-balance p-2 shadow-layers-white sm:max-w-3xl dark:shadow-layers-black">
				<TypographyH1 className="font-mono text-4xl italic md:text-6xl">
					<TypeItTitle />
				</TypographyH1>
				<p className="text-base md:text-lg">
					My name is{" "}
					<strong>
						<span className="text-primary-950 dark:text-primary-50">
							Marcell
						</span>{" "}
						<span className="text-primary-900 dark:text-primary-100">
							Ciszek
						</span>{" "}
						<span className="text-primary-800 dark:text-primary-200">
							Druzynski
						</span>
					</strong>{" "}
					and I&apos;m a software developer from Gotheburg Sweden.
				</p>
				<p className="text-base md:text-lg">
					Here where I write about what is closest to my heart.
				</p>
				<p className="text-base  md:text-lg ">
					topics like{" "}
					<span className="underline decoration-primary-500 underline-offset-2 dark:decoration-primary-400">
						React
					</span>
					,{" "}
					<span className="underline decoration-primary-500 underline-offset-2 dark:decoration-primary-400">
						TypeScript/Javascript
					</span>{" "}
					and other software development topics.
				</p>
				<aside className="flex items-center gap-5 pt-5">
					<Link variant="fancyHover" href="/blog" className="font-bold">
						Blog
					</Link>
					<Link variant="fancyHover" href="/about" className="font-bold">
						About
					</Link>
				</aside>
			</div>
		</section>
	);
}
