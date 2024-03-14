import {Code} from "bright";
import {format} from "date-fns";
import {notFound} from "next/navigation";
import {MDXRemote} from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";

import {PageWrapper} from "@/components/page-wrapper";
import {H1, Lead, P} from "@/components/typography";
import {getPost} from "@/lib/db";

import {TableOfContents} from "./table-of-contents";

Code.lineNumbers = true;
Code.theme = {
  dark: "github-dark",
  light: "github-light",
};

export default function PostPageSlug({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = getPost(params.slug);
  if (!post) {
    return notFound();
  }

  let {frontMatter, content} = post;

  return (
    <PageWrapper>
      <div className="flex flex-col gap-4 border-t-2 border-gray-800 bg-gray-200 p-1 py-28 text-gray-700">
        <h1 className="mb-10  text-6xl font-bold tracking-tighter md:text-[7rem] lg:text-[8rem] ">
          {frontMatter.title}
        </h1>
        <Lead className="leading-8 md:pr-44">{frontMatter.about}</Lead>
        <div className="flex items-center gap-10 border border-red-300">
          <P>{format(frontMatter.date, "MMMM dd, yyyy")}</P>
          <ul className="p-0">
            {frontMatter.tags.map((tag) => (
              <li className="capitalize" key={tag}>
                #{tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <section className="flex justify-between lg:flex-row lg:gap-36">
        <article
          className="prose prose-lg m-auto mt-4 flex max-w-2xl  flex-col overflow-hidden border-t-2 pt-8 dark:prose-invert"
          data-mdx="post-content"
        >
          <MDXRemote
            source={content}
            components={{
              pre: Code,
            }}
            // options={{rehypePlugins: [require("rehype-slug")]}}
            options={{
              mdxOptions: {
                rehypePlugins: [rehypeSlug],
              },
            }}
          />
        </article>
        <aside className="sticky top-0 hidden max-h-[34rem]   min-w-72 flex-col pl-2 lg:flex">
          <TableOfContents title="Table of contents" />
        </aside>
      </section>
    </PageWrapper>
  );
}
