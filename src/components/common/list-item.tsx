import {ReactNode} from "react";

type ListItemProps = {
	children: ReactNode;
};
function ListItem({children}: ListItemProps) {
	return <li className="text-sm md:text-base">{children}</li>;
}

export default ListItem;
