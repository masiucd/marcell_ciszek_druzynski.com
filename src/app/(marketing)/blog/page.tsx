import {allPosts} from "contentlayer/generated"
import {compareDesc} from "date-fns"
import type {Metadata} from "next/types"

import PageTitle from "@/components/common/page_title"

import BlogItem from "./components/post_item"

export const metadata: Metadata = {
	title: "Blog",
	description: "Blog posts",
}

async function getPosts() {
	const posts = allPosts.sort((a, b) => {
		return compareDesc(new Date(a.updated), new Date(b.updated))
	})

	return posts
}

async function BlogPage() {
	const posts = await getPosts()
	return (
		<section className="flex max-w-2xl flex-1 flex-col  p-1">
			<PageTitle className="p-1">
				<h1>Blog</h1>
				<p className="pl-1">
					Here where you can find blog posts about programming and tech.
				</p>
			</PageTitle>
			<ul className="flex max-w-xl flex-col gap-3 p-1">
				{posts.map((post) => (
					<BlogItem key={post._id} post={post} />
				))}
			</ul>
		</section>
	)
}

export default BlogPage
