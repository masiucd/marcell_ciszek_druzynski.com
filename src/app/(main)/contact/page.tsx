import {PageWrapper} from "@/components/page-wrapper";
import {H1, H3, Lead} from "@/components/typography";
import type {Metadata} from "next/types";
import {Icons} from "~/src/components/icons";
import siteData from "~/src/config/site-data";

export const metadata: Metadata = {
	title: "Contact",
	description: "Get in touch with me!",
};

function ContactPage() {
	return (
		<PageWrapper>
			<div>
				<H1>Let's connect</H1>
				<Lead>Get in touch with me!</Lead>
			</div>

			<div className="grid flex-1 grid-cols-5 grid-rows-5 gap-20 bg-red-100 sm:p-10">
				<div className="col-span-5 row-span-2">
					{" "}
					<ul className="flex gap-5 ">
						{siteData.social.map((social) => (
							<li key={social.url}>
								<a href={social.url}>
									{/* <Icon name={social.name} /> */}
									{social.name}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="col-span-3 row-span-3 row-start-3">
					<H3>What I do</H3>
					<ul>
						<li>Web development</li>
						<li>Programming</li>
						<li>Other tech-related topics</li>
						<li>UX</li>
					</ul>
				</div>
				<div className="col-span-2 row-span-3 col-start-4 row-start-3">
					<H3>How to reach me</H3>
					<ul>
						<li>
							<a href={`mailto:${siteData.site.email}`}>
								{siteData.site.email}
							</a>
						</li>
					</ul>
					{/* <Image
						src="/me.png"
						alt="Marcell Ciszek Druzynski"
						width={200}
						height={200}
					/> */}
				</div>
			</div>
		</PageWrapper>
	);
}

export default ContactPage;

function Icon({name}: {name: "twitter" | "github" | "instagram" | "bluesky"}) {
	switch (name) {
		case "twitter":
			return <Icons.Twitter />;
		case "github":
			return <Icons.Github />;
		case "instagram":
			return <Icons.Instagram />;
		case "bluesky":
			return <Icons.BlueSky />;
		default:
			return null;
	}
}
