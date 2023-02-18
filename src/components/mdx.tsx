import {useMDXComponent} from "next-contentlayer/hooks"

interface Props {
	code: string
}

const components = {}

function Mdx({code}: Props) {
	const MDXContent = useMDXComponent(code)
	return (
		<article>
			<MDXContent components={components} />
		</article>
	)
}

export default Mdx
