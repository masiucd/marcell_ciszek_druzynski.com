import {type Metadata} from "next";
import Link from "next/link";

import {LinkMCD} from "@/components/link";
import Mcd from "@/components/mcd";
import {PageWrapper} from "@/components/page-wrapper";
import {Typed} from "@/components/typed";
import {H1, P} from "@/components/typography";

export const metadata: Metadata = {
  title: "Marcell Ciszek Druzynski",
  description: "Marcell Ciszek Druzynski, my personal website and blog.",
};

export default function HomePage() {
  return (
    <PageWrapper className="justify-center border border-red-400">
      <aside className="flex flex-col gap-2 md:max-w-2xl">
        <H1 className="text-pretty">
          Hi there! I&apos;m <Mcd />.
        </H1>
        <P className="text-pretty">
          I&apos;m a software developer and here where I share my thoughts and
          ideas about software development, JavaScript, React and other computer
          science topics.
        </P>
        <div className="flex gap-2">
          <LinkMCD href="/about">
            <strong>About me</strong>
          </LinkMCD>
          <LinkMCD href="/blog">
            <strong>Blog</strong>
          </LinkMCD>
        </div>
      </aside>
    </PageWrapper>
  );
}
