import {ReactNode} from "react"

import {cn} from "@/lib/styles"

type ExclusiveProps =
	| {children?: never; text: string}
	| {children: ReactNode; text?: never}

type ButtonType = "primary" | "secondary" | "tertiary"
type Props = ExclusiveProps & {
	type: "button" | "submit" | "reset" | undefined
	buttonType: ButtonType
	className?: string
}

function Button({type, buttonType, className, children, text}: Props) {
	if (children) {
		return (
			<button type={type} className={getButtonStyles(buttonType, className)}>
				{children}
			</button>
		)
	}
	return (
		<button type={type} className={getButtonStyles(buttonType, className)}>
			<span>{text}</span>
		</button>
	)
}

const buttonTypes = {
	primary: "bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700",
	secondary: "bg-gray-500 py-2 px-4 font-bold text-white hover:bg-gray-700",
	tertiary: "bg-gray-500 py-2 px-4 font-bold text-white hover:bg-gray-700",
}

function getButtonStyles(buttonType: ButtonType, className?: string): string {
	return cn(buttonTypes[buttonType], className)
}

export default Button
