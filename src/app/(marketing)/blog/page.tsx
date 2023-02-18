import {allPosts} from "contentlayer/generated"
import {compareDesc, format, parseISO} from "date-fns"
import Link from "next/link"

async function getPosts() {
	const posts = allPosts.sort((a, b) => {
		return compareDesc(new Date(a.date), new Date(b.date))
	})
	return posts
}

async function BlogPage() {
	const posts = await getPosts()
	return (
		<div>
			<ul>
				{posts.map((p) => (
					<li key={p._id}>
						<Link href={p.url}>
							<p>{p.title}</p>
						</Link>
						{/* <p>{format(parseISO(p.date), "MMM dd, yyyy")}</p> */}
						<p>{format(parseISO(p.date), "LLL d, yyyy")}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default BlogPage
