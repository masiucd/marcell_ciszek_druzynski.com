import {allBites} from "contentlayer/generated";
import {notFound} from "next/navigation";
import {Metadata} from "next/types";

import {PostItem} from "@/components/common/content_list";
import HighlightWrapper from "@/components/common/highlighter";
import PageTitle from "@/components/common/page_title";
import {TypographyH1, TypographyH3} from "@/components/common/typography";
import PageWrapper from "@/components/page_wrapper";

type Param = {
	tag: string;
};

export async function generateStaticParams() {
	const tags = allBites.flatMap(({tags}) => tags);
	const uniqueTags = [...new Set(tags)];
	return uniqueTags.map((tag) => ({
		tag,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Param;
}): Promise<Metadata | undefined> {
	const tag = allBites.flatMap(({tags}) => tags).find((t) => t === params.tag);

	if (!tag) {
		return;
	}

	return {
		title: `Tag: ${tag}`,
		description: `Bites with tag ${tag}`,
		twitter: {
			card: "summary_large_image",
			title: `Tag: ${tag}`,
			description: `bites with tag ${tag}`,
			// images: [ogImage],
		},
	};
}

function getBitesByTag({tag}: Param) {
	return allBites.filter(({tags}) => tags.includes(tag));
}

type Props = {
	params: Param;
};

export default function Tag({params}: Props) {
	const bites = getBitesByTag(params);
	if (bites.length === 0) {
		return notFound();
	}
	return (
		<PageWrapper>
			<PageTitle>
				<TypographyH1>
					Bites with tag{" "}
					<HighlightWrapper className="uppercase">
						{params.tag}
					</HighlightWrapper>
				</TypographyH1>
				<TypographyH3 className="text-xl md:text-3xl">
					Tag: {params.tag} ({bites.length})
				</TypographyH3>
			</PageTitle>
			<ul className="flex flex-col gap-3">
				{bites.map((bite) => (
					<PostItem key={bite._id} item={bite} />
				))}
			</ul>
		</PageWrapper>
	);
}
