import {format, parseISO} from "date-fns";

import ReadMoreLink from "@/app/(marketing)/components/links/post_link";
import {cn} from "@/lib/styles";

import ListItem from "./list-item";
import TagItem from "./tag-item";
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
		<ul className="relative flex max-w-xl flex-col gap-5  pl-4 ">
			{items.map((item) => (
				<li
					key={item.monthString}
					className="relative flex flex-col pl-2 after:absolute after:left-[-4.3px] after:top-5 after:h-full after:w-[3px] after:bg-primary-400/35 after:content-['']"
				>
					<Circle />
					<strong className="mb-2 pt-[2.5px] text-xs font-semibold uppercase tracking-wide text-primary-400">
						{format(parseISO(item.monthString), "MMMM  yyyy")}
					</strong>
					<ul className="">
						{item.content.map((item) => (
							<PostItem key={item._id} item={item} />
						))}
					</ul>
				</li>
			))}
		</ul>
	);
}

type ItemProps = {
	item: Post | Bite;
	className?: string;
};

export function PostItem({item, className}: ItemProps) {
	const {about, title, tags, url} = item;
	return (
		<li className={cn("p-1", className)}>
			<div className="mb-2 flex gap-2">
				<p className=" font-semibold text-gray-600 dark:text-gray-100">
					{title}
				</p>
				<ul className="flex gap-2 pt-[2px]">
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
			<p className="max-w-[20rem] truncate text-sm text-gray-500  dark:text-gray-300">
				{about}
			</p>
			<ReadMoreLink arrow="right" url={url} />
		</li>
	);
}

function Circle() {
	return (
		<div className="absolute left-[-9px] top-0 bg-transparent py-1 ">
			<div className="h-3 w-3 rounded-full border border-primary-400 bg-gray-200 dark:bg-gray-900" />
		</div>
	);
}
