"use client";
import {useHotkeys} from "react-hotkeys-hook";

import {Tooltip} from "@/components/common/tooltip";
import {Cmd} from "@/components/icons/cmd";
import {useToggle} from "@/lib/hooks/toggle";
import {cn} from "@/lib/styles";

import MobileNav from "./mobile-nav";
import {Nav} from "./nav";
import {ThemeToggle} from "./theme-toggle";

export function HeaderContent() {
	const [on, {toggle}] = useToggle();
	return (
		<div className="flex items-center gap-2">
			<CmdButton toggle={toggle} on={on} />
			<ThemeToggle />
			<Nav />
			<MobileNav on={on} />
		</div>
	);
}

type CmdButtonProps = {
	toggle: () => void;
	on: boolean;
};

function CmdButton({toggle, on}: CmdButtonProps) {
	useHotkeys("ctrl+k", toggle);
	return (
		<Tooltip text="ctr + k">
			<button
				className={cn(
					"z-40 block sm:hidden",
					on ? "border border-gray-950 dark:border-gray-100 rounded" : null,
				)}
				aria-label="Open Menu"
				onClick={toggle}
				// variant="solid"
			>
				<Cmd on={on} />
			</button>
		</Tooltip>
	);
}
