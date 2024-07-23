import {Code} from "bright";
import {type Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";

import {Mdx} from "@/components/mdx";
import {PageWrapper} from "@/components/page-wrapper";
import {H1, Lead, P} from "@/components/typography";
import {cn} from "@/lib/cn";
import {formatDate} from "@/lib/date-format";
import {getAllPostData, getPost} from "@/lib/db";

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

export async function generateStaticParams() {
  let posts = getAllPostData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

Code.lineNumbers = true;
Code.theme = {
  dark: "poimandres",
  light: "poimandres",
};

type RequiredPostData = NonNullable<ReturnType<typeof getPost>>;
export default function PostPageSlug({params}: Props) {
  let post = getPost(params.slug);
  if (!post) {
    return notFound();
  }

  let {frontMatter, content, titles} = post;

  return (
    <PageWrapper className="px-0">
      <BlogHeader frontMatter={frontMatter} />
      <section className="flex justify-between px-2 sm:px-0 lg:flex-row lg:gap-36">
        <article
          className="prose prose-base prose-stone m-auto mt-4 flex max-w-2xl  flex-col overflow-hidden border-t-2 pt-8 dark:prose-invert"
          data-mdx="post-content"
        >
          <Mdx content={content} />
        </article>
        <aside className="sticky top-32 hidden max-h-[34rem] min-w-72 flex-col pl-2 lg:flex">
          <TableOfContents titles={titles} title="Table of contents" />
        </aside>
      </section>
    </PageWrapper>
  );
}

function BlogHeader({
  frontMatter,
}: {
  frontMatter: RequiredPostData["frontMatter"];
}) {
  return (
    <div className="mt-10 flex flex-col gap-4  border-t-2 border-gray-800 bg-transparent p-1 px-2 py-20 text-gray-700">
      <div className="flex min-h-60 flex-col justify-center gap-5 bg-blog-title-bg-light dark:bg-blog-title-bg-dark">
        <H1 className="text-pretty   text-6xl  font-bold  tracking-tighter  lg:text-7xl ">
          {frontMatter.title}
        </H1>
        <Lead className="leading-8 dark:text-gray-200 md:pr-44">
          {frontMatter.about}
        </Lead>
      </div>
      <div className="flex items-center gap-10 ">
        <P className="font-semibold  opacity-80 dark:text-gray-200">
          {formatDate(frontMatter.date)}
        </P>
        <Tags className="dark:text-gray-100" tags={frontMatter.tags} />
      </div>
    </div>
  );
}

function Tags({tags, className}: {tags: string[]; className?: string}) {
  return (
    <ul className="flex max-w-lg flex-wrap gap-2">
      {tags.map((tag) => (
        <li className="text-sm font-semibold uppercase " key={tag}>
          <Link
            className={cn(
              "text-gray-600  opacity-65 transition-opacity duration-200 ease-in-out hover:opacity-50 dark:text-gray-400",
              className,
            )}
            href={`/tags/${tag}`}
          >
            #{removeHyphen(tag)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function removeHyphen(input: string) {
  return input.replace(/-/g, " ");
}
