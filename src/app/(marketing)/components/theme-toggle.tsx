"use client";

import {useTheme} from "next-themes";
import {useHotkeys} from "react-hotkeys-hook";

// import Tooltip from "@/components/common/tooltip"; // TODO: Remove this and make a new tooltip component
import Moon from "@/components/icons/moon";
import Sun from "@/components/icons/sun";

interface ThemeIconProps {
	theme?: string;
}
function ThemeIcon({theme}: ThemeIconProps) {
	if (theme === "light") {
		return <Moon />;
	}
	return <Sun />;
}

export function ThemeToggle() {
	const {setTheme, theme} = useTheme();
	const handleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	useHotkeys("ctrl+t", handleTheme);

	return (
		<div className="z-40 flex h-6 w-6 items-center justify-center rounded-md">
			<span className="sr-only">Toggle theme</span>
			<ThemeIcon theme={theme} />
		</div>
	);
}
