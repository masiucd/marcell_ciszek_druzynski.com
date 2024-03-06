"use client";
import {useEffect, useState} from "react";

import {Lead} from "@/components/typography";
import {cn} from "@/lib/cn";
import {useScrollSpy} from "@/lib/hooks/scroll-spy";
import {slugify} from "@/lib/slugify";

type Heading = {
  id: string;
  title: string;
  level: number;
};

export function TableOfContents({title}: {title: string}) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  let activeId = useScrollSpy(
    headings.map((h) => h.id),
    {rootMargin: "0% 0% -80% 0%"},
  );

  useEffect(() => {
    let xs = Array.from(document.querySelectorAll("h2, h3, h4, h5, h6"))
      .filter((x) => x.id)
      .map((x) => ({
        id: x.id,
        title: x.textContent ?? "",
        level: Number(x.tagName.substring(1)),
      }));
    setHeadings(xs);
  }, []);

  return (
    <>
      <Lead>{title}</Lead>
      <ul className="flex flex-col gap-2 pl-1">
        {headings.map((x) => (
          <li
            key={x.id}
            className={cn(
              "text-gray-700 transition-all duration-200 ease-in-out",
              x.level === 2 && "ml-1",
              x.level === 3 && "ml-2",
              x.level === 4 && "ml-3",
              x.level === 5 && "ml-4",
              x.level === 6 && "ml-5",
              activeId === x.id &&
                "font-bold underline text-gray-900 underline-offset-1",
            )}
          >
            <a
              // className="text-gray-800"
              href={`#${slugify(x.title)}`}
            >
              {x.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
