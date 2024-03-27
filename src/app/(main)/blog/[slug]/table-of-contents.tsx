"use client";
import Link from "next/link";

import {Lead} from "@/components/typography";
import {cn} from "@/lib/cn";
import {useScrollSpy} from "@/lib/hooks/scroll-spy";
import {slugify} from "@/lib/slugify";

let titleToExclude = ["resources", "summery"];

type Props = {
  title: string;
  titles: {
    id: string;
    title: string;
    level: number;
  }[];
};

export function TableOfContents({title, titles}: Props) {
  let activeId = useScrollSpy(
    titles.map(({id}) => id),
    {
      threshold: 1,
      rootMargin: "0% 0% -90% 0%",
    },
  );
  return (
    <>
      <Lead className="mb-2 capitalize">{title}</Lead>
      <ul className="flex flex-col gap-2 pl-1">
        {titles
          .filter(({title}) => !titleToExclude.includes(title.toLowerCase()))
          .map(({id, level, title}) => (
            <li
              key={id}
              className={cn(
                "text-gray-600 transition-all duration-200 ease-in-out",
                activeId === id &&
                  "font-bold underline text-gray-900 dark:text-gray-100 underline-offset-1",
                activeId === id &&
                  level === 2 &&
                  "pl-1 border-l-2 border-primary-500",
                activeId === id &&
                  level === 3 &&
                  "pl-1 border-l-2 border-primary-500",
                activeId === id &&
                  level === 4 &&
                  "pl-1 border-l-2 border-primary-500",
                activeId === id &&
                  level === 5 &&
                  "pl-1 border-l-2 border-primary-500",
                activeId === id &&
                  level === 6 &&
                  "pl-1 border-l-2 border-primary-500",
              )}
            >
              <Link
                className="text-sm"
                href={`#${slugify(title)}`}
                replace
                prefetch={false}
              >
                <span>{title}</span>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
