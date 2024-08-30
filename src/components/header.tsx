import Link from "next/link";

import Mcd from "@/components/mcd";
import {ThemeButton} from "@/components/theme-button";
import {navLinks} from "@/lib/config";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-24">
      <div className="app-width mx-auto  flex flex-1 items-center justify-between border-b-2  border-border-light bg-bg-light px-1  dark:border-border-dark dark:bg-bg-dark  sm:px-0">
        <Link href="/" className="hover:opacity-55">
          <strong className="text-sm font-bold">
            <Mcd />
          </strong>
        </Link>
        <div className="flex flex-1  justify-end gap-3">
          <nav>
            <ul className="flex gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    className="relative text-sm font-semibold after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-0 after:rounded-sm after:bg-gray-500 after:transition-all after:duration-200  after:content-[''] after:hover:w-full dark:after:bg-gray-400 "
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
