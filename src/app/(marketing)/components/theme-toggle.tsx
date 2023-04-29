"use client"

import {useTheme} from "next-themes"

const ThemeToggle = () => {
	const {setTheme, theme} = useTheme()
	return (
		<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
			{theme === "dark" ? "Light" : "Dark"}
		</button>
	)
}

export default ThemeToggle
