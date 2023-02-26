import HighlightWrapper from "@/components/common/highlighter"
import PageLink from "@/components/common/page_link"
import Icons from "@/components/icons"

export default async function Home() {
	return (
		<div className="flex flex-1 items-center">
			<div className="flex max-w-md flex-col p-2 shadow-layers-white sm:max-w-3xl">
				<h1 className="text-4xl md:text-6xl">Hi and welcome!</h1>
				<p className="text-base  md:text-lg ">
					My name is <strong>Marcell Ciszek Druzynski</strong> and I&apos;m a
					software developer from Gotheburg Sweden.
				</p>
				<p className="text-base  md:text-lg ">
					Here where I write about what is closest to my heart.
				</p>
				<p className="text-base  md:text-lg ">
					topics like <HighlightWrapper>React</HighlightWrapper>,{" "}
					<HighlightWrapper>TypeScript/Javascript</HighlightWrapper> and other
					software development topics.
				</p>
				<aside className="flex items-center gap-5 pt-5">
					<PageLink href="/blog">Blog</PageLink>
					<PageLink href="https://twitter.com/masiu_cd">
						<span className="flex gap-3">
							Follow me on <Icons.twitter className="stroke-slate-700" /> &rarr;
						</span>
					</PageLink>
				</aside>
			</div>
		</div>
	)
}
