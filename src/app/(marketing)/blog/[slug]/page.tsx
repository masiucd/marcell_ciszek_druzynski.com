import {readdirSync, readFileSync} from "node:fs";
import {join} from "node:path";

import {allPosts} from "contentlayer/generated";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {MDXRemote} from "next-mdx-remote/rsc";

import {PostHeading} from "@/components/common/post-heading";
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

let regexForFrontMatter = /---\n([\s\S]+?)\n---/;

type FrontMatter = {
	title: string;
	about: string;
	date: string;
	tags: string;
	updated: string;
};

function getFrontMatter(data: string): FrontMatter {
	let match = data.match(regexForFrontMatter);
	if (!match) {
		return {
			title: "",
			about: "",
			date: "",
			tags: "",
			updated: "",
		};
	}
	let frontMatter = match[1];
	let lines = frontMatter.split("\n");
	let obj = lines.reduce<FrontMatter>((acc, line) => {
		let [key, value] = line.split(": ");
		acc[key as keyof FrontMatter] = value.replace(/"/g, "");
		return acc;
	}, {} as FrontMatter);
	return obj;
}

function getContent(data: string) {
	let match = data.match(regexForFrontMatter);
	if (!match) {
		return "";
	}
	let content = data.slice(match[0].length);
	return content;
}

function slugify(text: string) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, "-") // Replace spaces with -
		.replace(/[^\w-]+/g, "") // Remove all non-word chars
		.replace(/--+/g, "-") // Replace multiple - with single -
		.replace(/^-+/, "") // Trim - from start of text
		.replace(/-+$/, ""); // Trim - from end of text
}

export default async function PostPage({params}: Props) {
	// const post = getPost(params);
	// if (!post) {
	// 	return notFound();
	// }
	let path = join(process.cwd(), "content", "posts");
	let xs = readdirSync(path);
	let xss = xs.map((x) => {
		let data = readFileSync(join(path, x), "utf-8");
		let frontMatter = getFrontMatter(data);
		let content = getContent(data);
		return {
			frontMatter: {...frontMatter, tags: frontMatter.tags.split(", ")},
			content,
		};
	});

	let post = xss.find((x) => {
		console.log("slugify(x.frontMatter.title)", slugify(x.frontMatter.title));
		return slugify(x.frontMatter.title) === params.slug;
	});
	console.log("🚀 ~ PostPage ~ post:", post?.frontMatter);
	if (!post) {
		return notFound();
	}

	// console.log("xss", xss);
	return (
		<section className="mb-5">
			{params.slug}
			{/* <PostHeading
				title={post.title}
				date={post.date}
				updated={post.updated}
				tags={post.tags}
			/> */}
			<MDXRemote
				source={post.content}
				components={{}}
				options={{
					parseFrontmatter: true,
				}}
			/>
		</section>
	);
}
