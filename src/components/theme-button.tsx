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
      // className="rounded-sm bg-gray-200 p-1 dark:bg-gray-700"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Tooltip
        content={
          <p className="text-sm">
            {theme === "dark"
              ? "Switch to light mode (ctrl+k)"
              : "Switch to dark mode (ctrl+k)"}
          </p>
        }
      >
        <span>{theme === "dark" ? <icons.sun /> : <icons.moon />}</span>
      </Tooltip>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

function Spinner() {
  return <div className="size-4 animate-pulse rounded-full bg-gray-500"></div>;
}
