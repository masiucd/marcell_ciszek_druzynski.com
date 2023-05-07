import {navLinks} from "@/config/nav_links";

import A from "./links/a_link";
import {NavListItem} from "./nav-list-item";

export function Nav() {
	return (
		<nav className="hidden sm:block">
			<ul className="hidden gap-3 sm:flex">
				{navLinks.map(({name, url}) => (
					<NavListItem key={name}>
						<A href={url}>{name}</A>
					</NavListItem>
				))}
			</ul>
		</nav>
	);
}
