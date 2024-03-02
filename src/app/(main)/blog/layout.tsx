import {type Metadata} from "next";
import {type ReactNode} from "react";

export const metadata: Metadata = {
  title: "Marcell Ciszek Druzynski | Blog",
  description: "Blog page",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
