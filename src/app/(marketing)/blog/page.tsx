// import {compareDesc, parseISO} from "date-fns";
// import {cookies} from "next/headers";
import type {Metadata} from "next/types";

// import {ContentList} from "@/components/common/content-list";
import PageTitle from "@/components/common/page-title";
import {Lead, TypographyH1} from "@/components/common/typography";
import {Link} from "@/components/ui/link";
import {getPostsData} from "@/lib/content";

// import {getContentPerMonth, groupContentByMonth} from "@/lib/group_content";
// import {AnimatedWrapper} from "./animated-wrapper";
import {SearchInput} from "./search-input";
// import {TagsFilter} from "./tags-filter";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Read my philosophy adn thoughts on software development, design, and more.",
};

// function getStoredTags() {
// 	let cookiesStore = cookies();
// 	let storedTags = cookiesStore.get("storedTags");
// 	try {
// 		let tags = storedTags ? JSON.parse(storedTags.value) : [];
// 		return tags;
// 	} catch (error) {
// 		// eslint-disable-next-line no-console
// 		console.error(error);
// 		return [];
// 	}
// }

// TODO possibility to show latest updates

function getSearchTerm(
	searchParams: Record<string, string | string[] | undefined>,
) {
	return typeof searchParams.search === "string"
		? searchParams["search"]
		: undefined;
}

async function BlogPage({
	searchParams,
}: {
	searchParams: Record<string, string | string[] | undefined>;
}) {
	let search = getSearchTerm(searchParams);
	// let posts = search ? getPostsBySearch(search) : getPosts(storedTags);
	// let tags = getPostTags();
	let posts = getPostsData();
	console.log("🚀 ~ posts:", posts);
	return (
		<section className="flex max-w-2xl flex-1 flex-col pb-5 pt-1">
			<div className="mb-1 p-1">
				<PageTitle>
					<TypographyH1>Blog</TypographyH1>
					<Lead className="text-balance pl-1 text-base">
						Here where I write about my thoughts, ideas, and experiences, when
						it comes to programming, and tech.
					</Lead>
				</PageTitle>
				<SearchInput search={search} />
			</div>

			<ul>
				{posts.map((post) => (
					<li key={post.date} className="">
						<Link href={`/blog/${post.slug}`}>{post.title}</Link>
					</li>
				))}
			</ul>

			{/* <AnimatedWrapper selected={storedTags.length > 0}> */}
			{/* <TagsFilter tags={tags} storedTags={storedTags} /> */}
			{/* </AnimatedWrapper> */}
			{/* <ContentList items={posts} /> */}
		</section>
	);
}

export default BlogPage;
