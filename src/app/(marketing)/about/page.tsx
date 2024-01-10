import type {Metadata} from "next";

import PageTitle from "@/components/common/page_title";
import Icons from "@/components/icons";

export const metadata: Metadata = {
	title: "About",
	description: "About me",
};

const socialMediaItems = Object.freeze([
	{
		name: "x" as const,
		url: "https://twitter.com/masiu_cd",
	},
	{
		name: "github" as const,
		url: "https://github.com/masiucd",
	},
	{
		name: "instagram" as const,
		url: "https://www.instagram.com/masiu_cd/",
	},
	{
		name: "bluesky" as const,
		url: "https://bsky.app/profile/masiucd.bsky.social",
	},
]);
type Icon = (typeof socialMediaItems)[number]["name"];

function getIcon(icon: Icon) {
	const socialIcon = {
		x: <Icons.twitter />,
		github: <Icons.github />,
		instagram: <Icons.instagram />,
		bluesky: <Icons.cloud />,
	};
	return socialIcon[icon];
}

function SocialMediaItems() {
	return (
		<ul className="flex flex-wrap gap-5">
			{socialMediaItems.map(({name, url}) => (
				<li
					key={name}
					className="w-fit rounded-md bg-gray-200 p-1 shadow-sm transition-opacity duration-75 hover:opacity-45 dark:bg-gray-900"
				>
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="flex w-full justify-between gap-2 p-1"
					>
						<div className="flex gap-2">{getIcon(name)}</div>
					</a>
				</li>
			))}
		</ul>
	);
}

function AboutPage() {
	return (
		<section>
			<PageTitle title="About me" />
			<div className="border-b-2 border-gray-950/60 dark:border-gray-50 ">
				<p>
					Hi I am <strong>Marcell Ciszek Druzysnki</strong>.
				</p>
				<p>
					I am a software developer from <strong>Gotheburg, Sweden</strong>.
				</p>
			</div>
			<div className="my-5 flex flex-col gap-5">
				<p className="text-balance">
					I absolutely love working with tools like React, TypeScript, Node .
					Recently, I&apos;ve been expanding my skills by learning Go, which has
					been an exciting challenge!
				</p>

				<p className="text-balance">
					When I&apos;m not busy coding, I like to stay active by going for long
					runs. Running has been a passion of mine for years, and it&apos;s a
					great way to explore the scenic routes around new cities when I am
					traveling. I also enjoy listening to music while I work, and I have a
					wide range of favorite artists and genres.
				</p>

				<p className="text-balance">
					Aside from coding and running, I&apos;m also an avid artist and enjoy
					expressing my creativity through drawing. It&apos;s a great way to
					unwind and explore my more artistic side. I find that my diverse range
					of interests and hobbies brings a unique perspective to my work, and
					I&apos;m always striving to learn and grow as a developer.
				</p>

				<p className="text-balance">
					Overall, I&apos;m a friendly and dedicated individual who is
					passionate about what I do, programming, running and drawing and
					repeat. You know, the usual. Send me a message if you&apos;d like to
					chat or have any questions!
				</p>
			</div>
			<SocialMediaItems />
		</section>
	);
}

export default AboutPage;
