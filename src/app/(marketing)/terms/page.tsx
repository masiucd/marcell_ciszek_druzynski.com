import {allTerms, type Term} from "contentlayer/generated"
import {compareDesc} from "date-fns"
import {Metadata} from "next/types"

import ReadMoreLink from "@/app/(marketing)/components/links/post_link"
import ListItem from "@/components/common/list_item"
import PageTitle from "@/components/common/page_title"
import TagItem from "@/components/common/tag_item"

export const metadata: Metadata = {
	title: "Terms",
	description: "Programming Terms",
}

async function getTerms() {
	const posts = allTerms.sort((a, b) => {
		return compareDesc(new Date(a.date), new Date(b.date))
	})

	return posts
}

function TermItem({term}: {term: Term}) {
	const {title, url, about, tags} = term
	return (
		<li className="max-w-xl">
			<div className="flex gap-3">
				<p className="text-xl sm:text-2xl">{title}</p>
				<ul className="flex items-center gap-3">
					{tags.map((tag) => (
						<ListItem key={tag}>
							<TagItem href={`/terms/tags/${tag}`} tag={tag} />
						</ListItem>
					))}
				</ul>
			</div>
			<p className="max-w-[30rem] truncate text-sm text-slate-500 sm:text-base">
				{about}
			</p>
			<ReadMoreLink arrow="right" url={url} />
		</li>
	)
}

async function CommonTermsPage() {
	const terms = await getTerms()
	return (
		<section className="flex max-w-2xl flex-1 flex-col p-1">
			<PageTitle>
				<h1>Programming terms</h1>
				<p className="pl-1">
					Here where you can find common terms that are frequently used in the
					dev community.
				</p>
			</PageTitle>

			<ul className="flex flex-col gap-5">
				{terms.map((term) => (
					<TermItem key={term._id} term={term} />
				))}
			</ul>
		</section>
	)
}

export default CommonTermsPage
