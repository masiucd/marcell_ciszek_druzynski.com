import {ReactNode} from "react"

import PageWrapper from "@/components/page_wrapper"

import MarketingFooter from "./components/marketing_footer"
import MarketingHeader from "./components/marketing_header"

interface Props {
	children: ReactNode
}

export default function MarketingLayout({children}: Props) {
	return (
		<>
			<MarketingHeader />
			<PageWrapper>{children}</PageWrapper>

			<MarketingFooter />
		</>
	)
}
