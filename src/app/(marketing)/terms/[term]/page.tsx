import {allTerms, Term} from "contentlayer/generated"
import {notFound} from "next/navigation"
import {Metadata} from "next/types"

import PageTitle from "@/components/common/page_title"
import Mdx from "@/components/mdx"
import {siteData} from "@/config/site_data"

export async function generateStaticParams() {
	return allTerms.map(({slug}) => ({
		slug,
	}))
}

type Param = {
	term: string
}

export async function generateMetadata({
	params,
}: {
	params: Param
}): Promise<Metadata | undefined> {
	const term = allTerms.find(({slug}) => slug === params.term)
	if (!term) {
		return
	}
	const {title, about, slug, date} = term
	return {
		title,
		description: about,
		openGraph: {
			title,
			description: about,
			type: "article",
			publishedTime: date,
			url: `${siteData.url}/terms/${slug}`,
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
	}
}

interface Props {
	params: Param
}

function getTerm({term}: {term: string}): Term | null {
	const termItem = allTerms.find(({slug}) => slug === term)
	if (!termItem) {
		return null
	}
	return termItem
}

function TermPage({params}: Props) {
	const termItem = getTerm(params)
	if (!termItem) {
		return notFound()
	}

	return (
		<section className="pb-5">
			<PageTitle>
				<h1>{termItem.title}</h1>
			</PageTitle>
			<Mdx code={termItem.body.code} className="mb-5" />
		</section>
	)
}

export default TermPage
