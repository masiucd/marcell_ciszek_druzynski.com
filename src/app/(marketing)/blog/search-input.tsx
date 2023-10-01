"use client";

import {useRouter} from "next/navigation";

export function SearchInput({search}: {search?: string}) {
	let router = useRouter();
	return (
		<input
			type="text"
			className="w-full rounded-md border border-gray-300 p-2"
			placeholder="Search for a post..."
			defaultValue={search}
			onChange={(e) => {
				console.log(e.target.value);
				router.push(`/blog?search=${e.target.value}`);
				// let searchParams = new URLSearchParams(router.query);
				// searchParams.set("search", e.target.value);
				// router.push({
				// 	pathname: router.pathname,
				// 	query: searchParams.toString(),
				// });
			}}
		/>
	);
}
