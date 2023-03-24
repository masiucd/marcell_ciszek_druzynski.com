import {allTerms} from "contentlayer/generated"
import {compareDesc} from "date-fns"
import {Metadata} from "next/types"

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
					<li key={term._id}>{term.title}</li>
				))}
			</ul>
		</div>
	)
}

export default CommonTermsPage
