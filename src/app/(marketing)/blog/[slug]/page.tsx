import {allPosts} from "contentlayer/generated"

import Mdx from "@/components/mdx"

export async function generateStaticParams() {
	return allPosts.map((post) => ({
		slug: post.slug,
	}))
}

function getPost({slug}: {slug: string}) {
	const post = allPosts.find((post) => post.slug === slug)
	if (!post) {
		return null
	}
	return post
}

interface Props {
	params: {
		slug: string
	}
}

export default async function PostPage({params}: Props) {
	const post = getPost(params)
	if (post === null) {
		return <div>Not found</div>
	}
	return (
		<section className="prose mx-auto max-w-sm px-4 sm:max-w-2xl sm:px-1 ">
			<h1>{post.title}</h1>
			<Mdx code={post.body.code} />
		</section>
	)
}
