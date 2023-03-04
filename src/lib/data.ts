import {format, parseISO} from "date-fns"

export function formatDateFns(date: string, pattern = "LLLL d, yyyy"): string {
	return format(parseISO(date), pattern)
}

export function formatDate(input: string | number): string {
	const date = new Date(input)
	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	})
}
