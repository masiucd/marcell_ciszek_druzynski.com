"use client";
import {useRouter} from "next/navigation";
import {useTransition} from "react";

import {cn} from "@/lib/styles";

// eslint-disable-next-line no-unused-vars
export const debounce = <F extends (...args: any) => any>(
	func: F,
	waitFor: number
) => {
	let timeout: number = 0;
	const debounced = (...args: any) => {
		clearTimeout(timeout);
		setTimeout(() => func(...args), waitFor);
	};

	// eslint-disable-next-line no-unused-vars
	return debounced as (...args: Parameters<F>) => ReturnType<F>;
};

export function SearchInput({search}: {search?: string}) {
	let router = useRouter();
	let [pending, startTransition] = useTransition();
	return (
		<input
			type="text"
			className={cn(
				"w-full rounded-md border border-gray-300 p-2",
				pending && "opacity-90"
			)}
			placeholder="Search for a post..."
			defaultValue={search}
			onChange={debounce((e) => {
				startTransition(() => {
					let url = e.target.value ? `/blog?search=${e.target.value}` : "/blog";
					router.push(url);
				});
			}, 900)}
		/>
	);
}
