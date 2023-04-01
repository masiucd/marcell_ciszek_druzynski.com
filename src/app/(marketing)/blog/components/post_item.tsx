import {Post} from "contentlayer/generated"
import Link from "next/link"
import {ReactNode} from "react"

import ReadMoreLink from "@/components/common/read_more_link"
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

function PostItem({post, className}: Props) {
	const {about, title, tags, url} = post

	return (
		<li className={cn("p-1", className)}>
			<div className="flex items-center gap-4">
				<p className="text-xl sm:text-2xl">{title}</p>
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
			<p className="max-w-[20rem] truncate text-sm text-slate-500 sm:text-base">
				{about}
			</p>

			<ReadMoreLink url={url} />
		</li>
	)
}

export default PostItem
