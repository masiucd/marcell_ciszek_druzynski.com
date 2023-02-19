import HighlightWrapper from "@/components/common/highlighter"
import PageLink from "@/components/common/page_link"
import Icons from "@/components/icons"

export default async function Home() {
	return (
		<div className="flex flex-1 items-center">
			<div className="flex flex-col p-3 shadow-10xl">
				<h1>Hi and welcome!</h1>
				<p>
					My name is <strong>Marcell Ciszek Druzynski</strong> and I&apos;m a
					software developer from Gotheburg Sweden.
				</p>
				<p>Here where I write about what is closest to my heart in tech.</p>
				<p>
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
