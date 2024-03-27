import {type ReactNode} from "react";

import {cn} from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  fluid?: boolean;
};

export function PageWrapper({children, className, fluid}: Props) {
  return (
    <section
      className={cn(
        "mx-auto w-full flex flex-col flex-1 px-2",
        fluid ? "max-w-none" : "app-width",
        className,
      )}
    >
      {children}
    </section>
  );
}
