import "@/styles/globals.css"

import {Inter as FontSans} from "@next/font/google"
import {ReactNode} from "react"

import {cn} from "@/lib/styles"

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-inter",
})

export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<html
			lang="en"
			className={cn(
				"font-sans bg-white dark:bg-black text-slate-900 dark:text-white",
				fontSans.variable
			)}
		>
			<head />
			<body>{children}</body>
		</html>
	)
}
