import {useMDXComponent} from "next-contentlayer/hooks"

import DropDown from "./mdx/drop_down"

interface Props {
	code: string
}

const components = {
	DropDown,
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
