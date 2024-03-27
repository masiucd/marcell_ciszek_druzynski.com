import {type Metadata} from "next";

import {PageWrapper} from "@/components/page-wrapper";
import {PostsList} from "@/components/posts-list";
import {H1, Lead} from "@/components/typography";
import siteData from "@/lib/config/site-data";
import {getAllPostData} from "@/lib/db";

export const metadata: Metadata = {
  title: `${siteData.title} | Blog`,
  description:
    "My blog, here where I share my thoughts and ideas about software development, JavaScript, React and other computer science topics.",
};

export default function BlogPage() {
  let posts = getAllPostData();
  return (
    <PageWrapper>
      <section className="my-10 flex flex-col gap-2 md:max-w-2xl">
        <H1>My Blog</H1>
        <Lead>
          Here where I share my thoughts and ideas about software development,
          JavaScript, React and other computer science topics.
        </Lead>
      </section>
      <PostsList posts={posts} />
    </PageWrapper>
  );
}
