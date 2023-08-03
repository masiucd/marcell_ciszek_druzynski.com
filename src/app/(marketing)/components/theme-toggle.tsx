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
		<div className="z-40 flex   rounded-md ">
			<Tooltip text="ctr + t" variant={theme === "light" ? "dark" : "light"}>
				<Button
					onClick={handleTheme}
					aria-label="Theme toggle"
					variant="subtle"
					className="flex items-center p-1  sm:items-end"
				>
					<>
						{theme === "light" ? (
							<Image src="/moon.svg" alt="sun" width="20" height="20" />
						) : (
							<Image src="/sun.svg" alt="sun" width="20" height="20" />
						)}

						{/* <span className="sr-only">Toggle theme</span> */}
					</>
				</Button>
			</Tooltip>
		</div>
	);
}
