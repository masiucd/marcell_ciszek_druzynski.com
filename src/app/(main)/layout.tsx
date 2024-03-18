import Link from "next/link";
import {type ReactNode} from "react";

import Mcd from "@/components/mcd";
import {ThemeButton} from "@/components/theme-button";
import {Tooltip} from "@/components/tooltip";
import {navLinks, socialItems} from "@/lib/config";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100dvh-12rem)] flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}
function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-24">
      <div className="app-width mx-auto  flex flex-1 items-center justify-between border-b-2 border-gray-600/70 bg-gray-50 dark:border-gray-300/70 dark:bg-gray-900">
        <Link href="/" className="hover:opacity-55">
          <strong className="text-sm font-bold">
            <Mcd />
          </strong>
        </Link>
        <div className="flex items-center gap-3 ">
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
  );
}
function Footer() {
  return (
    <footer className="flex h-24">
      <div className="app-width mx-auto flex flex-1 flex-col items-center gap-3 md:flex-row md:justify-between md:gap-0">
        <small>© {new Date().getFullYear()} Marcell Ciszek Druzynski</small>
        <ul className="flex gap-4">
          {socialItems.map((item) => (
            <li key={item.href}>
              <Tooltip content={<p className="text-sm">{item.name}</p>}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300"
                >
                  <item.icon />
                </a>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
