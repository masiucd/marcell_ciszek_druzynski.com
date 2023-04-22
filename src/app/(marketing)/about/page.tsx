import type {Metadata} from "next"

import PageTitle from "@/components/common/page_title"
import Icons from "@/components/icons"
import ArrowTopRight from "@/components/icons/arrow_top_right"

export const metadata: Metadata = {
	title: "About",
	description: "About me",
}

const socialMediaItems = Object.freeze([
	{
		name: "twitter" as const,
		url: "https://twitter.com/marcellcd",
	},
	{
		name: "github" as const,
		url: "https://github.com/masiucd",
	},
	{
		name: "instagram" as const,
		url: "https://www.instagram.com/masiu_cd/",
	},
])
type Icon = (typeof socialMediaItems)[number]["name"] //

function getIcon(icon: Icon) {
	const socialIcon = {
		twitter: <Icons.twitter />,
		github: <Icons.github />,
		instagram: <Icons.instagram />,
	}
	return socialIcon[icon]
}

function AboutPage() {
	return (
		<section>
			<PageTitle title="About me" />
			<div className="mb-5 border-b-2 border-slate-950/60">
				<p>
					Hi I am <strong>Marcell Ciszek Druzysnki</strong>.
				</p>
				<p>
					I am a software developer based in <strong>Gotheburg, Sweden</strong>.
				</p>
			</div>
			<div className="flex flex-col gap-5">
				<p>
					I absolutely love working with tools like React, TypeScript, Node .
					Recently, I&apos;ve been expanding my skills by learning Rust, which
					has been an exciting challenge!
				</p>

				<p>
					When I&apos;m not busy coding, I like to stay active by going for long
					runs. Running has been a passion of mine for years, and it&apos;s a
					great way to explore the scenic routes around new cities when I am
					traveling. I also enjoy listening to music while I work, and I have a
					wide range of favorite artists and genres.
				</p>

				<p>
					Aside from coding and running, I&apos;m also an avid artist and enjoy
					expressing my creativity through drawing. It&apos;s a great way to
					unwind and explore my more artistic side. I find that my diverse range
					of interests and hobbies brings a unique perspective to my work, and
					I&apos;m always striving to learn and grow as a developer.
				</p>

				<p>
					Overall, I&apos;m a friendly and dedicated individual who is
					passionate about what I do, programming, running and drawing and
					repeat. You know, the usual. Send me a message if you&apos;d like to
					chat or have any questions!
				</p>
			</div>
			<ul className="flex flex-wrap items-center justify-center gap-5 py-10">
				{socialMediaItems.map(({name, url}) => (
					<li
						key={name}
						className="flex min-w-[11rem]  rounded-md border-2 border-slate-950 shadow hover:bg-slate-950/30 hover:shadow-lg"
					>
						<a
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex w-full justify-between gap-2  p-1"
						>
							<div className="flex gap-2">
								{getIcon(name)}
								<span>{name}</span>
							</div>
							<ArrowTopRight />
						</a>
					</li>
				))}
			</ul>
		</section>
	)
}

export default AboutPage
