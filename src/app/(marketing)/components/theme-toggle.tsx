"use client";

import Image from "next/image";
import {useTheme} from "next-themes";
import {useHotkeys} from "react-hotkeys-hook";

import Tooltip from "@/components/common/tooltip";
import {Button} from "@/components/ui/button";
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
		<div className="z-40 flex ">
			<Tooltip text="ctr + t" variant={theme === "light" ? "dark" : "light"}>
				<Button
					variant="solid"
					className="bg-transparent shadow-none dark:bg-transparent"
					onClick={handleTheme}
					aria-label="Theme toggle"
				>
					{theme === "light" ? (
						<Image src="/moon.svg" alt="sun" width="20" height="20" />
					) : (
						<Image src="/sun.svg" alt="sun" width="20" height="20" />
					)}

					<span className="sr-only">Toggle theme</span>
				</Button>
			</Tooltip>
		</div>
	);
}
