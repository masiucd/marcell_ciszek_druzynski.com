import {PageWrapper} from "@/components/page-wrapper";
import {H1, H2, H4, Lead, List} from "@/components/typography";
import {Button} from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/text-area";
import siteData from "@/config/site-data";
import type {Metadata} from "next/types";
import type {PropsWithChildren} from "react";

export const metadata: Metadata = {
	title: "Contact",
	description: "Get in touch with me!",
};

function ContactPage() {
	return (
		<PageWrapper>
			<div className="mb-10">
				<H1>Let's connect</H1>
				<Lead>Get in touch with me!</Lead>
			</div>

			<div className="flex flex-col gap-20 md:max-w-5xl ">
				<div className="">
					<H2 className="mb-4">Social media, where you can find me </H2>
					<ul className="flex justify-around gap-5">
						{siteData.social.map((social) => (
							<li
								key={social.url}
								className="flex size-42 items-center justify-center rounded-md shadow"
							>
								<a
									href={social.url}
									className="transition-opacity duration-150 hover:opacity-50"
								>
									{/* <Icon name={social.name} /> */}
									<H4 className="capitalize">{social.name}</H4>
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="flex justify-between gap-20">
					<Card>
						<CardHeader>
							<CardTitle>What I do</CardTitle>
							<CardDescription>I write about:</CardDescription>
						</CardHeader>
						<CardContent>
							<List>
								<li>Web development</li>
								<li>Programming</li>
								<li>Other tech-related topics</li>
								<li>UX</li>
							</List>
						</CardContent>
						<CardFooter>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Voluptatem mollitia velit quidem consequatur et inventore,
							distinctio nostrum nihil illum ab, hic explicabo dolores officiis
							maiores alias, voluptates vel error deleniti?
						</CardFooter>
					</Card>

					<Card className="w-full">
						<CardHeader>
							<CardTitle>Send a Message</CardTitle>
							<CardDescription>
								Fill out the form below to get in touch with me.
							</CardDescription>
						</CardHeader>
						<form>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="name">Name</Label>
									<Input
										id="name"
										name="name"
										placeholder="Your name"
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										name="email"
										type="email"
										placeholder="Your email"
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="message">Message</Label>
									<Textarea
										id="message"
										name="message"
										placeholder="Your message"
										required
									/>
								</div>
							</CardContent>
							<CardFooter>
								<Button type="submit" className="w-full">
									Send Message
								</Button>
							</CardFooter>
						</form>
					</Card>
				</div>
			</div>
		</PageWrapper>
	);
}

export default ContactPage;

function Box({
	className,
	title,
	children,
}: PropsWithChildren<{className: string; title: string}>) {
	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>{children}</CardContent>
			{/* <CardFooter>
				<p>Card Footer</p>
			</CardFooter> */}
		</Card>
	);
}
