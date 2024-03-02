import Link from "next/link";
import {type ReactNode} from "react";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <header className="flex h-[6rem] border border-gray-700 ">
        <div className="app-width mx-auto  flex flex-1 items-center border border-blue-400">
          <Link href="/">
            <strong className="text-sm font-bold">
              Marcell Ciszek Druzynski
            </strong>
          </Link>
        </div>
      </header>
      <main className="flex min-h-[calc(100dvh-12rem)] flex-col">
        {children}
      </main>
      <footer className="flex h-[6rem] border border-gray-700">
        <div className="app-width mx-auto  flex flex-1 items-center border border-blue-400">
          <small>© {new Date().getFullYear()} Marcell Ciszek Druzynski</small>
        </div>
      </footer>
    </>
  );
}
