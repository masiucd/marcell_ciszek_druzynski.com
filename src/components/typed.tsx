"use client";

import {ReactTyped} from "react-typed";

type Props = {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  attr?: string;
  loop?: boolean;
};

export function Typed({strings}: Props) {
  return (
    // <ReactTyped
    //   startWhenVisible
    //   className="text-gray-700 dark:text-gray-300"
    //   strings={[
    //     "I am a software developer.",
    //     "I love JavaScript and React.",
    //     "I write about software development.",
    //   ]}
    //   // backSpeed={50}
    //   // typeSpeed={40}
    //   typeSpeed={400}
    //   loop
    // />

    <ReactTyped
      startWhenVisible
      strings={[
        "If <strong>startWhenVisible</strong> is <strong>true</strong>, will start when is visible in the dom",
      ]}
      typeSpeed={40}
      loop
    />
  );
}
