import {allBites} from "contentlayer/generated";
import {compareDesc} from "date-fns";
import {Metadata} from "next/types";

import PageTitle from "@/components/common/page_title";
import {TypographyH1} from "@/components/common/typography";

import {BiteItem} from "./components/bite_item";

export const metadata: Metadata = {
	title: "Bites",
	description: "Common bites that are frequently used in the dev community",
};

async function getBites() {
	const posts = allBites.sort((a, b) => {
		return compareDesc(new Date(a.date), new Date(b.date));
	});

	return posts;
}

async function CommonTermsPage() {
	const bites = await getBites();
	return (
		<section className="flex max-w-2xl flex-1 flex-col p-1">
			<PageTitle>
				<TypographyH1>Bites</TypographyH1>
				<p className="pl-1">
					Common bites that are frequently used in the dev community
				</p>
			</PageTitle>

			<ul className="flex flex-col gap-5">
				{bites.map((bite) => (
					<BiteItem key={bite._id} bite={bite} />
				))}
			</ul>
		</section>
	);
}

export default CommonTermsPage;
