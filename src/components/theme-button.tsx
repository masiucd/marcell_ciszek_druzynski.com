"use client";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
import {useHotkeys} from "react-hotkeys-hook";
import {Button} from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {ToolTipComponent as Tooltip} from "./ui/tooltip";

export function ThemeButton() {
	let {theme, setTheme} = useTheme();
	// useKeyPress(["Control", "t"], () => {
	// 	setTheme(theme === "dark" ? "light" : "dark");
	// });
	useHotkeys("ctrl+t", () => setTheme(theme === "dark" ? "light" : "dark"), [
		theme,
	]);
	return (
		<DropdownMenu>
			<Tooltip content={<p>{theme === "dark" ? "light" : "dark"} (ctrl+t)</p>}>
				<DropdownMenuTrigger asChild>
					<Button
						variant="empty"
						size="icon"
						className="transition-opacity duration-200 hover:opacity-50"
					>
						<Sun className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
						<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						<span className="sr-only">Toggle theme</span>
					</Button>
				</DropdownMenuTrigger>
			</Tooltip>

			<DropdownMenuContent align="end">
				<DropdownMenuItem
					onClick={() => setTheme("light")}
					className={theme === "light" ? "opacity-30" : undefined}
				>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme("dark")}
					className={theme === "dark" ? "opacity-30" : undefined}
				>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme("system")}
					className={theme === "system" ? "opacity-30" : undefined}
				>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
