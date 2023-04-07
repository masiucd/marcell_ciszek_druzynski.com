import {ReactNode} from "react"

interface ListItemProps {
	children: ReactNode
}
function ListItem({children}: ListItemProps) {
	return <li className="text-sm sm:text-base">{children}</li>
}

export default ListItem
