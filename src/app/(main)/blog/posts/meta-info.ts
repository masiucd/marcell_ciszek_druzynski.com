import fs from "node:fs";
import { join } from "node:path";
import { z } from "zod";
export { metadata as DxMetaData } from "./dx/page.mdx";
export { metadata as postFooMetaData } from "./post-foo/page.mdx";

// export {DxMetaData, postFooMetaData}

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

let CURRENT_WORKING_DIRECTORY = process.cwd();
export function getMetaDataFromBlogPosts() {
  // let blogPostsDirNames = ["dx", "post-foo"];
  let blogPostsDirNames = fs
    .readdirSync(
      join(CURRENT_WORKING_DIRECTORY, "src", "app", "(main)", "blog", "posts")
    )
    .filter((dirName) => dirName !== "meta-info.ts");
  let blogPostsMetaData = blogPostsDirNames.map((dirName) => {
    let { metadata } = require(`./${dirName}/page.mdx`);
    return FrontMatterSchema.parse(metadata);
  });
  return blogPostsMetaData.toSorted((a, b) => {
    return a.frontMatter.created > b.frontMatter.created ? -1 : 1;
  });
  // return {};
}
