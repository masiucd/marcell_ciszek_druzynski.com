import "./globals.css";

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {type ReactNode} from "react";

import {ThemeProvider} from "@/components/theme-provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Marcell Ciszek Druzynski",
  description: "Marcell Ciszek Druzynski, my personal website and blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
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
