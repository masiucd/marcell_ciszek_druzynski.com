import Ctas from "@/components/not_found/ctas";
import PageWrapper from "@/components/page_wrapper";

const NotFoundPage = () => {
	return (
		<PageWrapper>
			<div className="flex flex-1 flex-col justify-center px-4 py-2">
				<h1>404 - Page Not Found</h1>
				<div className="pl-10">
					<p>Sorry, the page you are looking for does not exist.</p>
					<p>Try going back to the previous page or go to the home page.</p>
				</div>
				<Ctas />
			</div>
		</PageWrapper>
	);
};

export default NotFoundPage;
