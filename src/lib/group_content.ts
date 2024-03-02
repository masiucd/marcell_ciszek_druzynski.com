import "server-only";

import {format, parseISO, startOfMonth} from "date-fns";

type ContentPerMonthReturnType<T> = Record<string, T[]>;

export function getContentPerMonth<T extends Post | Bite>(
	contents: T[],
): ContentPerMonthReturnType<T> {
	return contents.reduce<Record<string, T[]>>((record, content) => {
		const month = startOfMonth(parseISO(content.updated));
		const monthString = format(month, "yyyy-MM-dd");
		if (!record[monthString]) {
			record[monthString] = [];
		}
		record[monthString].push(content);
		return record;
	}, {});
}

export function groupContentByMonth<T>(
	postsPerMonth: ContentPerMonthReturnType<T>,
) {
	return Object.keys(postsPerMonth).map((monthString) => ({
		monthString,
		content: postsPerMonth[monthString],
	}));
}
