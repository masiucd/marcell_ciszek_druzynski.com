import Ctas from "@/components/not_found/ctas"

const NotFoundPage = () => {
	return (
		<main>
			<div>
				<h1>404 - Page Not Found</h1>
				<div>
					<p>Sorry, the page you are looking for does not exist.</p>
					<p>Try going back to the previous page or go to the home page.</p>
				</div>
				<Ctas />
			</div>
		</main>
	)
}

export default NotFoundPage
