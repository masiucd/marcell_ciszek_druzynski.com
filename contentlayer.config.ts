import {defineDocumentType, makeSource} from "contentlayer/source-files"
// import rehypeAutolinkHeadings from "rehype-autolink-headings"
// import rehypePrettyCode from "rehype-pretty-code"
// import rehypeSlug from "rehype-slug"
// import remarkGfm from "remark-gfm"
import highlight from "rehype-highlight"

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
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: post => `/posts/${post._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: post => post._raw.flattenedPath,
    },
  },
}))

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [highlight],
  },
})
