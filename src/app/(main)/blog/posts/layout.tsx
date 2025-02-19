import {PageWrapper} from "~/src/components/page-wrapper";

export default function BlogPostLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <PageWrapper isBlogPost>{children}</PageWrapper>;
}
