import Link from "next/link";
import {type ReactNode} from "react";

import {LinkMCD} from "@/components/link";
import {ThemeButton} from "@/components/theme-button";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <header className="flex h-24 border border-gray-700 ">
        <div className="app-width mx-auto  flex flex-1 items-center justify-between border border-blue-400">
          <Link href="/">
            <strong className="text-sm font-bold">
              Marcell Ciszek Druzynski
            </strong>
          </Link>
          <div className="flex items-center gap-5">
            <nav>
              <ul className="flex gap-2">
                <li>
                  <LinkMCD className="text-sm" href="/blog">
                    Blog
                  </LinkMCD>
                </li>
                <li>
                  <LinkMCD className="text-sm" href="/about">
                    About
                  </LinkMCD>
                </li>
              </ul>
            </nav>
            <ThemeButton />
          </div>
        </div>
      </header>
      <main className="flex min-h-[calc(100dvh-12rem)] flex-col">
        {children}
      </main>
      <footer className="flex h-24 border border-gray-700">
        <div className="app-width mx-auto  flex flex-1 items-center border border-blue-400">
          <small>© {new Date().getFullYear()} Marcell Ciszek Druzynski</small>
        </div>
      </footer>
    </>
  );
}
