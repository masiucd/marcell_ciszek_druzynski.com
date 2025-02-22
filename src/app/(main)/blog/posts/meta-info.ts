import fs from "node:fs";
import {join} from "node:path";
import {z} from "zod";
export {metadata as DxMetaData} from "./dx/page.mdx";
export {metadata as postFooMetaData} from "./post-foo/page.mdx";

let FrontMatterSchema = z.object({
	title: z.string(),
	frontMatter: z.object({
		postTitle: z.string(),
		tags: z.array(z.string()),
		excerpt: z.string(),
		slug: z.string(),
		created: z.string(),
		updated: z.string(),
	}),
});

/**
 * Retrieves metadata from blog posts.
 *
 * This function reads the directory names of blog posts from the specified directory,
 * filters out any excluded file names, and then maps each directory name to its corresponding
 * metadata by requiring the `page.mdx` file within each directory. The metadata is then parsed
 * using the `FrontMatterSchema` and sorted by the creation date in descending order.
 *
 * @returns {Array} An array of blog post metadata objects, sorted by creation date in descending order.
 */
export function getMetaDataFromBlogPosts() {
	let blogPostsDirNames = getBlogPostsByDirname();
	let blogPostsMetaData = blogPostsDirNames.map((dirName) => {
		let {metadata} = require(`./${dirName}/page.mdx`);
		return FrontMatterSchema.parse(metadata);
	});
	return blogPostsMetaData.toSorted((a, b) => {
		return a.frontMatter.created > b.frontMatter.created ? -1 : 1;
	});
}

let CURRENT_WORKING_DIRECTORY = process.cwd();
const EXCLUDED_FILE_NAMES = new Set(["meta-info.ts", "layout.tsx"]);

/**
 * Retrieves the list of blog post directories by reading the specified directory
 * and filtering out any excluded file names.
 *
 * @returns {string[]} An array of directory names representing blog posts.
 */
function getBlogPostsByDirname() {
	// TODO error handling
	return fs
		.readdirSync(
			join(CURRENT_WORKING_DIRECTORY, "src", "app", "(main)", "blog", "posts"),
		)
		.filter((dirName) => !EXCLUDED_FILE_NAMES.has(dirName));
}
