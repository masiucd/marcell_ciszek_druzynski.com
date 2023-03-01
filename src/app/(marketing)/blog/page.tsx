import {allPosts} from "contentlayer/generated"
import {compareDesc} from "date-fns"
import type {Metadata} from "next/types"

import PageTitle from "@/components/common/page_title"

import BlogItem from "./components/blog_item"

export const metadata: Metadata = {
	title: "Blog",
	description: "Blog posts",
}

async function getPosts() {
	const posts = allPosts.sort((a, b) => {
		return compareDesc(new Date(a.date), new Date(b.date))
	})
	return posts
}

async function BlogPage() {
	const posts = await getPosts()
	return (
		<div className="p-1">
			<PageTitle title="Blog" />
			<ul className="flex max-w-xl flex-col gap-3 p-1">
				{posts.map((post) => (
					<BlogItem key={post._id} post={post} />
				))}
			</ul>
		</div>
	)
}

export default BlogPage
