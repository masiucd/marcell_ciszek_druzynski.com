import HighlightWrapper from "@/components/common/highlighter";
import {TypographyH1} from "@/components/common/typography";
import Icons from "@/components/icons";
import {Link} from "@/components/ui/link";

export default async function Home() {
	return (
		<section className="flex flex-1 items-center">
			<div className="flex max-w-md flex-col p-2 shadow-layers-white dark:shadow-layers-black sm:max-w-3xl">
				<TypographyH1 className="font-mono text-4xl italic md:text-6xl">
					Hello world!
				</TypographyH1>
				<p className="text-base md:text-lg ">
					My name is <strong>Marcell Ciszek Druzynski</strong> and I&apos;m a
					software developer from Gotheburg Sweden.
				</p>
				<p className="text-base md:text-lg">
					Here where I write about what is closest to my heart.
				</p>
				<p className="text-base  md:text-lg ">
					topics like <HighlightWrapper>React</HighlightWrapper>,{" "}
					<HighlightWrapper>TypeScript/Javascript</HighlightWrapper> and other
					software development topics.
				</p>
				<aside className="flex items-center gap-5 pt-5">
					<Link variant="fancyHover" href="/blog" className="font-bold">
						Blog
					</Link>
					<Link href="https://twitter.com/masiu_cd" variant="fancyHover">
						<span className="flex gap-3">
							Follow me on <Icons.twitter className="stroke-gray-700" /> &rarr;
						</span>
					</Link>
				</aside>
			</div>
		</section>
	);
}
