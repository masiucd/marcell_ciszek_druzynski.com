"use client";
import {useState} from "react";

import {Button} from "@/components/ui/button";
import {cn} from "@/lib/styles";

import {filterTags} from "./actions";

type Props = {
	tags: string[];
	storedTags: string[];
};

export function TagsFilter({tags, storedTags}: Props) {
	const [tagsList, setTagsList] = useState(storedTags);
	return (
		<div className="flex flex-col gap-2 rounded-md px-1 py-2 shadow-md ">
			<ul className="flex flex-wrap gap-1">
				{tags.map((tag) => (
					<li key={tag}>
						<button
							type="button"
							onClick={() => {
								if (tagsList.includes(tag)) {
									setTagsList((prev) => prev.filter((t) => t !== tag));
								} else {
									setTagsList([...tagsList, tag]);
								}
							}}
							className={cn(
								"inline-block text-sm cursor-pointer rounded-md bg-gray-200 px-3 py-1 text-gray-700 hover:opacity-60 uppercase",
								tagsList.includes(tag) &&
									"bg-gray-900 text-gray-50 dark:outline dark:outline-primary-500  "
							)}
						>
							{tag}
						</button>
					</li>
				))}
			</ul>
			<div className="flex gap-2">
				<Button
					className="flex items-center gap-1 dark:bg-gray-800 dark:text-gray-50"
					variant="solid"
					size="sm"
					disabled={tagsList.length === 0}
					onClick={async () => {
						await filterTags(tagsList);
					}}
				>
					<span>Filter</span>
				</Button>
				<Button
					className="flex items-center gap-1 dark:bg-gray-800 dark:text-gray-50"
					variant="solid"
					disabled={tagsList.length === 0}
					size="sm"
					onClick={async () => {
						setTagsList([]);
						await filterTags([]);
					}}
				>
					<span>Clear</span>
				</Button>
			</div>
		</div>
	);
}
