import {allPosts, Post} from "contentlayer/generated"
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
		<div className="border-4 border-red-500">
			<ul>
				{posts.map((post) => (
					<BlogItem key={post._id} post={post} />
				))}
			</ul>
		</div>
	)
}

export default BlogPage

interface BlogItemProps {
	post: Post
}

function BlogItem({post}: BlogItemProps) {
	const {url, about, date, updated, title} = post
	return (
		<li>
			<Link href={url}>
				<p>{title}</p>
			</Link>
			<p>{about}</p>
			{/* <p>{format(parseISO(date), "MMM dd, yyyy")}</p> */}
			<p>{format(parseISO(date), "LLL d, yyyy")}</p>
			<p>{format(parseISO(updated), "LLL d, yyyy")}</p>
		</li>
	)
}
