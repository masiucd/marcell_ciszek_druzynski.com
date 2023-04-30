import {allTerms, Term} from "contentlayer/generated"
import {notFound} from "next/navigation"
import {Metadata} from "next/types"

import Dates from "@/components/common/dates"
import ListItem from "@/components/common/list_item"
import PageTitle from "@/components/common/page_title"
import TagItem from "@/components/common/tag_item"
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
		<section className="mb-5">
			<PageTitle className="mx-auto flex max-w-2xl flex-col gap-2 px-5 ">
				<h1 className="border-b-2 border-slate-900 text-5xl font-bold ">
					{termItem.title}
				</h1>
				<div className="mr-auto flex w-full gap-5">
					<Dates created={termItem.date} updated={termItem.updated} />
					<ul className="flex gap-2">
						{termItem.tags.map((tag) => (
							<ListItem key={tag}>
								<TagItem href={`/blog/tags/${tag}`} tag={tag} />
							</ListItem>
						))}
					</ul>
				</div>
			</PageTitle>
			<Mdx code={termItem.body.code} className="mb-5" />
		</section>
	)
}

export default TermPage
