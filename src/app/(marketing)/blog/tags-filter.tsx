"use client";
import {useState} from "react";

import {cn} from "@/lib/styles";

import {filterTags} from "./actions";

type Props = {
	tags: string[];
	storedTags: string[];
};

export function TagsFilter({tags, storedTags}: Props) {
	const [tagsList, setTagsList] = useState(storedTags);
	return (
		<form
			className="flex flex-col gap-2 rounded-md px-1 py-2"
			action={async () => {
				await filterTags(tagsList);
			}}
		>
			<fieldset className="flex flex-wrap gap-1">
				{tags.map((tag) => (
					<label
						key={tag}
						htmlFor={tag}
						className={cn(
							"inline-block text-sm cursor-pointer shadow rounded-md bg-gray-200 dark:bg-gray-600 dark:text-gray-50 px-2 py-1 text-gray-700 hover:opacity-60 uppercase",
							tagsList.includes(tag) &&
								"bg-gray-900 text-gray-50 dark:outline dark:outline-primary-500  ",
						)}
					>
						<span>{tag}</span>
						<input
							type="checkbox"
							name={tag}
							id={tag}
							className="sr-only"
							checked={tagsList.includes(tag)}
							onChange={() => {
								if (tagsList.includes(tag)) {
									setTagsList((prev) => prev.filter((t) => t !== tag));
								} else {
									setTagsList([...tagsList, tag]);
								}
							}}
						/>
					</label>
				))}
			</fieldset>
			<div className="flex gap-2">
				<button
					// variant={tagsList.length === 0 ? "faded" : "bordered"}
					type="submit"
					// size="sm"
				>
					<span>Filter</span>
				</button>
			</div>
		</form>
	);
}
