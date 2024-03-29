import "./globals.css";

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {type ReactNode} from "react";

import {ThemeProvider} from "@/components/theme-provider";
import siteData from "@/lib/config/site-data";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: siteData.title,
  description: siteData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
