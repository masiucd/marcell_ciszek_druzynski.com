import {allPosts} from "contentlayer/generated"
import Link from "next/link"

import {formatDateFns} from "@/lib/data"

type Params = {
	tag: string
}
async function getPostsByTag({tag}: Params) {
	const posts = allPosts
		.filter((post) => post.tags.includes(tag))
		.map(({title, about, date, updated, tags, url}) => ({
			title,
			about,
			date,
			updated,
			tags,
			url,
		}))
	return posts
}

interface Props {
	params: Params
}

async function TagPage({params}: Props) {
	const posts = await getPostsByTag(params)

	return (
		<ul>
			{posts.map((post) => (
				<li key={post.title}>
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
					<p>{post.tags}</p>
				</li>
			))}
		</ul>
	)
}

export default TagPage
