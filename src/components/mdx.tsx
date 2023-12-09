import NextImage from "next/image";
import {useMDXComponent} from "next-contentlayer/hooks";

import {siteData} from "@/config/site_data";
import {cn} from "@/lib/styles";

import MoreInfo from "./mdx/more_info";
import Quiz from "./mdx/quiz/quiz";
import {ProgressLine} from "./progress_line";

type Props = {
	code: string;
	className?: string;
};

type ImageProps = {
	src: string;
	alt: string;
};

function Image({src, alt}: ImageProps) {
	return (
		<NextImage
			src={src}
			alt={alt}
			width={500}
			height={500}
			loading="lazy"
			layout="responsive"
			className="rounded-lg"
		/>
	);
}

function CodePen({name, href}: {name: string; href: string}) {
	return (
		<>
			<div
				data-height="128"
				data-theme-id="dark"
				data-default-tab="html,result"
				data-slug-hash="dyaoVJW"
				data-preview="true"
				data-user="legionista1994"
				className="flex h-32 items-center justify-center rounded-lg border-2 border-gray-900 dark:border-gray-100 "
			>
				<p>
					See the Pen{" "}
					<a href={href} target="_blank" rel="noopener noreferrer">
						{name}
					</a>{" "}
					by {siteData.author.firstName} {siteData.author.lastName} (
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://codepen.io/legionista1994"
					>
						@legionista1994
					</a>
					) on{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://codepen.io"
					>
						CodePen
					</a>
					.
				</p>
			</div>
		</>
	);
}

const components = {
	MoreInfo,
	Quiz,
	Image,
	CodePen,
};

function Mdx({code, className}: Props) {
	const MDXContent = useMDXComponent(code);
	return (
		<>
			<ProgressLine />
			<article
				className={cn(
					"prose prose-neutral prose-quoteless dark:prose-invert mx-auto break-words",
					className
				)}
			>
				<MDXContent components={components} />
			</article>
		</>
	);
}

export default Mdx;
