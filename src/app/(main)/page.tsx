import {type Metadata} from "next";
import Link from "next/link";

import {PageWrapper} from "@/components/page-wrapper";

export const metadata: Metadata = {
  title: "Marcell Ciszek Druzynski",
  description: "Marcell Ciszek Druzynski, my personal website and blog.",
};

export default function HomePage() {
  return (
    <PageWrapper>
      <h1>
        <Link href="/blog">Blog</Link>
      </h1>
    </PageWrapper>
  );
}
