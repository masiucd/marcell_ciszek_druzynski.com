import Link from "next/link";

import {PageWrapper} from "@/components/page-wrapper";
import {PostsList} from "@/components/posts-list";
import {H1} from "@/components/typography";
import {getAllPostData} from "@/lib/db";

function getPostsByTag(tag: string) {
  return getAllPostData().filter((p) => p.tags.includes(tag));
}

export async function generateStaticParams() {
  let tags = getAllPostData().flatMap(({tags}) => tags);
  return [...new Set(tags)].map((tag) => ({
    tag,
  }));
}

export default async function TagSlugPage(props: {params: Promise<{tag: string}>}) {
  const params = await props.params;
  let posts = getPostsByTag(params.tag);
  return (
    <PageWrapper>
      <section className="my-10 flex flex-col gap-2 md:max-w-2xl">
        <H1>
          All Post by tag{" "}
          <span className="uppercase text-gray-400 dark:text-gray-600">
            #{params.tag}
          </span>
        </H1>
        <Link href="/tags">
          <span className="text-gray-500 hover:underline">All tags</span>
        </Link>
      </section>
      <PostsList posts={posts} />
    </PageWrapper>
  );
}
