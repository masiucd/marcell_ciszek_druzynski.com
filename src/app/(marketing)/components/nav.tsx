import A from "./links/a_link";
import {NavListItem} from "./nav-list-item";

export function Nav() {
	return (
		<nav className="hidden sm:block">
			<ul className="hidden gap-3 sm:flex">
				<NavListItem>
					<A href="/about">About</A>
				</NavListItem>
				<NavListItem>
					<A href="/blog">Blog</A>
				</NavListItem>
				<NavListItem>
					<A href="/bites">Bites</A>
				</NavListItem>
			</ul>
		</nav>
	);
}
