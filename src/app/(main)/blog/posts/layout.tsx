import {PageWrapper} from "@/components/page-wrapper";

export default function BlogPostLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <PageWrapper isBlogPost>{children}</PageWrapper>;
}
