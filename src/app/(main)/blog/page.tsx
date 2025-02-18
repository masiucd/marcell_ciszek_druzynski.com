import {PageWrapper} from "@/components/page-wrapper";
import {H1, H3, Lead} from "@/components/typography";
import dayjs from "dayjs";
import Link from "next/link";
import {getMetaDataFromBlogPosts} from "./posts/meta-info";

export default function PostsPage() {
	let blogPostsMetaData = getMetaDataFromBlogPosts();
	// todo group blog post by year or month
	// let year = dayjs("2025-01-01").year();
	let blogPostsByYear = groupBlogPostItemsByYear(blogPostsMetaData);
	console.log("blogPostsByYear", blogPostsByYear);

	return (
		<PageWrapper>
			<div className="mb-5">
				<H1>Posts</H1>
				<Lead>Here you can find all the posts I have written.</Lead>
			</div>
			<div className="border border-blue-500 flex py-5">
				<ul className="flex flex-col gap-10">
					{Object.keys(blogPostsByYear)
						.map(Number)
						.toSorted((a, b) => (a > b ? -1 : 1))
						.map((year) => {
							let item = blogPostsByYear[year];
							return (
								<li key={year}>
									<H3>{year}</H3>
									<ul className="pl-12 flex flex-col gap-5">
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
													className="flex flex-col gap-1  pb-1"
												>
													<div className="flex gap-2 justify-between py-2 ">
														<div>
															<Link
																href={`/blog/posts/${p.frontMatter.slug}`}
																className="hover:opacity-50"
															>
																<strong className="tracking-tighter">
																	{p.frontMatter.postTitle}
																</strong>
															</Link>
															<p className="truncate text-muted-foreground max-w-xl">
																{p.frontMatter.excerpt}
															</p>
														</div>
														{/* <div>{p.frontMatter.excerpt}</div> */}
														{created === updated ? (
															<time className="block text-muted-foreground">
																{created}
															</time>
														) : (
															<>
																<time className="block text-muted-foreground">
																	{created}
																</time>
																<time className="block text-muted-foreground">
																	{updated}
																</time>
															</>
														)}
													</div>
													<ul className="flex gap-2">
														{p.frontMatter.tags.map((t) => (
															<li key={t}>
																<Link
																	href={`/blog/tags/${t}`}
																	className="rounded-sm  text-foreground text-sm uppercase hover:opacity-50"
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
