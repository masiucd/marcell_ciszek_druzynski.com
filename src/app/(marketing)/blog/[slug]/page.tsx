import {allPosts} from "contentlayer/generated"
import type {Metadata} from "next"
import {notFound} from "next/navigation"

import PageTitle from "@/components/common/page_title"
import Mdx from "@/components/mdx"
import {formatDateFns} from "@/lib/data"

import ListItem from "../components/list_item"
import TagItem from "../components/tag_item"

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
		return notFound()
	}
	return (
		<section>
			{/* TODO display created and updated */}
			<PageTitle>
				<h1>{post.title}</h1>
				<div className="flex gap-5">
					<PostDates created={post.date} updated={post.updated} />
					<ul className="flex gap-2">
						{post.tags.map((tag) => (
							<ListItem key={tag}>
								<TagItem tag={tag} />
							</ListItem>
						))}
					</ul>
				</div>
			</PageTitle>
			<Mdx code={post.body.code} />
		</section>
	)
}

interface PostDatePropss {
	created: string
	updated: string
}
function PostDates({created, updated}: PostDatePropss) {
	if (created === updated) {
		return <time dateTime={created}>{formatDateFns(created)} </time>
	}
	return (
		<p>
			Created on <time dateTime={created}>{formatDateFns(created)} </time> and
			updated on <time dateTime={updated}>{formatDateFns(updated)} </time>
		</p>
	)
}
