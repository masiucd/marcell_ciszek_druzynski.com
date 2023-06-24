import {allPosts} from "contentlayer/generated";
import type {Metadata} from "next";
import {notFound} from "next/navigation";

import Dates from "@/components/common/dates";
import ListItem from "@/components/common/list_item";
import PageTitle from "@/components/common/page_title";
import TagItem from "@/components/common/tag_item";
import {TypographyH1} from "@/components/common/typography";
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
	const {title, about, slug, date} = post;
	return {
		title,
		description: about,
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

interface Props {
	params: Param;
}

export default async function PostPage({params}: Props) {
	const post = getPost(params);
	if (!post) {
		return notFound();
	}
	return (
		<section className="mb-5">
			<PageTitle className="mx-auto flex max-w-2xl flex-col gap-2 px-5 ">
				<TypographyH1 className="border-b-2 border-gray-900 text-5xl font-bold ">
					{post.title}
				</TypographyH1>
				<div className="mr-auto flex w-full gap-5">
					<Dates created={post.date} updated={post.updated} />
					<ul className="flex gap-2">
						{post.tags.map((tag) => (
							<ListItem key={tag}>
								<TagItem href={`/blog/tags/${tag}`} tag={tag} />
							</ListItem>
						))}
					</ul>
				</div>
			</PageTitle>
			<Mdx code={post.body.code} />
		</section>
	);
}
