import "@/styles/globals.css"

import {Inter as FontSans, Red_Hat_Mono as FontMono} from "@next/font/google"
import {ReactNode} from "react"

import {cn} from "@/lib/styles"

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-inter",
})
const fontMono = FontMono({
	subsets: ["latin"],
	variable: "--font-mono",
})

export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<html
			lang="en"
			className={cn(
				"font-sans bg-white dark:bg-black text-slate-900 dark:text-white",
				fontSans.variable,
				fontMono.variable
			)}
		>
			<head />
			<body>{children}</body>
		</html>
	)
}
