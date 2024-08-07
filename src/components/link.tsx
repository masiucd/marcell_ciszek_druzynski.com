import NextLink, {type LinkProps} from "next/link";

import {cn} from "@/lib/cn";

export function LinkMCD<RouteType>({
  href,
  className,
  children,
}: LinkProps<RouteType>) {
  return (
    <NextLink
      href={href}
      className={cn(
        "underline text-link-light dark:text-link-dark underline-offset-2 hover:opacity-50 transition-opacity opacity-80",
        className,
      )}
    >
      {children}
    </NextLink>
  );
}
