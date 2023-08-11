import {allPosts} from "contentlayer/generated";
import type {Metadata} from "next";
import {notFound} from "next/navigation";

import {PostHeading} from "@/components/common/post_heading";
import Mdx from "@/components/mdx";
import {siteData} from "@/config/site_data";

type Param = {
	slug: string;
};

export async function generateStaticParams() {
	return allPosts.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Param;
}): Promise<Metadata | undefined> {
	const post = allPosts.find((post) => post.slug === params.slug);
	if (!post) {
		return;
	}
	const {title, about, slug, date, tags} = post;
	return {
		title,
		description: about,
		keywords: tags.join(", "),
		openGraph: {
			title,
			description: about,
			type: "article",
			publishedTime: date,
			url: `${siteData.url}/blog/${slug}`,
			images: [
				{
					// url: ogImage,
					url: `${siteData.url}/og.jpg`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description: about,
			// images: [ogImage],
		},
	};
}

function getPost({slug}: {slug: string}) {
	const post = allPosts.find((post) => post.slug === slug);
	if (!post) {
		return null;
	}
	return post;
}

type Props = {
	params: Param;
};

export default async function PostPage({params}: Props) {
	const post = getPost(params);
	if (!post) {
		return notFound();
	}
	return (
		<section className="mb-5">
			<PostHeading
				title={post.title}
				date={post.date}
				updated={post.updated}
				tags={post.tags}
			/>
			<Mdx code={post.body.code} />
		</section>
	);
}
