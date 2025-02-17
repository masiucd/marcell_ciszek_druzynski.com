import {readFileSync, readdirSync} from "node:fs";
import {join} from "node:path";
import {PageWrapper} from "@/components/page-wrapper";
import Link from "next/link";
import {z} from "zod";
import {H1, Lead} from "~/src/components/typography";

function getPostDirNames() {
	return readdirSync(
		join(CURRENT_WORKING_DIRECTORY, "src", "app", "(main)", "posts"),
	);
}

const CURRENT_WORKING_DIRECTORY = process.cwd();
function getBlogPosts() {
	let postDirNames = getPostDirNames()
		.flatMap((p) =>
			readdirSync(
				join(CURRENT_WORKING_DIRECTORY, "src", "app", "(main)", "posts", p),
			).flatMap((f) =>
				readFileSync(
					join(
						CURRENT_WORKING_DIRECTORY,
						"src",
						"app",
						"(main)",
						"posts",
						p,
						f,
					),
					"utf-8",
				),
			),
		)
		.flatMap((x) => parseFrontMatter(x));

	return postDirNames;
}

export default function PostsPage() {
	let blogFrontMatters = getBlogPosts();

	return (
		<PageWrapper>
			<div className="mb-5">
				<H1>Posts</H1>
				<Lead>Here you can find all the posts I have written.</Lead>
			</div>
			<div className="grid gap-4">
				<ul>
					{blogFrontMatters.map((post) => {
						console.log("post.slug", post.slug);
						return (
							<li key={post.slug}>
								<Link href={`/posts/${post.slug}`}>{post.title}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</PageWrapper>
	);
}

let FrontMatterSchema = z.object({
	title: z.string(),
	slug: z.string(),
	created: z.string(),
	updated: z.string(),
	tags: z.array(z.string()),
	excerpt: z.string(),
});

function parseFrontMatter(content: string) {
	let frontMatter = content.match(/---\s*([\s\S]*?)\s*---/);
	if (frontMatter === null) {
		throw new Error("No front matter found");
	}
	let fm = frontMatter[1];
	let title = fm.match(/title: (.*)/)?.[1];
	let slug = fm.match(/slug: (.*)/)?.[1];
	let created = fm.match(/created: (.*)/)?.[1];
	let updated = fm.match(/updated: (.*)/)?.[1];
	let tags = fm
		.match(/tags: (.*)/)?.[1]
		.replaceAll("[", "")
		.replaceAll("]", "")
		.replaceAll("'", "")
		.split(",");
	let excerpt = fm.match(/excerpt: (.*)/)?.[1];

	// console.log(frontMatter);
	return FrontMatterSchema.parse({
		title,
		slug,
		created,
		updated,
		tags,
		excerpt,
	});
}
