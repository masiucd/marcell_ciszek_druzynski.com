import {Code} from "bright";
import {format} from "date-fns";
import {type Metadata} from "next";
// import {type Metadata, type ResolvingMetadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {MDXRemote} from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";

import {PageWrapper} from "@/components/page-wrapper";
import {H1, Lead, P} from "@/components/typography";
import {getPost} from "@/lib/db";

import {TableOfContents} from "./table-of-contents";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  {params}: Props,
  // parent: ResolvingMetadata,
): Promise<Metadata> {
  let {slug} = params;
  // let x = await parent;

  return {
    title: `Marcell Ciszek Druzynski | ${slug}`,
    description: `Marcell Ciszek Druzynski | Blog post - ${slug}.`,
  };
}

Code.lineNumbers = true;
Code.theme = {
  dark: "github-dark",
  light: "github-light",
};

export default function PostPageSlug({params}: Props) {
  let post = getPost(params.slug);
  if (!post) {
    return notFound();
  }

  let {frontMatter, content} = post;

  return (
    <PageWrapper>
      <div className="mt-10 flex flex-col gap-4  border-t-2 border-gray-800 bg-transparent p-1 py-20 text-gray-700">
        <div className="flex min-h-60 flex-col justify-center gap-5 bg-blog-title-bg-light dark:bg-blog-title-bg-dark">
          <H1 className="text-pretty   font-bold  tracking-tighter  sm:text-6xl md:text-[6rem] lg:text-[7rem] ">
            {frontMatter.title}
          </H1>
          <Lead className="leading-8  md:pr-44">{frontMatter.about}</Lead>
        </div>
        <div className="flex items-center gap-10">
          <P className="font-semibold opacity-80">
            {format(frontMatter.date, "MMMM dd, yyyy")}
          </P>
          <ul className="flex gap-2">
            {frontMatter.tags.map((tag) => (
              <li className="font-semibold uppercase" key={tag}>
                <Link
                  className="text-gray-600 underline underline-offset-2 opacity-65 transition-opacity duration-200 ease-in-out hover:opacity-100 dark:text-gray-400"
                  href={`/tags/${tag}}`}
                >
                  #{removeHyphen(tag)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <section className="flex justify-between lg:flex-row lg:gap-36">
        <article
          className="prose prose-base m-auto mt-4 flex max-w-2xl  flex-col overflow-hidden border-t-2 pt-8 dark:prose-invert"
          data-mdx="post-content"
        >
          <MDXRemote
            source={content}
            components={{
              pre: Code,
              MoreInfo: () => null,
              Quiz: () => null,
              CodePen: () => null,
            }}
            // options={{rehypePlugins: [require("rehype-slug")]}}
            options={{
              mdxOptions: {
                rehypePlugins: [rehypeSlug],
              },
            }}
          />
        </article>
        <aside className="sticky top-32 hidden max-h-[34rem] min-w-72 flex-col pl-2 lg:flex">
          <TableOfContents title="Table of contents" />
        </aside>
      </section>
    </PageWrapper>
  );
}

function removeHyphen(input: string) {
  return input.replace(/-/g, " ");
}
