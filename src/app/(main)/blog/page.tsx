import {PageWrapper} from "@/components/page-wrapper";
import {H1, H3, Lead} from "@/components/typography";
import dayjs from "dayjs";

import {Link} from "~/src/components/link";
import {getMetaDataFromBlogPosts} from "./posts/meta-info";

export default function PostsPage() {
	let blogPostsMetaData = getMetaDataFromBlogPosts();
	// todo group blog post by year or month
	// let year = dayjs("2025-01-01").year();
	let blogPostsByYear = groupBlogPostItemsByYear(blogPostsMetaData);

	return (
		<PageWrapper>
			<div className="mb-5">
				<H1>Posts</H1>
				<Lead className="text-balance">
					Blog posts about software development, programming. Here where I share
					my thoughts and ideas about software development and my experiences.
					so far.
				</Lead>
			</div>
			<div className="flex py-5">
				<ul className="flex flex-col gap-10">
					{Object.keys(blogPostsByYear)
						.map(Number)
						.toSorted((a, b) => (a > b ? -1 : 1))
						.map((year) => {
							let item = blogPostsByYear[year];
							return (
								<li key={year}>
									<H3>{year}</H3>
									<ul className="mt-5 flex flex-col gap-5 pl-12">
										{item.map((p) => {
											let created = dayjs(p.frontMatter.created).format(
												"D MMM",
											);
											let updated = dayjs(p.frontMatter.updated).format(
												"D MMM",
											);
											return (
												<li
													key={p.frontMatter.slug}
													className="flex flex-col gap-1 pb-1"
												>
													<div className="flex justify-between gap-2 ">
														<div>
															<Link href={`/blog/posts/${p.frontMatter.slug}`}>
																<strong className="tracking-tighter">
																	{p.frontMatter.postTitle}
																</strong>
															</Link>
															<p className="max-w-xl truncate text-muted-foreground">
																{p.frontMatter.excerpt}
															</p>
														</div>
														{created === updated ? (
															<time className="block text-muted-foreground">
																{created}
															</time>
														) : (
															<div>
																<time className="block text-muted-foreground">
																	{created}
																</time>
																<time className="block text-muted-foreground">
																	{updated}
																</time>
															</div>
														)}
													</div>
													<ul className="flex gap-2">
														{p.frontMatter.tags.map((t) => (
															<li key={t}>
																<Link
																	href={`/blog/tags/${t}`}
																	className="rounded-sm text-foreground text-sm uppercase"
																>
																	#{t}
																</Link>
															</li>
														))}
													</ul>
												</li>
											);
										})}
									</ul>
								</li>
							);
						})}
				</ul>
			</div>
		</PageWrapper>
	);
}

function groupBlogPostItemsByYear(
	blogPostsMetaData: ReturnType<typeof getMetaDataFromBlogPosts>,
) {
	return blogPostsMetaData.reduce(
		(
			obj: {
				[key: string]: ReturnType<typeof getMetaDataFromBlogPosts>[0][];
			},
			item,
		) => {
			let year = dayjs(item.frontMatter.created).year();
			if (obj[year]) {
				obj[year].push(item);
			} else {
				obj[year] = [item];
			}
			return obj;
		},
		{},
	);
}
