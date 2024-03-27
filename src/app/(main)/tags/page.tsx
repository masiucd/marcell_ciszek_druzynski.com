import {type Metadata} from "next";
import Link from "next/link";

import {PageWrapper} from "@/components/page-wrapper";
import {H1, P} from "@/components/typography";
import siteData from "@/lib/config/site-data";
import {getAllPostData} from "@/lib/db";

export const metadata: Metadata = {
  title: `${siteData.title} | Tags`,
  description: "All tags used on my blog Marcell Ciszek Druzynski.",
};

function getAllTags() {
  const allPostData = getAllPostData();
  const allTags = allPostData.flatMap(({tags}) => tags.split(","));
  const trimmedTags = allTags.map((tag) => tag.trim());
  const uniqueTags = [...new Set(trimmedTags)];
  return uniqueTags;
}

export default function TagsPage() {
  let allTags = getAllTags();
  return (
    <PageWrapper>
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
        {allTags.map((tag) => (
          <li
            key={tag}
            className="capitalize text-gray-600 hover:opacity-50 dark:text-gray-400"
          >
            # <Link href={`/tags/${tag}`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}
