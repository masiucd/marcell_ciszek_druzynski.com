"use client";

import {Cmd} from "@/components/icons/cmd";
import {useToggle} from "@/lib/hooks/toggle";
import {cn} from "@/lib/styles";

import MobileNav from "./mobile-nav";
import {ThemeToggle} from "./theme-toggle";

export function HeaderContent() {
	const [on, {toggle}] = useToggle();
	return (
		<div className="flex gap-3">
			<button
				className={cn(
					"z-40 block sm:hidden",
					on ? "border border-gray-950 dark:border-gray-100 rounded" : null
				)}
				aria-label="Open Menu"
				type="button"
				onClick={toggle}
			>
				<Cmd on={on} />
			</button>
			<ThemeToggle />
			<MobileNav on={on} />
		</div>
	);
}
