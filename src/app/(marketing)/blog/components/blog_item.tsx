import {Post} from "contentlayer/generated"
import Link from "next/link"
import {ReactNode} from "react"

import {formatDateFns} from "@/lib/data"
import {cn} from "@/lib/styles"

// make about optional
// type PostOptionalAbout = Omit<Post, "about"> & {about?: string}

interface Props {
	post: Post
	className?: string
}

interface ListItemProps {
	children: ReactNode
}
function ListItem({children}: ListItemProps) {
	return <li className="text-sm sm:text-base">{children}</li>
}

function BlogItem({post, className}: Props) {
	const {about, date, updated, title, tags, url} = post

	return (
		<li className={cn("p-1", className)}>
			<Link href={url} className="hover:opacity-50">
				<p className="text-xl sm:text-2xl">{title}</p>
			</Link>
			<p className="max-w-[20rem] truncate text-sm sm:text-base">{about}</p>
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
								<span className="hover:opacity-50">#{tag}</span>
							</Link>
						</ListItem>
					))}
				</ul>
			</div>
		</li>
	)
}

export default BlogItem
