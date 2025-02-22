import {PageWrapper} from "@/components/page-wrapper";
import {H1, P} from "@/components/typography";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type {PropsWithChildren} from "react";
import {Link} from "~/src/components/link";
import {TextLoop} from "~/src/components/ui/motion/text-loop";
import siteData from "~/src/config/site-data";
import {getMetaDataFromBlogPosts} from "~/src/lib/meta-info";

export default function Home() {
	let lastPublishedPosts = getLastPublishedPosts();
	return (
		<PageWrapper>
			<div className="md:max-w-5xl">
				<H1 className="text-pretty lg:text-4xl">
					<TextLoop
						className="overflow-y-clip"
						transition={{
							type: "spring",
							stiffness: 900,
							damping: 80,
							mass: 10,
						}}
						variants={{
							initial: {
								y: 20,
								rotateX: 90,
								opacity: 0,
								filter: "blur(4px)",
							},
							animate: {
								y: 0,
								rotateX: 0,
								opacity: 1,
								filter: "blur(0px)",
							},
							exit: {
								y: -20,
								rotateX: -90,
								opacity: 0,
								filter: "blur(4px)",
							},
						}}
					>
						<span>Hi and welcome</span>
						<span>สวัสดีและยินดีต้อนรับ</span>
						<span>Witam i zapraszam</span>
						<span>こんにちは、ようこそ</span>
						<span>Привіт і ласкаво просимо</span>
					</TextLoop>{" "}
					<br />
					I'm <AuthorName /> a software developer from Gothenburg Sweden.
				</H1>
			</div>

			{/* TODO we could harcode the data for now until we come with a better solution */}
			{/* TODO glow effect! */}
			<div className="flex flex-1 items-center justify-center border border-green-600">
				<div className="grid max-w-3xl grid-cols-12 gap-2 border border-blue-400 p-2">
					<div className="col-span-8 flex">
						<Box
							title="Dev wisdom"
							description="Dev quotes for inspiration and motivation"
						>
							<P>
								The best code is no code at all. <br />- Some smart person
							</P>
						</Box>
					</div>
					<div className="col-span-4 flex">
						<Box
							title="Now learning"
							description="What I am currently learning."
						>
							<P>
								Golang (Go) <br />
								Next.js
							</P>
						</Box>
					</div>
					<div className="col-span-6 flex">
						<Box
							title="Now Reading"
							description="Here you can find all the posts I have written."
						>
							<p>"Here you can find all the posts I have written."</p>
						</Box>
					</div>
					{/* <div className="col-span-12">recent posts</div> */}
					<div className="col-span-6 flex">
						<Box
							title="Recent Posts"
							description="Here you can find all the posts I have written."
						>
							<ul>
								{lastPublishedPosts.map(({frontMatter}) => (
									<li key={frontMatter.slug}>
										<Link href={`/blog/posts/${frontMatter.slug}`}>
											{frontMatter.postTitle}
										</Link>
									</li>
								))}
							</ul>
						</Box>
					</div>
				</div>
			</div>
		</PageWrapper>
	);
}

// TODO rename the name and possible types of the props
function Box({
	title,
	description,
	children,
}: PropsWithChildren<{
	title: string;
	description: string;
}>) {
	return (
		<Card className="flex-1">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	);
}

function AuthorName() {
	return (
		<span className="after:-z-10 relative z-10 after:absolute after:bottom-1 after:left-0 after:block after:h-5 after:w-full after:rotate-1 after:rounded-md after:bg-blue-500/60 after:content-['']">
			{siteData.site.author}
		</span>
	);
}

function getLastPublishedPosts() {
	return getMetaDataFromBlogPosts().slice(0, 3);
}
