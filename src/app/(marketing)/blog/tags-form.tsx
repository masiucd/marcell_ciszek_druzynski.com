"use client";
import {useState} from "react";

import {Filter} from "@/components/icons/filter";
import {X} from "@/components/icons/x";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/styles";

import {filterTagsTwo} from "./actions";

type Props = {
	tags: string[];
	storedTags: string[];
};

export function TagsForm({tags, storedTags}: Props) {
	const [tagsList, setTagsList] = useState(storedTags);
	console.log("tagsList", tagsList);
	return (
		<form
			action={async () => {
				await filterTagsTwo(tagsList);
			}}
			className="flex flex-col gap-2 rounded-md px-1 py-2 shadow-md "
		>
			<div className="flex flex-wrap gap-1">
				{tags.map((tag) => (
					<label
						key={tag}
						htmlFor={tag}
						className={cn(
							"inline-block cursor-pointer rounded-md bg-gray-200 px-3 py-1 text-gray-700 hover:opacity-60",
							tagsList.includes(tag) && "bg-blue-500 text-gray-50 "
						)}
						data-tag-label
					>
						<span className="text-sm font-semibold uppercase ">#{tag}</span>
						<input
							type="checkbox"
							name="tag"
							value={tag}
							id={tag}
							className="sr-only"
							defaultChecked={tagsList.includes(tag)}
							onChange={(e) => {
								const {checked, value} = e.target;
								if (checked) {
									setTagsList([...tagsList, value]);
								} else {
									setTagsList(tagsList.filter((tag) => tag !== value));
								}
							}}
						/>
					</label>
				))}
			</div>
			<div className="flex gap-2">
				<Button
					type="submit"
					className="flex gap-1"
					disabled={tagsList.length === 0}
				>
					<span>
						<Filter width={16} />
					</span>
					<span>Filter</span>
				</Button>
				<Button
					className="flex gap-1"
					disabled={tagsList.length === 0}
					onClick={async () => {
						setTagsList([]);
						await filterTagsTwo([]);
					}}
				>
					<span>
						<X width={16} />
					</span>
					<span>Clear</span>
				</Button>
			</div>
		</form>
	);
}
