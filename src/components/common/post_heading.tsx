import Dates from "./dates";
import ListItem from "./list_item";
import PageTitle from "./page_title";
import TagItem from "./tag_item";
import {TypographyH1} from "./typography";

type Props = {
	title: string;
	date: string;
	updated: string;
	tags: string[];
};

export function PostHeading({title, date, updated, tags}: Props) {
	return (
		<PageTitle className="flex max-w-[880px] flex-col items-center justify-center gap-1">
			<TypographyH1 className="text-center">{title}</TypographyH1>
			<div className="flex gap-3">
				<Dates created={date} updated={updated} />
				<ul className="flex gap-2">
					{tags.map((tag) => (
						<ListItem key={tag}>
							<TagItem href={`/blog/tags/${tag}`} tag={tag} />
						</ListItem>
					))}
				</ul>
			</div>
		</PageTitle>
	);
}
