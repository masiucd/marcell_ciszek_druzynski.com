import Link from "next/link";
import {PropsWithChildren} from "react";

import {cn} from "@/lib/cn";

type Props = {
  href: string;
  className?: string;
};

export function LinkMCD({href, className, children}: PropsWithChildren<Props>) {
  return (
    <Link
      href={href}
      className={cn(
        "underline text-link-light dark:text-link-dark underline-offset-2 hover:opacity-50 transition-opacity opacity-80",
        className,
      )}
    >
      {children}
    </Link>
  );
}
