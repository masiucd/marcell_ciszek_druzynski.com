import {readdirSync} from "node:fs";
import {join} from "node:path";

import {Code} from "bright";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {MDXRemote} from "next-mdx-remote/rsc";

import {PostHeading} from "@/components/common/post-heading";
import {siteData} from "@/config/site_data";
import {getPost, slugify} from "@/lib/content";

import {focus} from "../components/bright/focus";

type Param = {
	slug: string;
};

export async function generateStaticParams() {
	return allPotFiles().map((x) => ({slug: slugify(x)}));
}

export async function generateMetadata({
	params,
}: {
	params: Param;
}): Promise<Metadata | undefined> {
	// const post =            allPosts.find((post) => post.slug === params.slug);
	let post = getPost(params.slug);
	if (!post) {
		return;
	}
	const {title, about, date, tags} = post.frontMatter;
	return {
		title,
		description: about,
		keywords: tags.join(", "),
		openGraph: {
			title,
			description: about,
			type: "article",
			publishedTime: date,
			url: `${siteData.url}/blog/${slugify(title)}`,
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

function allPotFiles() {
	let path = join(process.cwd(), "content", "posts");
	let xs = readdirSync(path);
	return xs.map((x) => x.replaceAll(".mdx", ""));
}

type Props = {
	params: Param;
};

Code.lineNumbers = true;
Code.theme = {
	dark: "github-dark",
	light: "github-light",
};

Code.extensions = [focus];

export default async function PostPage({params}: Props) {
	let post = getPost(params.slug);
	if (!post) {
		return notFound();
	}
	let {frontMatter, content} = post;
	return (
		<section className="mb-5">
			<PostHeading
				title={frontMatter.title}
				date={frontMatter.date}
				updated={frontMatter.updated}
				tags={frontMatter.tags}
			/>
			<MDXRemote
				source={content}
				components={{
					pre: Code,
				}}
				options={{
					parseFrontmatter: true,
				}}
			/>
		</section>
	);
}
