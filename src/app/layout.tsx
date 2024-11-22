import "./globals.css";

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import type {ReactNode} from "react";

import {ThemeProvider} from "@/components/theme-provider";
import siteData from "@/lib/config/site-data";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.url),
  title: {
    default: siteData.title,
    template: `%s | ${siteData.title}`,
  },
  description: siteData.description,
  openGraph: {
    title: siteData.title,
    description: siteData.description,
    url: siteData.url,
    siteName: siteData.title,
    locale: "en_US",
    type: "website",
    images: "/icons/next.svg", // TODO Update this to your own logo
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: siteData.title,
    card: "summary_large_image",
    creator: siteData.twitter.creator,
    description: siteData.description,
    images: {
      url: "/icons/next.svg", // TODO Update this to your own logo
      alt: `${siteData.title} logo`,
    },
  },
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
