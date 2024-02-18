import Dates from "./dates";
import ListItem from "./list-item";
import PageTitle from "./page-title";
import TagItem from "./tag-item";
import {TypographyH1} from "./typography";

type Props = {
	title: string;
	date: string;
	updated: string;
	tags: string[];
};

export function PostHeading({title, date, updated, tags}: Props) {
	return (
		<PageTitle className="flex max-w-[880px] flex-col  justify-center gap-1 sm:items-center">
			<TypographyH1 className="text-3xl ">{title}</TypographyH1>
			<div className="flex flex-col gap-3 sm:flex-row  ">
				<Dates created={date} updated={updated} />
				<ul className="flex gap-2 ">
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
