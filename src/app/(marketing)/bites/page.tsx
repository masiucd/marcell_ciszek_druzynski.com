import {allBites, Bite} from "contentlayer/generated";
import {compareDesc} from "date-fns";
import {Metadata} from "next/types";

import {ContentList} from "@/components/common/content_list";
import PageTitle from "@/components/common/page_title";
import {Lead, TypographyH1} from "@/components/common/typography";
import {getContentPerMonth, groupContentByMonth} from "@/lib/group_content";

export const metadata: Metadata = {
	title: "Bites",
	description: "Common bites that are frequently used in the dev community",
};

async function getBites() {
	const bites = allBites.sort((a, b) => {
		return compareDesc(new Date(a.date), new Date(b.date));
	});
	const bitesPerMonth = getContentPerMonth<Bite>(bites);
	return groupContentByMonth<Bite>(bitesPerMonth);
}

async function CommonTermsPage() {
	const bites = await getBites();
	return (
		<section className="flex max-w-2xl flex-1 flex-col p-1">
			<PageTitle>
				<TypographyH1>Bites</TypographyH1>
				<Lead className="pl-1">
					Common bites that are frequently used in the dev community
				</Lead>
			</PageTitle>

			<ContentList items={bites} />
			{/* <ul className="flex max-w-xl flex-col gap-5 space-y-5 p-1">
				{bites.map((bite) => (
					<li key={bite.monthString} className="pl-1">
						<p className="m-0 text-xl font-bold leading-7 text-gray-500 dark:text-gray-400">
							Bites from {format(parseISO(bite.monthString), "MMM, yy")}
						</p>
						<ul className="ml-3">
							{bite.content.map((bite) => (
								<BiteItem key={bite._id} bite={bite} />
							))}
						</ul>
					</li>
				))}
			</ul> */}
		</section>
	);
}

export default CommonTermsPage;
