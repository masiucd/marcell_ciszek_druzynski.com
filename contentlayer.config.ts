import {
	defineDocumentType,
	FieldDefs,
	makeSource,
} from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

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
})

export const Term = defineDocumentType(() => ({
	name: "Term",
	filePathPattern: `terms/**/*.mdx`,
	contentType: "mdx",
	fields: documentFields("term"),
	computedFields: {
		url: {
			type: "string",
			resolve: (term) =>
				`/terms/${term._raw.flattenedPath.replace("terms/", "")}`,
		},
		slug: {
			type: "string",
			resolve: (term) => term._raw.flattenedPath.replace("terms/", ""),
		},
	},
}))

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
}))

export default makeSource({
	contentDirPath: "content",
	documentTypes: [Post, Term],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					// link to different themes https://github.com/shikijs/shiki/blob/main/docs/themes.md
					theme: "github-dark",
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
})
