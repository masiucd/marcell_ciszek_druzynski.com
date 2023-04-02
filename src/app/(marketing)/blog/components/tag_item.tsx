import Link from "next/link"

interface Props {
	tag: string
}

export default function TagItem({tag}: Props) {
	return (
		<Link href={`/blog/tags/${tag}`}>
			<span className="hover:opacity-50">#{tag}</span>
		</Link>
	)
}
