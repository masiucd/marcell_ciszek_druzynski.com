import {allPosts} from "contentlayer/generated";

export default async function sitemap() {
	const posts = allPosts.map((p) => ({
		url: `https://www.marcellcd.com/blog/${p.slug}`,
		lastModified: p.updated,
	}));
	const routes = ["", "/about", "/blog", "/terms"].map((route) => ({
		url: `https://www.marcellcd.com${route}`,
		lastModified: new Date().toISOString(),
	}));
	return [...routes, ...posts];
}
