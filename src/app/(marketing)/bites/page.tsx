import {compareDesc} from "date-fns";
import {Metadata} from "next/types";

import {ContentList} from "@/components/common/content-list";
import PageTitle from "@/components/common/page-title";
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
				<Lead className="pl-1 text-base">
					Common bites that are frequently used in the dev community
				</Lead>
			</PageTitle>
			<ContentList items={bites} />
		</section>
	);
}

export default CommonTermsPage;
