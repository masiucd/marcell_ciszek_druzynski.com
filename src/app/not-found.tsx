import Link from "next/link";

import {TypographyH1} from "@/components/common/typography";
import PageWrapper from "@/components/page_wrapper";

function NotFoundPage() {
	return (
		<PageWrapper>
			<div className="flex flex-1 flex-col justify-center px-4 py-2">
				<TypographyH1>404 - Page Not Found</TypographyH1>
				<div className="flex flex-col gap-1 pl-3">
					<p>Sorry, the page you are looking for does not exist.</p>
					<p>Try going back to the previous page or go to the home page.</p>
					<Link
						href="/"
						className="w-20 rounded border px-2 py-1 text-center transition-[border,color]  duration-150 hover:border-blue-500 hover:text-blue-500"
					>
						<span className="flex-1 p-2 text-center">Home</span>
					</Link>
				</div>
			</div>
		</PageWrapper>
	);
}

export default NotFoundPage;
