import {defineDocumentType, makeSource} from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: `**/*.mdx`,
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			description: "The title of the post",
			required: true,
		},
		about: {
			type: "string",
			description: "The about of the post",
			required: true,
		},
		date: {
			type: "date",
			description: "The date of the post when it was published",
			required: true,
		},
		updated: {
			type: "date",
			description: "The date when the post was updated",
			required: true,
		},
		tags: {
			type: "list",
			of: {type: "string"},
			required: true,
		},
	},
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
	contentDirPath: "posts",
	documentTypes: [Post],
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
