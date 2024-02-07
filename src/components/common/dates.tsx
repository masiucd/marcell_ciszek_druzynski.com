import {formatDateFns} from "@/lib/data";

type PostDatePropss = {
	created: string;
	updated: string;
};
function Dates({created, updated}: PostDatePropss) {
	if (created === updated) {
		return (
			<time className="text-sm md:text-base" dateTime={created}>
				{formatDateFns(created)}{" "}
			</time>
		);
	}
	return (
		<p className="flex flex-col ">
			<span>
				Created <time dateTime={created}>{formatDateFns(created)} </time>
			</span>
			<span>
				Updated <time dateTime={updated}>{formatDateFns(updated)} </time>
			</span>
		</p>
	);
}

export default Dates;
