import {formatDateFns} from "@/lib/data"

interface PostDatePropss {
	created: string
	updated: string
}
function PostDates({created, updated}: PostDatePropss) {
	if (created === updated) {
		return <time dateTime={created}>{formatDateFns(created)} </time>
	}
	return (
		<p>
			Created on <time dateTime={created}>{formatDateFns(created)} </time> and
			updated on <time dateTime={updated}>{formatDateFns(updated)} </time>
		</p>
	)
}

export default PostDates
