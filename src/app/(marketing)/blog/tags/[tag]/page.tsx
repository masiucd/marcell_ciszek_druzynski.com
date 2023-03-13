import {allPosts} from "contentlayer/generated"
import Link from "next/link"
import {notFound} from "next/navigation"
import {Metadata} from "next/types"

import {formatDateFns} from "@/lib/data"

type Param = {
	tag: string
}

export async function generateStaticParams() {
	const tags = allPosts.flatMap((post) => post.tags)
	const uniqueTags = [...new Set(tags)]
	return uniqueTags.map((tag) => ({
		tag,
	}))
}

export async function generateMetadata({
	params,
}: {
	params: Param
}): Promise<Metadata | undefined> {
	const tag = allPosts.flatMap((p) => p.tags).find((t) => t === params.tag)

	if (!tag) {
		return
	}

	return {
		title: `Tag: ${tag}`,
		description: `posts with tag ${tag}`,
		twitter: {
			card: "summary_large_image",
			title: `Tag: ${tag}`,
			description: `posts with tag ${tag}`,
			// images: [ogImage],
		},
	}
}

async function getPostsByTag({tag}: Param) {
	const posts = allPosts
		.filter((post) => post.tags.includes(tag))
		.map(({title, about, date, updated, tags, url, _id}) => ({
			title,
			about,
			date,
			updated,
			tags,
			url,
			id: _id,
		}))
	return posts
}

interface Props {
	params: Param
}

async function TagPage({params}: Props) {
	const posts = await getPostsByTag(params)
	if (posts.length === 0) {
		return notFound()
	}
	return (
		<ul className="flex flex-col gap-8">
			{posts.map((post) => (
				<li key={post.id}>
					<Link href={post.url}>
						<h1>{post.title}</h1>
					</Link>
					<p>{post.about}</p>
					{post.date === post.updated ? (
						<p>{formatDateFns(post.date)}</p>
					) : (
						<>
							<p>{formatDateFns(post.date)}</p>
							<p>{formatDateFns(post.updated)}</p>
						</>
					)}
					<ul className="flex gap-5">
						{post.tags.map((tag) => (
							<li key={tag}>
								<Link href={`/blog/tags/${tag}`}>
									<span>#{tag}</span>
								</Link>
							</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	)
}

export default TagPage
