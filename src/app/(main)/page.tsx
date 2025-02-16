import {PageWrapper} from "@/components/page-wrapper";
import {H1, Lead} from "@/components/typography";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import siteData from "~/src/config/site-data";

export default function Home() {
	return (
		<PageWrapper>
			<H1>Hi there! I'm {siteData.site.author}.</H1>
			<Lead>
				I'm a software engineer, web developer, and tech enthusiast. I write
				about web development, programming, and other tech-related topics.
			</Lead>

			<div className="flex flex-1 items-center justify-center border border-green-600">
				<div className="grid max-w-3xl grid-cols-12 gap-2 border border-blue-400 p-2">
					<div className="col-span-8 flex">
						<Box
							title="About me"
							description="A little bit about me."
							content="A little bit about me."
							cardFooter="A little bit about me."
						/>
					</div>
					<div className="col-span-4 flex">
						<Box
							title="Dev wisdom"
							description="Dev quotes that inspire me."
							content="Dev quotes that inspire me."
							cardFooter="Dev quotes that inspire me."
						/>
					</div>
					<div className="col-span-6 flex">
						<Box
							title="Now learning"
							description="What I am currently learning."
							content="What I am currently learning."
							cardFooter="What I am currently learning."
						/>
					</div>
					<div className="col-span-6 flex">
						<Box
							title="Now Reading"
							description="Here you can find all the posts I have written."
							content="Here you can find all the posts I have written."
							cardFooter="Here you can find all the posts I have written."
						/>
					</div>
					{/* <div className="col-span-12">recent posts</div> */}
					<div className="col-span-12 flex">
						<Box
							title="Recent Posts"
							description="Here you can find all the posts I have written."
							content="Here you can find all the posts I have written."
							cardFooter="Here you can find all the posts I have written."
						/>
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
	content,
	cardFooter,
}: {title: string; description: string; content: string; cardFooter: string}) {
	return (
		<Card className="flex-1">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<p>{content}</p>
			</CardContent>
			<CardFooter>
				<p>{cardFooter}</p>
			</CardFooter>
		</Card>
	);
}
