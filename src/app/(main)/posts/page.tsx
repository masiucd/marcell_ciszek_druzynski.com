import {PageWrapper} from "@/components/page-wrapper";
import {H1, Lead} from "~/src/components/typography";

let dumyPosts = [
	{
		title: "Post 1",
		content: "This is the content of post 1",
	},
	{
		title: "Post 2",
		content: "This is the content of post 2",
	},
	{
		title: "Post 3",
		content: "This is the content of post 3",
	},
	{
		title: "Post 4",
		content: "This is the content of post 4",
	},
	{
		title: "Post 5",
		content: "This is the content of post 5",
	},
];

export default function PostsPage() {
	return (
		<PageWrapper>
			<div className="mb-5">
				<H1>Posts</H1>
				<Lead>Here you can find all the posts I have written.</Lead>
			</div>
			<div className="grid gap-4">
				{dumyPosts.map((post) => (
					<div key={post.title} className="p-4 bg-white rounded-md shadow-md">
						<h2 className="text-lg font-semibold">{post.title}</h2>
						<p>{post.content}</p>
					</div>
				))}
			</div>
		</PageWrapper>
	);
}
