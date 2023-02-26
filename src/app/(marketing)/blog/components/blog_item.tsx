import {Post} from "contentlayer/generated"
import {format, parseISO} from "date-fns"
import Link from "next/link"

interface Props {
	post: Post
}

function BlogItem({post}: Props) {
	const {url, about, date, updated, title, tags} = post
	return (
		<li>
			<Link href={url} className="hover:opacity-50">
				<p className="text-2xl">{title}</p>
			</Link>
			<p>{about.length <= 120 ? about : about.slice(0, 120)}...</p>
			<div className="flex items-center justify-between">
				<ul className="flex flex-col gap-2">
					<li>
						{date === updated ? null : <span>Created:</span>}
						{format(parseISO(date), "LLL d, yyyy")}
					</li>
					{date === updated ? null : (
						<li>Updated: {format(parseISO(updated), "LLL d, yyyy")}</li>
					)}
				</ul>
				<ul className="flex gap-2">
					{tags.map((tag) => (
						<li key={tag}>
							<Link href={`/blog/tags/${tag}`}>
								<span>#{tag}</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</li>
	)
}

export default BlogItem
