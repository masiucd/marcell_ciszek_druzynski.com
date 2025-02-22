"use client";

import {useTheme} from "next-themes";

export function ThemeButton() {
	let {theme, setTheme} = useTheme();

	const toDark = () => {
		setTheme("dark");
	};

	const toLight = () => {
		setTheme("light");
	};

	const toSystem = () => {
		setTheme("system");
	};

	console.log({theme});
	return (
		<button
			type="button"
			onClick={() => {
				if (theme === "light") {
					toDark();
				} else if (theme === "dark") {
					toLight();
				}
			}}
		>
			{theme === "light" ? "dark" : "light"}
		</button>
	);
}
