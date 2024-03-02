import Link from "next/link";

import {PageWrapper} from "@/components/page-wrapper";
import {getAllPostData} from "@/lib/db";

export default function BlogPage() {
  let posts = getAllPostData();
  return (
    <PageWrapper>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}
