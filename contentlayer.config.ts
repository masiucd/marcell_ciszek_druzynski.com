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
	filePathPattern: `terms/*.mdx`,
	contentType: "mdx",
	fields: documentFields("term"),
	computedFields: {
		url: {
			type: "string",
			resolve: (term) => `/terms/${term._raw.flattenedPath}`,
		},
		slug: {
			type: "string",
			resolve: (term) => term._raw.flattenedPath,
		},
	},
}))

export const Post = defineDocumentType(() => ({
	name: "Post",
	// filePathPattern: `**/*.mdx`,
	filePathPattern: `blog_posts/*.mdx`,
	contentType: "mdx",
	fields: documentFields("post"),
	computedFields: {
		url: {
			type: "string",
			resolve: (post) => `/blog/${post._raw.flattenedPath}`,
		},
		slug: {
			type: "string",
			resolve: (post) => post._raw.flattenedPath,
		},
	},
}))

export default makeSource({
	contentDirPath: "content",
	documentTypes: [Term, Post],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: "one-dark-pro",
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
