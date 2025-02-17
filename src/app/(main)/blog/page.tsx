import {PageWrapper} from "@/components/page-wrapper";
import {H1, Lead} from "~/src/components/typography";
import {getMetaDataFromBlogPosts} from "./posts/meta-info";

export default function PostsPage() {
	let xs = getMetaDataFromBlogPosts();
	console.log("xs", xs);

	return (
		<PageWrapper>
			<div className="mb-5">
				<H1>Posts</H1>
				<Lead>Here you can find all the posts I have written.</Lead>
			</div>
			<div>
				<ul>
					{xs.map((x) => {
						return (
							<li key={x.frontMatter.slug}>
								<div>{x.frontMatter.postTitle}</div>
								<div>{x.frontMatter.excerpt}</div>
								<div>{x.frontMatter.tags}</div>
								<div>{x.frontMatter.created}</div>
								<div>{x.frontMatter.updated}</div>
							</li>
						);
					})}
				</ul>
			</div>
		</PageWrapper>
	);
}
