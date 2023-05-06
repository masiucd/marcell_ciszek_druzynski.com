import {allPosts} from "contentlayer/generated";
import {notFound} from "next/navigation";
import {Metadata} from "next/types";

import PageTitle from "@/components/common/page_title";

import BlogItem from "../../components/post_item";

type Param = {
	tag: string
}

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
	params: Param
}): Promise<Metadata | undefined> {
	const tag = allPosts.flatMap((p) => p.tags).find((t) => t === params.tag);

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

interface Props {
	params: Param
}

async function TagPage({params}: Props) {
	const posts = await getPostsByTag(params);
	if (posts.length === 0) {
		return notFound();
	}
	return (
		<section className="flex max-w-2xl flex-1 flex-col  p-1">
			<PageTitle className="flex flex-col gap-2">
				<h1 className="text-2xl md:text-5xl ">
					Posts with tag <span className="font-bold">{params.tag}</span>
				</h1>
				<h3 className="text-xl md:text-3xl">
					Tag: {params.tag} ({posts.length})
				</h3>
			</PageTitle>
			<ul className="flex flex-col gap-8">
				{posts.map((post) => (
					<BlogItem key={post._id} post={post} />
				))}
			</ul>
		</section>
	);
}

export default TagPage;
