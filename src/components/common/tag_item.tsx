import Link from "next/link"

interface Props {
	tag: string
	href: string
}

export default function TagItem({tag, href}: Props) {
	return (
		<Link href={href}>
			<span className="text-slate-900 drop-shadow-md hover:text-blue-500 hover:opacity-80">
				#{tag}
			</span>
		</Link>
	)
}
