import {allPosts, Post} from "contentlayer/generated";
import {compareDesc, parseISO} from "date-fns";
import type {Metadata} from "next/types";

import {ContentList} from "@/components/common/content_list";
import PageTitle from "@/components/common/page_title";
import {Lead, TypographyH1} from "@/components/common/typography";
import {getContentPerMonth, groupContentByMonth} from "@/lib/group_content";

import {SearchInput} from "./search-input";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Read my philosophy adn thoughts on software development, design, and more.",
};

function getGroupedPosts(posts: Post[]) {
	let postsPerMonth = getContentPerMonth<Post>(posts);
	let groupedPosts = groupContentByMonth<Post>(postsPerMonth);
	return groupedPosts;
}

function getPosts() {
	let posts = allPosts.sort((a, b) => {
		return compareDesc(parseISO(a.date), parseISO(b.date));
	});
	return getGroupedPosts(posts);
}

function getPostsBySearch(search: string) {
	let posts = allPosts
		.filter((post) => {
			return post.title.toLowerCase().includes(search.toLowerCase());
		})
		.sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)));
	return getGroupedPosts(posts);
}

// TODO possibility to show latest updates

function getSearchTerm(
	searchParams: Record<string, string | string[] | undefined>
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
	let posts = search ? getPostsBySearch(search) : getPosts();
	return (
		<section className="flex max-w-2xl flex-1 flex-col p-1">
			<div className="mb-3 p-1">
				<PageTitle>
					<TypographyH1>Blog</TypographyH1>
					<Lead className="pl-1">
						Here where I write about my thoughts, ideas, and experiences, when
						it comes to programming, and tech.
					</Lead>
				</PageTitle>
				<SearchInput search={search} />
				{/* TODO add filter section */}
			</div>

			<ContentList items={posts} />
		</section>
	);
}

export default BlogPage;
