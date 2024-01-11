import {allBites, type Bite} from "contentlayer/generated";
import {notFound} from "next/navigation";
import {Metadata} from "next/types";

import {PostHeading} from "@/components/common/post-heading";
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
	const {title, about, slug, date, tags} = term;
	return {
		title,
		description: about,
		keywords: tags.join(", "),
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

type Props = {
	params: Param;
};

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
			<PostHeading
				title={bite.title}
				date={bite.date}
				updated={bite.updated}
				tags={bite.tags}
			/>
			<Mdx code={bite.body.code} className="mb-5" />
		</section>
	);
}

export default BitesPage;
