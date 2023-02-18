import {useMDXComponent} from "next-contentlayer/hooks"

interface Props {
  code: string
}

function Mdx({code}: Props) {
  const MDXContent = useMDXComponent(code)
  console.log("asdasd")
  return (
    <article>
      <MDXContent components={{}} />
    </article>
  )
}

export default Mdx
