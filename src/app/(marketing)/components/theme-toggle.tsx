"use client";

import Image from "next/image";
import {useTheme} from "next-themes";
import {useHotkeys} from "react-hotkeys-hook";

import Tooltip from "@/components/common/tooltip";
import {useHasMounted} from "@/lib/hooks/mounted";

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
				<button
					onClick={handleTheme}
					className="flex h-7 w-7 items-center justify-center rounded-md"
				>
					{theme === "light" ? (
						<Image src="/moon.svg" alt="sun" width="24" height="24" />
					) : (
						<Image src="/sun.svg" alt="sun" width="24" height="24" />
					)}

					<span className="sr-only">Toggle theme</span>
				</button>
			</Tooltip>
		</div>
	);
}
