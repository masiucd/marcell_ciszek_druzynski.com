import NextImage from "next/image";
import {useMDXComponent} from "next-contentlayer/hooks";

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

const components = {
	MoreInfo,
	Quiz,
	Image,
};

function Mdx({code, className}: Props) {
	const MDXContent = useMDXComponent(code);
	return (
		<>
			<ProgressLine />
			<article
				className={cn(
					"prose prose-neutral prose-quoteless dark:prose-invert mx-auto",
					className
				)}
			>
				<MDXContent components={components} />
			</article>
		</>
	);
}

export default Mdx;
