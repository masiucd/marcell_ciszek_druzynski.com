import {allBites} from "contentlayer/generated";
import {Metadata} from "next/types";

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
	const tags = getBitesByTag(params);
	return <div>Tag</div>;
}
