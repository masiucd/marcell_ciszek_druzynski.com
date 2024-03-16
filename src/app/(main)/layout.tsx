import Link from "next/link";
import {type ReactNode} from "react";

import Mcd from "@/components/mcd";
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
          <Link href="/" className="hover:opacity-55">
            <strong className="text-sm font-bold">
              <Mcd />
            </strong>
          </Link>
          <div className="flex items-center gap-5">
            <nav>
              <ul className="flex gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="relative text-sm font-semibold after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-0 after:rounded-sm after:bg-primary-500 after:transition-all after:duration-200  after:content-[''] after:hover:w-full dark:after:bg-primary-400 "
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
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

let navLinks = Object.freeze([
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/about",
    label: "About",
  },
]);
