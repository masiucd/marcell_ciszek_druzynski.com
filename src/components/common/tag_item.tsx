import Link from "next/link"

interface Props {
	tag: string
	href: string
}

export default function TagItem({tag, href}: Props) {
	return (
		<Link href={href}>
			<span className="hover:opacity-50">#{tag}</span>
		</Link>
	)
}
