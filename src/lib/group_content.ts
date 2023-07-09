import "server-only";

import {Bite, Post} from "contentlayer/generated";
import {format, parseISO, startOfMonth} from "date-fns";

export function getContentPerMonth<T extends Post | Bite>(contents: T[]) {
	return contents.reduce((record, content) => {
		const month = startOfMonth(parseISO(content.updated));
		const monthString = format(month, "yyyy-MM-dd");
		if (!record[monthString]) {
			record[monthString] = [];
		}
		record[monthString].push(content);
		return record;
	}, {} as Record<string, typeof contents>);
}

export function groupContentByMonth(
	postsPerMonth: ReturnType<typeof getContentPerMonth>
) {
	return Object.keys(postsPerMonth).map((monthString) => ({
		monthString,
		content: postsPerMonth[monthString],
	}));
}
