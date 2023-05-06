"use client";

import MenuIcon from "@/components/icons/menu";
import {useToggle} from "@/lib/hooks/toggle";

import MobileNav from "./mobile-nav";
import {ThemeToggle} from "./theme-toggle";

export function HeaderContent() {
	const [on, {toggle}] = useToggle();
	return (
		<div className="flex gap-3">
			<button
				className="z-40 block sm:hidden"
				aria-label="Open Menu"
				type="button"
				onClick={toggle}
			>
				<MenuIcon on={on} />
			</button>
			<ThemeToggle />
			<MobileNav on={on} />
		</div>
	);
}
