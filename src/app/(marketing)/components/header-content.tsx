"use client";

import {Cmd} from "@/components/icons/cmd";
import {Button} from "@/components/ui/button";
import {useToggle} from "@/lib/hooks/toggle";
import {cn} from "@/lib/styles";

import MobileNav from "./mobile-nav";
import {ThemeToggle} from "./theme-toggle";

export function HeaderContent() {
	const [on, {toggle}] = useToggle();

	return (
		<div className="flex items-center gap-2">
			<Button
				className={cn(
					"z-40 block sm:hidden",
					on ? "border border-gray-950 dark:border-gray-100 rounded" : null,
					"p-1"
				)}
				aria-label="Open Menu"
				onClick={toggle}
				variant="subtle"
			>
				<Cmd on={on} />
			</Button>
			<ThemeToggle />
			<MobileNav on={on} />
		</div>
	);
}
