import type {Metadata} from "next"

import PageTitle from "@/components/common/page_title"

export const metadata: Metadata = {
	title: "About",
	description: "About me",
}

function AboutPage() {
	return (
		<div>
			<PageTitle title="About" />
			<p>Coming soon...</p>
		</div>
	)
}

export default AboutPage
