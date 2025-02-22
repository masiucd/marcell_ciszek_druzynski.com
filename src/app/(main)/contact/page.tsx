import {PageWrapper} from "@/components/page-wrapper";
import {H1, H2, H4, Lead} from "@/components/typography";
import siteData from "@/config/site-data";
import type {Metadata} from "next/types";
import {ContactForm} from "./_components/contact-form";

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

			<div className="flex flex-col-reverse justify-between gap-20 md:flex-row">
				<div className="flex w-full flex-col ">
					<Social />
				</div>
				<ContactForm />
			</div>
		</PageWrapper>
	);
}

function Social() {
	return (
		<>
			<H2 className="mb-10">Social media, where you can find me </H2>
			<ul className="flex flex-wrap items-center justify-center gap-5 ">
				{siteData.social.map((social) => (
					<li
						key={social.url}
						className="flex bg-card dark:bg-accent  size-28 items-center justify-center rounded-md shadow"
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
		</>
	);
}

export default ContactPage;
