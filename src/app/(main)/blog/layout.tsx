import {type Metadata} from "next";
import {type ReactNode} from "react";

import siteData from "@/lib/config/site-data";

export const metadata: Metadata = {
  title: `${siteData.title} | Blog`,
  description: "Blog page",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
