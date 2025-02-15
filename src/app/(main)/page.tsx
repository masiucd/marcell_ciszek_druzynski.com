import {PageWrapper} from "@/components/page-wrapper";
import {H1, H2, InlineCode, Lead, P} from "@/components/typography";
import Link from "next/link";
import {Button} from "~/src/components/ui/button";

export default function Home() {
	return (
		<PageWrapper>
			<H1>Hi there! I'm Marcel Ciszek Druzynski.</H1>
			<Lead>
				I'm a software engineer, web developer, and tech enthusiast. I write
				about web development, programming, and other tech-related topics.
			</Lead>

			<H2>What is this website about?</H2>
			<P>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
				nesciunt iure sed culpa fuga? Dignissimos iusto esse dolorem ad
				voluptates ullam nisi alias facere beatae maxime, quis commodi, ab
				nostrum!
			</P>
			<InlineCode>console.log("Hello, world!");</InlineCode>
			<div className="flex gap-2">
				<Button asChild>
					<Link href="/about">About</Link>
				</Button>
				<Button asChild>
					<Link href="/posts">Posts</Link>
				</Button>
			</div>
		</PageWrapper>
	);
}
