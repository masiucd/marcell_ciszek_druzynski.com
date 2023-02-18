import {ReactNode} from "react"

interface Props {
	children: ReactNode
}
function HighlightWrapper({children}: Props) {
	return (
		<span className="border-b-2 border-slate-900 text-slate-600">
			{children}
		</span>
	)
}

export default HighlightWrapper
