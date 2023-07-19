import {useMDXComponent} from "next-contentlayer/hooks";

import {cn} from "@/lib/styles";

import MoreInfo from "./mdx/more_info";
import Quiz from "./mdx/quiz/quiz";
import {ProgressLine} from "./progress_line";

interface Props {
	code: string;
	className?: string;
}

const components = {
	MoreInfo,
	Quiz,
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
