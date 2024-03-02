import {type Metadata} from "next";

export const metadata: Metadata = {
	title: "Blog posts tags",
	description: "Tags that are used in blog posts",
};

function getAllTagsForPosts() {
	const tags = [...new Set(allPosts.flatMap(({tags}) => tags))];
	return tags;
}

function TagsPage() {
	const tags = getAllTagsForPosts();
	return (
		<section>
			<ul>
				{tags.map((tag) => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		</section>
	);
}

export default TagsPage;
