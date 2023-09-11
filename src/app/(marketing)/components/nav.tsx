import {Link} from "@/components/ui/link";
import {navLinks} from "@/config/nav_links";

import {NavListItem} from "./nav-list-item";

export function Nav() {
	return (
		<nav className="hidden  sm:flex ">
			<ul className="hidden gap-3 sm:flex sm:items-end  sm:justify-center">
				{navLinks.map(({name, url}) => (
					<NavListItem key={name}>
						<Link href={url}>{name}</Link>
					</NavListItem>
				))}
			</ul>
		</nav>
	);
}
