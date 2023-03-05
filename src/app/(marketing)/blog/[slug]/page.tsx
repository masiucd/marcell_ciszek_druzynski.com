import {allPosts} from "contentlayer/generated"
import type {Metadata} from "next"

import PageTitle from "@/components/common/page_title"
import Mdx from "@/components/mdx"

type Param = {
	slug: string
}

export async function generateStaticParams() {
	return allPosts.map((post) => ({
		slug: post.slug,
	}))
}

export async function generateMetadata({
	params,
}: {
	params: Param
}): Promise<Metadata | undefined> {
	const post = allPosts.find((post) => post.slug === params.slug)
	if (!post) {
		return
	}

	const {title, about, slug, date} = post

	return {
		title,
		description: about,
		openGraph: {
			title,
			description: about,
			type: "article",
			publishedTime: date,
			url: `https://marcell-ciszek-druzynski-com-7yr3.vercel.app/blog/${slug}`,
			// images: [
			// 	{
			// 		url: ogImage,
			// 	},
			// ],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description: about,
			// images: [ogImage],
		},
	}
}

function getPost({slug}: {slug: string}) {
	const post = allPosts.find((post) => post.slug === slug)
	if (!post) {
		return null
	}
	return post
}

interface Props {
	params: Param
}

export default async function PostPage({params}: Props) {
	const post = getPost(params)
	if (!post) {
		return <div>Not found</div>
	}
	return (
		<section>
			<PageTitle title={post.title} />
			<Mdx code={post.body.code} />
		</section>
	)
}
