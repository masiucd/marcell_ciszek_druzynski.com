import {allBites, Bite} from "contentlayer/generated";
import {compareDesc, format, parseISO, startOfMonth} from "date-fns";
import {Metadata} from "next/types";

import PageTitle from "@/components/common/page_title";
import {TypographyH1} from "@/components/common/typography";

import {BiteItem} from "./components/bite_item";

export const metadata: Metadata = {
	title: "Bites",
	description: "Common bites that are frequently used in the dev community",
};

function getBitesPerMonth(posts: Bite[]) {
	return posts.reduce((acc, post) => {
		const month = startOfMonth(parseISO(post.updated));
		const monthString = format(month, "yyyy-MM-dd");
		if (!acc[monthString]) {
			acc[monthString] = [];
		}
		acc[monthString].push(post);
		return acc;
	}, {} as Record<string, typeof posts>);
}

function groupBites(postsPerMonth: ReturnType<typeof getBitesPerMonth>) {
	return Object.keys(postsPerMonth).map((monthString) => ({
		monthString,
		posts: postsPerMonth[monthString],
	}));
}

async function getBites() {
	const bites = allBites.sort((a, b) => {
		return compareDesc(new Date(a.date), new Date(b.date));
	});
	const bitesPerMonth = getBitesPerMonth(bites);
	return groupBites(bitesPerMonth);
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

			<ul className="flex max-w-xl flex-col gap-3 space-y-5 p-1">
				{bites.map((bite) => (
					<li key={bite.monthString}>
						<p className="text-2xl font-bold text-gray-500 dark:text-gray-400">
							Bites from {format(parseISO(bite.monthString), "MMM, yy")}
						</p>
						<ul className="ml-5">
							{bite.posts.map((bite) => (
								<BiteItem key={bite._id} bite={bite} />
							))}
						</ul>
					</li>
				))}
			</ul>
		</section>
	);
}

export default CommonTermsPage;
