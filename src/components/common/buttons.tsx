import {ReactNode} from "react"

import {cn} from "@/lib/styles"

type ExclusiveProps =
	| {children?: never; text: string}
	| {children: ReactNode; text?: never}

type ButtonType = "primary" | "secondary" | "tertiary" | "link"
type Props = ExclusiveProps & {
	type?: "button" | "submit" | "reset"
	buttonType: ButtonType
	className?: string
	onClick?: () => void
}

function Button({type, buttonType, className, children, text, onClick}: Props) {
	const styles = cn("transition-all", getButtonStyles(buttonType), className)
	if (children) {
		return (
			<button type={type} className={styles} onClick={onClick}>
				{children}
			</button>
		)
	}
	return (
		<button type={type} className={styles} onClick={onClick}>
			<span>{text}</span>
		</button>
	)
}

export const ButtonTypes = Object.freeze({
	primary: "bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700",
	secondary: "bg-gray-500 py-2 px-4 font-bold text-white hover:bg-gray-700",
	tertiary:
		"bg-gray-500 py-2 px-4 font-bold text-white hover:bg-gray-700 hover:text-gray-100",
	link: "inline-block relative pb-[2px] text-slate-600  dark:text-slate-300 font-bold",
})

function getButtonStyles(buttonType: ButtonType): string {
	return ButtonTypes[buttonType]
}

export default Button
