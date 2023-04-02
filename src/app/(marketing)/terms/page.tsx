import {allTerms, type Term} from "contentlayer/generated"
import {compareDesc} from "date-fns"
import {Metadata} from "next/types"

import ReadMoreLink from "@/app/(marketing)/components/links/post_link"
import PageTitle from "@/components/common/page_title"

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

async function CommonTermsPage() {
	const terms = await getTerms()
	return (
		<div>
			<PageTitle>
				<h1>Common programming terms</h1>
				<p className="pl-1">
					Here where you can find common terms that are frequently used in the
					dev community.
				</p>
			</PageTitle>
			<ul>
				{terms.map((term) => (
					<TermItem key={term._id} term={term} />
				))}
			</ul>
		</div>
	)
}

export default CommonTermsPage

function TermItem({term}: {term: Term}) {
	const {title, url, about} = term
	return (
		<li className="max-w-xl">
			<p className="text-xl sm:text-2xl">{title}</p>
			<p className="max-w-[30rem] truncate text-sm text-slate-500 sm:text-base">
				{about}
			</p>
			<ReadMoreLink url={url} />
		</li>
	)
}
