"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {useHotkeys} from "react-hotkeys-hook";

import Tooltip from "@/components/common/tooltip";
import Moon from "@/components/icons/moon";
import Sun from "@/components/icons/sun";

function useHasMounted() {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	return mounted;
}

export function ThemeToggle() {
	const {setTheme, theme} = useTheme();
	const mounted = useHasMounted();
	const handleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	useHotkeys("ctrl+t", handleTheme);
	if (!mounted) return null;

	return (
		<div className="z-40 flex h-6 w-6 items-center justify-center rounded-md">
			<Tooltip text="ctr + t" variant={theme === "light" ? "dark" : "light"}>
				<button onClick={handleTheme} className="flex">
					{theme === "light" ? <Moon /> : <Sun />}
					<span className="sr-only">Toggle theme</span>
				</button>
			</Tooltip>
		</div>
	);
}
