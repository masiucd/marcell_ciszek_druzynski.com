import {Bite} from "contentlayer/generated";

import ReadMoreLink from "@/app/(marketing)/components/links/post_link";
import ListItem from "@/components/common/list_item";
import TagItem from "@/components/common/tag_item";

type TermItemProps = {
	bite: Bite;
};

function BiteItem({bite}: TermItemProps) {
	const {title, url, about, tags} = bite;
	return (
		<li className="max-w-xl">
			<div className="flex gap-3">
				<p className="text-xl sm:text-2xl">{title}</p>
				<ul className="flex items-center gap-3">
					{tags.map((tag) => (
						<ListItem key={tag}>
							<TagItem href={`/bites/tags/${tag}`} tag={tag} />
						</ListItem>
					))}
				</ul>
			</div>
			<p className="max-w-[30rem] truncate text-sm text-gray-500 sm:text-base">
				{about}
			</p>
			<ReadMoreLink arrow="right" url={url} />
		</li>
	);
}

export {BiteItem};
