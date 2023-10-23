import {allPosts, Post} from "contentlayer/generated";
import {compareDesc, parseISO} from "date-fns";
import {cookies} from "next/headers";
import type {Metadata} from "next/types";

import {ContentList} from "@/components/common/content_list";
import PageTitle from "@/components/common/page_title";
import {Lead, TypographyH1} from "@/components/common/typography";
import {Filter} from "@/components/icons/filter";
import {Button} from "@/components/ui/button";
import {getContentPerMonth, groupContentByMonth} from "@/lib/group_content";
import {cn} from "@/lib/styles";

import {filterTags} from "./actions";
import {AnimatedWrapper} from "./animated-wrapper";
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
			<div className="mb-3 p-1">
				<PageTitle>
					<TypographyH1>Blog</TypographyH1>
					<Lead className="pl-1">
						Here where I write about my thoughts, ideas, and experiences, when
						it comes to programming, and tech.
					</Lead>
				</PageTitle>
				<SearchInput search={search} />
			</div>
			<AnimatedWrapper>
				<form
					action={filterTags}
					className="flex flex-col gap-2 rounded-md px-1 py-2 shadow-md "
				>
					<div className="flex flex-wrap gap-1">
						{tags.map((tag) => (
							<label
								key={tag}
								htmlFor={tag}
								className={cn(
									"inline-block cursor-pointer rounded-md bg-gray-200 px-3 py-1 text-gray-700 hover:opacity-60"
									// storedTags.includes(tag) && "bg-blue-500 text-gray-50 "
								)}
								data-tag-label
							>
								<span className="text-sm font-semibold uppercase ">#{tag}</span>
								<input
									type="checkbox"
									name="tag"
									value={tag}
									id={tag}
									className="sr-only"
									// defaultChecked={storedTags.includes(tag)}
								/>
							</label>
						))}
					</div>
					<div className="flex  ">
						<Button className="flex gap-1">
							<span>
								<Filter width={20} />
							</span>
							<span>Filter</span>
						</Button>
					</div>
				</form>
			</AnimatedWrapper>

			<ContentList items={posts} />
		</section>
	);
}

export default BlogPage;
