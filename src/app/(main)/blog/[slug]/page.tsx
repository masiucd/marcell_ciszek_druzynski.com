import {Code} from "bright";
import {notFound} from "next/navigation";
import {MDXRemote} from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";

import {PageWrapper} from "@/components/page-wrapper";
import {Lead, P} from "@/components/typography";
import {getPost, slugify} from "@/lib/db";

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

  let {frontMatter, content, titles} = post;
  return (
    // <PageWrapper className="max-w-none  md:max-w-7xl">
    <PageWrapper>
      <section className="bg-gray-800 text-white">
        <h1>{frontMatter.title}</h1>
        <p>{frontMatter.date}</p>
        <p>{frontMatter.about}</p>
        <ul>
          {frontMatter.tags.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>
      <section className="flex justify-between border border-green-500">
        {/* class="flex flex-col border-dark border-t-2 dark:border-off-white dark:prose-invert m-auto max-w-2xl md:prose-xl mt-4 overflow-hidden prose prose-lg pt-8" */}
        <article className="prose-sm m-auto flex max-w-none flex-col  dark:prose-invert md:prose-base">
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
        {/* class="pr-4 basis-[20%] flex-col hidden items-end max-h-[calc(100vh_-_13rem)] overflow-auto scrollbar sticky top-0 xl:flex" */}
        <aside className="sticky top-0 flex max-h-[32rem]  basis-[100%] flex-col border border-red-600 pl-2 xl:flex">
          <Lead>Table of contents</Lead>
          <ul className="flex flex-col gap-2 pl-2">
            {titles.map((x) => (
              <li key={x}>
                <a href={`#${slugify(x)}`}>{x}</a>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </PageWrapper>
  );
}
