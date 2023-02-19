import "@/styles/globals.css"

import {Mulish as FontSerif, Space_Mono as FontMono} from "@next/font/google"
import {ReactNode} from "react"

import {cn} from "@/lib/styles"

const fontSans = FontSerif({
	subsets: ["latin"],
	variable: "--font-serif",
})

const fontMono = FontMono({
	subsets: ["latin"],
	variable: "--font-mono",
	weight: ["400", "700"],
})

// const metaData: Metadata = {}

export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<html
			lang="en"
			className={cn(
				"font-serif bg-white dark:bg-black text-slate-900 dark:text-white",
				fontSans.variable,
				fontMono.variable
			)}
		>
			<head />
			<body>{children}</body>
		</html>
	)
}
