import {type Metadata} from "next";
import Link from "next/link";

import {PageWrapper} from "@/components/page-wrapper";
import {H1, P} from "@/components/typography";
import {getAllPostData} from "@/lib/db";

export const metadata: Metadata = {
  title: "Marcell Ciszek Druzynski | Tags",
  description: "All tags used on my blog Marcell Ciszek Druzynski.",
};

function getAllTags() {
  return [...new Set(getAllPostData().flatMap(({tags}) => tags.split(",")))];
}

export default function TagsPage() {
  let allTags = getAllTags();
  return (
    <PageWrapper className="px-2 sm:px-0">
      <aside className="my-5 space-y-3">
        <H1>Tags</H1>
        <P>
          All tags used on my blog{" "}
          <span className="font-semibold text-gray-500">
            Marcell Ciszek Druzynski
          </span>
          . Click on a tag to see all posts with that tag.
        </P>
      </aside>
      <ul className="flex flex-col gap-2">
        {allTags.map((tag) => {
          console.log("🚀 ~ {allTags.map ~ tag:", tag);
          return (
            <li
              key={tag}
              className="capitalize text-gray-600 hover:opacity-50 dark:text-gray-400"
            >
              # <Link href={`/tags/${tag}`}>{tag}</Link>
            </li>
          );
        })}
      </ul>
    </PageWrapper>
  );
}
