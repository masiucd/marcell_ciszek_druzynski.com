import {allTerms} from "contentlayer/generated"
import {Metadata} from "next/types"

export const metadata: Metadata = {
	title: "Term posts tags",
	description: "Tags that are used in term posts",
}

function getAllTagsForTerms() {
	const tags = [...new Set(allTerms.flatMap(({tags}) => tags))]
	return tags
}

function TagsPage() {
	const tags = getAllTagsForTerms()
	return (
		<section>
			<ul>
				{tags.map((tag) => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		</section>
	)
}

export default TagsPage
