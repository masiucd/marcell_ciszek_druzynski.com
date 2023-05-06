import {allBites} from "contentlayer/generated"
import {Metadata} from "next/types"

export const metadata: Metadata = {
	title: "Bite posts tags",
	description: "Tags that are used in bite posts",
}

function getAllTagsForBites() {
	const tags = [...new Set(allBites.flatMap(({tags}) => tags))]
	return tags
}

function TagsPage() {
	const tags = getAllTagsForBites()
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
