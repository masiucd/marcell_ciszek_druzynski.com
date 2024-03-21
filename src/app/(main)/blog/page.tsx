import {type Metadata} from "next";

import {LinkMCD} from "@/components/link";
import {PageWrapper} from "@/components/page-wrapper";
import {H1, Lead} from "@/components/typography";
import {formatDate} from "@/lib/date-format";
import {getAllPostData} from "@/lib/db";

export const metadata: Metadata = {
  title: "Marcell Ciszek Druzynski | Blog",
  description:
    "My blog, here where I share my thoughts and ideas about software development, JavaScript, React and other computer science topics.",
};

export default function BlogPage() {
  let posts = getAllPostData();
  return (
    <PageWrapper className="px-2 sm:px-0">
      <section className="my-10 flex flex-col gap-2 md:max-w-2xl">
        <H1>My Blog</H1>
        <Lead>
          Here where I share my thoughts and ideas about software development,
          JavaScript, React and other computer science topics.
        </Lead>
      </section>
      <ul className="mb-10 flex flex-col gap-4">
        {posts.map((post) => (
          <li key={post.slug} className="flex flex-col gap-1 ">
            <LinkMCD
              href={`/blog/${post.slug}`}
              className="no-underline hover:text-primary-500 hover:opacity-90 dark:text-gray-400 dark:hover:text-primary-300"
            >
              {post.title}
            </LinkMCD>
            <span className="opacity-75">
              {formatDate(post.date, "MMMM dd, yyyy")}
            </span>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}
