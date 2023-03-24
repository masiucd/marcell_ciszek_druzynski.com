import {useMDXComponent} from "next-contentlayer/hooks"

import MoreInfo from "./mdx/more_info"

interface Props {
	code: string
}

const components = {
	MoreInfo,
}

function Mdx({code}: Props) {
	const MDXContent = useMDXComponent(code)

	return (
		<article className="prose prose-neutral prose-quoteless dark:prose-invert">
			<MDXContent components={components} />
		</article>
	)
}

export default Mdx
