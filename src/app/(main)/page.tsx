import {PageWrapper} from "@/components/page-wrapper";
import {H1, Lead} from "@/components/typography";
import siteData from "~/src/config/site-data";

export default function Home() {
	return (
		<PageWrapper>
			<H1>Hi there! I'm {siteData.site.author}.</H1>
			<Lead>
				I'm a software engineer, web developer, and tech enthusiast. I write
				about web development, programming, and other tech-related topics.
			</Lead>

			<div className="border border-green-600 flex flex-1 justify-center items-center">
				<div className="grid max-w-3xl grid-cols-12 gap-5 border border-blue-400 p-2">
					<div className="col-span-8">
						github activity Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Consequatur doloremque aliquam in dolores commodi numquam
						iure, eius voluptatem rem obcaecati sed quis voluptates blanditiis
						rerum necessitatibus nisi suscipit provident cumque.
					</div>
					<div className="col-span-4">dev wisdom</div>
					<div className="col-span-6">now reading</div>
					<div className="col-span-6">now learning</div>
					<div className="col-span-12">recent posts</div>
				</div>
			</div>
		</PageWrapper>
	);
}
