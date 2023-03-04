import {Post} from "contentlayer/generated"
import Link from "next/link"
import {ReactNode} from "react"

import {formatDateFns} from "@/lib/data"

interface Props {
	post: Post
}

interface ListItemProps {
	children: ReactNode
}
function ListItem({children}: ListItemProps) {
	return <li className="text-sm sm:text-base">{children}</li>
}

function BlogItem({post}: Props) {
	const {url, about, date, updated, title, tags} = post
	return (
		<li>
			<Link href={url} className="hover:opacity-50">
				<p className="text-xl sm:text-2xl">{title}</p>
			</Link>
			<p className="text-sm sm:text-base">
				{about.length <= 120 ? about : about.slice(0, 120)}...
			</p>
			<div className="flex items-center justify-between">
				<ul className="flex flex-col gap-2">
					<ListItem>
						{date === updated ? null : <span>Created:</span>}
						{formatDateFns(date)}
					</ListItem>
					{date === updated ? null : (
						<ListItem>Updated: {formatDateFns(updated)}</ListItem>
					)}
				</ul>
				<ul className="flex gap-2">
					{tags.map((tag) => (
						<ListItem key={tag}>
							<Link href={`/blog/tags/${tag}`}>
								<span>#{tag}</span>
							</Link>
						</ListItem>
					))}
				</ul>
			</div>
		</li>
	)
}

export default BlogItem
