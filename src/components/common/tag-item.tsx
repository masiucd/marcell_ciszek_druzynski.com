import Link from "next/link";

type Props = {
	tag: string;
	href: string;
};

export default function TagItem({tag, href}: Props) {
	return (
		<Link href={href}>
			<span className="z-0 text-sm text-gray-900 underline drop-shadow-md  hover:text-blue-400 dark:text-gray-400">
				#{tag}
			</span>
		</Link>
	);
}
