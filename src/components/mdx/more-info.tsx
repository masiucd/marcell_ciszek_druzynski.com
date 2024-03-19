"use client";
import {type PropsWithChildren} from "react";

import {useToggle} from "@/lib/hooks/toggle";

import {Large, Lead} from "../typography";

type Props = {
  title: string;
  description: string;
};

export function MoreInfo(props: PropsWithChildren<Props>) {
  let [on, {toggle}] = useToggle(false);
  return (
    <div className="rounded-sm border border-primary-500 bg-gray-200 dark:border-primary-400 dark:bg-gray-800">
      <div className="flex flex-col gap-2 px-2 py-1">
        <Large className="m-0">{props.title}</Large>
        <Lead className="my-0 text-base">{props.description}</Lead>
        <button
          className="relative w-32 rounded-sm border border-gray-950 bg-gray-200  transition-all hover:opacity-60 active:top-1 active:ring-4 dark:border-gray-500 dark:bg-gray-800"
          type="button"
          onClick={toggle}
        >
          Read More {on ? <span>&#8593;</span> : <span>&#8595;</span>}
        </button>
      </div>
      {on && <div className="p-2 ">{props.children}</div>}
    </div>
  );
}
