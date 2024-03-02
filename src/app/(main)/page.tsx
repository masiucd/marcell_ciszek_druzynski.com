import Link from "next/link";

import {PageWrapper} from "@/components/page-wrapper";

export default function Home() {
  return (
    <PageWrapper>
      <h1>
        <Link href="/blog">Blog</Link>
      </h1>
    </PageWrapper>
  );
}
