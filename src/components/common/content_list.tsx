import {format, parseISO} from "date-fns";

import ReadMoreLink from "@/app/(marketing)/components/links/post_link";
import {cn} from "@/lib/styles";

import ListItem from "./list_item";
import TagItem from "./tag_item";
import {Bite, Post} from ".contentlayer/generated/types";

type ContentListProps = {
	items: {
		monthString: string;
		content: Bite[] | Post[];
	}[];
	className?: string;
};

export function ContentList({items}: ContentListProps) {
	return (
		<ul className="flex max-w-xl flex-col gap-5 space-y-5 p-1">
			{items.map((item) => (
				<li key={item.monthString} className="flex flex-col pl-1">
					<p className="m-0 text-xl font-bold leading-7 tracking-tighter text-gray-500 dark:text-gray-400">
						{format(parseISO(item.monthString), "MMMM yyyy")}
					</p>
					<ul className="ml-3">
						{item.content.map((item) => (
							<PostItem key={item._id} item={item} />
						))}
					</ul>
				</li>
			))}
		</ul>
	);
}

interface ItemProps {
	item: Post | Bite;
	className?: string;
}

export function PostItem({item, className}: ItemProps) {
	const {about, title, tags, url} = item;
	return (
		<li className={cn("p-1", className)}>
			<div className="flex items-center gap-4">
				<p className="text-xl">{title}</p>
				<ul className="flex gap-2">
					{tags.map((tag) => (
						<ListItem key={tag}>
							<TagItem
								href={
									item.type === "Post"
										? `/blog/tags/${tag}`
										: `/bites/tags/${tag}`
								}
								tag={tag}
							/>
						</ListItem>
					))}
				</ul>
			</div>
			<p className="max-w-[20rem] truncate text-sm text-gray-500 dark:text-gray-300 sm:text-base">
				{about}
			</p>
			<ReadMoreLink arrow="right" url={url} />
		</li>
	);
}
