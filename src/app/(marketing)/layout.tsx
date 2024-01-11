import {ReactNode} from "react";

import PageWrapper from "@/components/page-wrapper";

import Footer from "./components/footer";
import Header from "./components/header";

type Props = {
	children: ReactNode;
};

export default function MarketingLayout({children}: Props) {
	return (
		<>
			<Header />
			<PageWrapper>{children}</PageWrapper>
			<Footer />
		</>
	);
}
