import {type Metadata} from "next";
import Link from "next/link";

import {PageWrapper} from "@/components/page-wrapper";
import {H1} from "@/components/typography";

export const metadata: Metadata = {
  title: "Marcell Ciszek Druzynski",
  description: "Marcell Ciszek Druzynski, my personal website and blog.",
};

export default function HomePage() {
  return (
    <PageWrapper>
      <H1>Hi there! I&apos;m Marcell Ciszek Druzynski.</H1>
    </PageWrapper>
  );
}
