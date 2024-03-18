"use client";

import {useTheme} from "next-themes";
import {useHotkeys} from "react-hotkeys-hook";

import {icons} from "@/components/icons/icons";

import {Tooltip} from "./tooltip";

export function ThemeButton() {
  let {theme, setTheme} = useTheme();
  useHotkeys("ctrl+k", () => setTheme(theme === "dark" ? "light" : "dark"), [
    theme,
  ]);

  if (!theme) return <Spinner />;
  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="hover:opacity-55"
    >
      <Tooltip
        content={
          <span className="text-sm">
            {theme === "dark"
              ? "Switch to light mode (ctrl+k)"
              : "Switch to dark mode (ctrl+k)"}
          </span>
        }
      >
        <div className="flex">
          <span className="inline  dark:hidden ">
            <icons.sun />
          </span>
          <span className="hidden dark:inline">
            <icons.moon />
          </span>
          <span className="sr-only">Toggle theme</span>
        </div>
      </Tooltip>
    </button>
  );
}

function Spinner() {
  return <div className="size-4 animate-pulse rounded-full bg-gray-500"></div>;
}
