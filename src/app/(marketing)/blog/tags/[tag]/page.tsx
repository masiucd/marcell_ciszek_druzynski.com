import {allPosts} from "contentlayer/generated";
import {notFound} from "next/navigation";
import {Metadata} from "next/types";

import {PostItem} from "@/components/common/content-list";
import HighlightWrapper from "@/components/common/highlighter";
import PageTitle from "@/components/common/page-title";
import {TypographyH1, TypographyH3} from "@/components/common/typography";

type Param = {
	tag: string;
};

export async function generateStaticParams() {
	const tags = allPosts.flatMap((post) => post.tags);
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
	const tag = allPosts.flatMap(({tags}) => tags).find((t) => t === params.tag);

	if (!tag) {
		return;
	}

	return {
		title: `Tag: ${tag}`,
		description: `posts with tag ${tag}`,
		twitter: {
			card: "summary_large_image",
			title: `Tag: ${tag}`,
			description: `posts with tag ${tag}`,
			// images: [ogImage],
		},
	};
}

async function getPostsByTag({tag}: Param) {
	const posts = allPosts.filter((post) => post.tags.includes(tag));
	return posts;
}

type Props = {
	params: Param;
};

async function TagPage({params}: Props) {
	const posts = await getPostsByTag(params);
	if (posts.length === 0) {
		return notFound();
	}
	return (
		<section className="flex max-w-2xl flex-1 flex-col  p-1">
			<PageTitle className="flex flex-col gap-2">
				<TypographyH1 className="text-2xl md:text-5xl ">
					Posts with tag <HighlightWrapper>{params.tag}</HighlightWrapper>
				</TypographyH1>
				<TypographyH3 className="text-xl md:text-3xl">
					Tag: {params.tag} ({posts.length})
				</TypographyH3>
			</PageTitle>
			<ul className="flex flex-col gap-3">
				{posts.map((post) => (
					<PostItem key={post._id} item={post} />
				))}
			</ul>
		</section>
	);
}

export default TagPage;
