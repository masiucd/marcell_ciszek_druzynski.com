import {PageWrapper} from "@/components/page-wrapper";
import {H1} from "@/components/typography";
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
			<div className="md:max-w-5xl">
				<H1 className="text-pretty lg:text-4xl">
					Hi and welcome! I'm <AuthorName /> a software developer from
					Gothenburg Sweden.
				</H1>
			</div>

			<div className="flex flex-1 items-center justify-center border border-green-600">
				<div className="grid max-w-3xl grid-cols-12 gap-2 border border-blue-400 p-2">
					{/* <div className="col-span-8 flex">
						<Box
							title="About me"
							description="A little bit about me."
							content="A little bit about me."
							cardFooter="A little bit about me."
						/>
					</div> */}
					<div className="col-span-8 flex">
						<Box
							title="Dev wisdom"
							description="Dev quotes that inspire me."
							content="Dev quotes that inspire me."
							cardFooter="Dev quotes that inspire me."
						/>
					</div>
					<div className="col-span-4 flex">
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
					<div className="col-span-6 flex">
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

function AuthorName() {
	// let xs = siteData.site.author.split("").map((x) => (
	// 	<span
	// 		className="hover:scale-110 transform transition-transform duration-300 inline-block"
	// 		key={x}
	// 	>
	// 		{x}{""}
	// 	</span>
	// ));

	return (
		<span className="after:-z-10 relative z-10 after:absolute after:bottom-1 after:left-0 after:block after:h-5 after:w-full after:rotate-1 after:rounded-md after:bg-blue-500/60 after:content-['']">
			{siteData.site.author}
			{/* {xs} */}
		</span>
	);
}
