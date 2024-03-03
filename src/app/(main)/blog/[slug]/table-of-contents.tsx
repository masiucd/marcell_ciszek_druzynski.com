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

  let activeId = "";
  // let activeId = useScrollSpy(titles, {rootMargin: "0% 0% -80% 0%"});

  useEffect(() => {
    let xs = Array.from(document.querySelectorAll("h2,h3,h4,h5,h6"))
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
      <ul className="flex flex-col gap-2 pl-2">
        {headings.map((x) => {
          console.log("🚀 ~ {headings.map ~ x:", x);
          return (
            <li
              key={x.id}
              className={cn(
                "",
                x.level === 2 && "ml-2",
                x.level === 3 && "ml-3",
                activeId,
              )}
            >
              <a href={`#${slugify(x.title)}`}>{x.title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
