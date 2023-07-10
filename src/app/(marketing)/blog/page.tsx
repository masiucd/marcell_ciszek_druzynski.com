import {allPosts, Post} from "contentlayer/generated";
import {compareDesc, format, parseISO} from "date-fns";
import type {Metadata} from "next/types";

import PageTitle from "@/components/common/page_title";
import {TypographyH1} from "@/components/common/typography";
import {getContentPerMonth, groupContentByMonth} from "@/lib/group_content";

import BlogItem from "./components/post_item";

export const metadata: Metadata = {
	title: "Blog",
	description: "Blog posts",
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
			<ul className="flex max-w-xl flex-col gap-3 space-y-5 p-1">
				{posts.map((post) => (
					<li key={post.monthString}>
						<p className="text-2xl font-bold text-gray-500 dark:text-gray-400">
							Posts from {format(parseISO(post.monthString), "MMM, yy")}{" "}
						</p>
						<ul className="ml-5">
							{post.content.map((post) => (
								<BlogItem key={post._id} post={post} />
							))}
						</ul>
					</li>
				))}
			</ul>
		</section>
	);
}

export default BlogPage;
