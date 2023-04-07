import {Post} from "contentlayer/generated"

import ReadMoreLink from "@/app/(marketing)/components/links/post_link"
import ListItem from "@/components/common/list_item"
import TagItem from "@/components/common/tag_item"
import {cn} from "@/lib/styles"

interface Props {
	post: Post
	className?: string
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
							<TagItem href={`/blog/tags/${tag}`} tag={tag} />
						</ListItem>
					))}
				</ul>
			</div>
			<p className="max-w-[20rem] truncate text-sm text-slate-500 sm:text-base">
				{about}
			</p>
			<ReadMoreLink arrow="right" url={url} />
		</li>
	)
}

export default PostItem
