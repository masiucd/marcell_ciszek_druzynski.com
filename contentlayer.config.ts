import {
	defineDocumentType,
	FieldDefs,
	makeSource,
} from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const documentFields = (document: string): FieldDefs => ({
	title: {
		type: "string",
		description: `Title of the ${document}`,
		required: true,
	},
	about: {
		type: "string",
		description: `The about of the ${document}`,
		required: true,
	},
	date: {
		type: "date",
		description: `The date of the ${document} when it was published`,
		required: true,
	},
	updated: {
		type: "date",
		description: `The date when the ${document} was updated`,
		required: true,
	},
	tags: {
		type: "list",
		of: {type: "string"},
		required: true,
	},
});

export const Bite = defineDocumentType(() => ({
	name: "Bite",
	filePathPattern: `bites/**/*.mdx`,
	contentType: "mdx",
	fields: documentFields("term"),
	computedFields: {
		url: {
			type: "string",
			resolve: (term) =>
				`/bites/${term._raw.flattenedPath.replace("bites/", "")}`,
		},
		slug: {
			type: "string",
			resolve: (term) => term._raw.flattenedPath.replace("bites/", ""),
		},
	},
}));

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: `posts/**/*.mdx`,
	// filePathPattern: `**/*.mdx`,

	contentType: "mdx",
	fields: documentFields("post"),
	computedFields: {
		url: {
			type: "string",
			resolve: (post) => post._raw.flattenedPath.replace("posts/", "/blog/"),
		},
		slug: {
			type: "string",
			resolve: (post) => post._raw.flattenedPath.replace("posts/", ""),
		},
	},
}));

export default makeSource({
	contentDirPath: "content",
	documentTypes: [Post, Bite],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					// link to different themes https://github.com/shikijs/shiki/blob/main/docs/themes.md

					// theme: {
					// 	// dark: "github-dark",
					// 	dark: "github-dark-dimmed",
					// 	light: "github-light",
					// },
					theme: "github-dark-dimmed",
					onVisitLine(node: Record<string, any>) {
						// Prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children.length === 0) {
							node.children = [{type: "text", value: " "}];
						}
					},
					onVisitHighlightedLine(node: Record<string, any>) {
						node.properties.className.push("line--highlighted");
					},
					onVisitHighlightedWord(node: Record<string, any>) {
						node.properties.className = ["word--highlighted"];
					},
				},
			],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ["anchor"],
					},
				},
			],
		],
	},
});
