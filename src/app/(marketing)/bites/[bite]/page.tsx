import {allBites, type Bite} from "contentlayer/generated";
import {notFound} from "next/navigation";
import {Metadata} from "next/types";

import Dates from "@/components/common/dates";
import ListItem from "@/components/common/list_item";
import PageTitle from "@/components/common/page_title";
import TagItem from "@/components/common/tag_item";
import {TypographyH1} from "@/components/common/typography";
import Mdx from "@/components/mdx";
import {siteData} from "@/config/site_data";

export async function generateStaticParams() {
	return allBites.map(({slug}) => ({
		slug,
	}));
}

type Param = {
	bite: string;
};

export async function generateMetadata({
	params,
}: {
	params: Param;
}): Promise<Metadata | undefined> {
	const term = allBites.find(({slug}) => slug === params.bite);
	if (!term) {
		return;
	}
	const {title, about, slug, date} = term;
	return {
		title,
		description: about,
		openGraph: {
			title,
			description: about,
			type: "article",
			publishedTime: date,
			url: `${siteData.url}/bites/${slug}`,
			// images: [
			// 	{
			// 		url: ogImage,
			// 	},
			// ],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description: about,
			// images: [ogImage],
		},
	};
}

interface Props {
	params: Param;
}

function getTerm({bite}: {bite: string}): Bite | null {
	const biteItem = allBites.find(({slug}) => slug === bite);
	if (!biteItem) {
		return null;
	}
	return biteItem;
}

function BitesPage({params}: Props) {
	const bite = getTerm(params);
	if (!bite) {
		return notFound();
	}
	return (
		<section className="mb-5">
			<PageTitle className="mx-auto flex max-w-2xl flex-col gap-2 px-5 ">
				<TypographyH1 className="border-b-2 border-gray-900 text-5xl font-bold ">
					{bite.title}
				</TypographyH1>
				<div className="mr-auto flex w-full gap-5">
					<Dates created={bite.date} updated={bite.updated} />
					<ul className="flex gap-2">
						{bite.tags.map((tag) => (
							<ListItem key={tag}>
								<TagItem href={`/blog/tags/${tag}`} tag={tag} />
							</ListItem>
						))}
					</ul>
				</div>
			</PageTitle>
			<Mdx code={bite.body.code} className="mb-5" />
		</section>
	);
}

export default BitesPage;
