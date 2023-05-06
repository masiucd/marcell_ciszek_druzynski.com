import {ReactNode} from "react";

import PageWrapper from "@/components/page_wrapper";

import Footer from "./components/footer";
import Header from "./components/header";

interface Props {
	children: ReactNode;
}

export default function MarketingLayout({children}: Props) {
	return (
		<>
			<Header />
			<PageWrapper>{children}</PageWrapper>
			<Footer />
		</>
	);
}
