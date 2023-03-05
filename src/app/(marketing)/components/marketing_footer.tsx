import HighlightWrapper from "@/components/common/highlighter"
import {siteData} from "@/config/site_data"

export default function MarketingFooter() {
	return (
		<footer className="w-full bg-white px-2 dark:bg-black dark:text-white">
			<div className="mx-auto flex max-w-4xl items-center justify-between py-2">
				<small>
					Made by Marcell Ciszek Druzynski built with{" "}
					<HighlightWrapper>Next js</HighlightWrapper>, Typeset{" "}
					<HighlightWrapper>
						{siteData.fontMono} and {siteData.fontTitle}
					</HighlightWrapper>
					. Deployed on <HighlightWrapper>Vercel</HighlightWrapper>{" "}
				</small>
			</div>
		</footer>
	)
}
