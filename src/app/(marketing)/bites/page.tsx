import {allBites, type Bite} from "contentlayer/generated";
import {compareDesc} from "date-fns";
import {Metadata} from "next/types";

import ReadMoreLink from "@/app/(marketing)/components/links/post_link";
import ListItem from "@/components/common/list_item";
import PageTitle from "@/components/common/page_title";
import TagItem from "@/components/common/tag_item";
import {TypographyH1} from "@/components/common/typography";

export const metadata: Metadata = {
	title: "Bites",
	description: "Common bites that are frequently used in the dev community",
};

async function getBites() {
	const posts = allBites.sort((a, b) => {
		return compareDesc(new Date(a.date), new Date(b.date));
	});

	return posts;
}

interface TermItemProps {
	bite: Bite;
}
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

async function CommonTermsPage() {
	const bites = await getBites();
	return (
		<section className="flex max-w-2xl flex-1 flex-col p-1">
			<PageTitle>
				<TypographyH1>Bites</TypographyH1>
				<p className="pl-1">
					Common bites that are frequently used in the dev community
				</p>
			</PageTitle>

			<ul className="flex flex-col gap-5">
				{bites.map((bite) => (
					<BiteItem key={bite._id} bite={bite} />
				))}
			</ul>
		</section>
	);
}

export default CommonTermsPage;
