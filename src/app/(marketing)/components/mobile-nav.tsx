"use client";

import {AnimatePresence, motion} from "framer-motion";

import {navLinks} from "@/config/nav_links";
import {useLockBody} from "@/lib/hooks/lock-body";

import A from "./links/a_link";
import {NavListItem} from "./nav-list-item";

type Props = {
	on: boolean;
};

function Nav() {
	useLockBody();
	return (
		<motion.nav
			initial={{opacity: 0, y: -100}}
			animate={{opacity: 1, y: 0}}
			exit={{opacity: 0, y: -100}}
			className="absolute left-0 top-0 flex h-[11rem] w-full flex-col gap-3 bg-white p-2 shadow-md dark:border-b dark:border-blue-100 dark:bg-black sm:hidden"
		>
			<div className="flex flex-1 flex-col">
				<div
					className="flex flex-1 items-center
		"
				>
					<strong>
						<A href="/">Marcell.C.D</A>
					</strong>
				</div>
				<ul className="flex flex-col justify-center gap-2">
					{navLinks.map(({name, url}) => (
						<NavListItem key={name} className="text-2xl font-bold">
							<A href={url}>{name}</A>
						</NavListItem>
					))}
				</ul>
			</div>
		</motion.nav>
	);
}

function MobileNav({on}: Props) {
	return <AnimatePresence>{on && <Nav />}</AnimatePresence>;
}

export default MobileNav;
