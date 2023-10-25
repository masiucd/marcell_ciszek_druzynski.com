import {allPosts, Post} from "contentlayer/generated";
import {compareDesc, parseISO} from "date-fns";
import {cookies} from "next/headers";
import type {Metadata} from "next/types";

import {ContentList} from "@/components/common/content_list";
import PageTitle from "@/components/common/page_title";
import {Lead, TypographyH1} from "@/components/common/typography";
import {getContentPerMonth, groupContentByMonth} from "@/lib/group_content";

import {AnimatedWrapper} from "./animated-wrapper";
import {SearchInput} from "./search-input";
import {TagsForm} from "./tags-form";

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

function getStoredTags() {
	let cookiesStore = cookies();
	let storedTags = cookiesStore.get("storedTags");
	try {
		let tags = storedTags ? JSON.parse(storedTags.value) : [];
		return tags;
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log(error);
		return [];
	}
}

function getPosts(storedTags: string[]) {
	let posts = allPosts
		.sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)))
		.filter((post) =>
			storedTags.length > 0
				? post.tags.some((tag) => storedTags.includes(tag))
				: true
		);
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

function getPostTags() {
	let tags = allPosts.flatMap(({tags}) => tags);
	return [...new Set(tags)];
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
	let storedTags = getStoredTags();
	let search = getSearchTerm(searchParams);
	let posts = search ? getPostsBySearch(search) : getPosts(storedTags);
	let tags = getPostTags();
	return (
		<section className="flex max-w-2xl flex-1 flex-col p-1">
			<div className="mb-1 p-1">
				<PageTitle>
					<TypographyH1>Blog</TypographyH1>
					<Lead className="pl-1">
						Here where I write about my thoughts, ideas, and experiences, when
						it comes to programming, and tech.
					</Lead>
				</PageTitle>
				<SearchInput search={search} />
			</div>
			<AnimatedWrapper selected={storedTags.length > 0}>
				<TagsForm tags={tags} storedTags={storedTags} />
			</AnimatedWrapper>
			<ContentList items={posts} />
		</section>
	);
}

export default BlogPage;
