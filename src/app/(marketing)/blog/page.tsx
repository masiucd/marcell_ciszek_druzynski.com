import {allPosts, Post} from "contentlayer/generated";
import {compareDesc} from "date-fns";
import type {Metadata} from "next/types";

import {ContentList} from "@/components/common/content_list";
import PageTitle from "@/components/common/page_title";
import {TypographyH1} from "@/components/common/typography";
import {getContentPerMonth, groupContentByMonth} from "@/lib/group_content";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Read my philosophy adn thoughts on software development, design, and more.",
};

async function getPosts() {
	const posts = allPosts.sort((a, b) => {
		return compareDesc(new Date(a.updated), new Date(b.updated));
	});
	const postsPerMonth = getContentPerMonth<Post>(posts);
	const groupedPosts = groupContentByMonth<Post>(postsPerMonth);
	return groupedPosts;
}

async function BlogPage() {
	const posts = await getPosts();
	return (
		<section className="flex max-w-2xl flex-1 flex-col p-1">
			<PageTitle className="p-1">
				<TypographyH1>Blog</TypographyH1>
				<p className="pl-1">
					Here where I write about my thoughts, ideas, and experiences, when it
					comes to programming, and tech.
				</p>
			</PageTitle>
			<ContentList items={posts} />
		</section>
	);
}

export default BlogPage;
