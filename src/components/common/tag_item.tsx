import Link from "next/link";

interface Props {
	tag: string;
	href: string;
}

export default function TagItem({tag, href}: Props) {
	return (
		<Link href={href}>
			<span className="z-0 text-gray-900 drop-shadow-md hover:text-blue-500 hover:opacity-80 dark:text-gray-200">
				&lambda;-{tag}
			</span>
		</Link>
	);
}
