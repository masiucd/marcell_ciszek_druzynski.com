import "@/styles/globals.css"

import {Metadata} from "next"
import {Fira_Code as FontMono, Mulish as FontSerif} from "next/font/google"
import {ReactNode} from "react"

import {siteData} from "@/config/site_data"
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

export const metadata: Metadata = {
	title: {
		default: siteData.title,
		template: "%s | Marcell Ciszek Druzynski",
	},
	description: siteData.description,
	openGraph: {
		title: siteData.title,
		description: siteData.description,
		url: siteData.url,
		siteName: siteData.title,
		images: [
			{
				url: `${siteData.url}/og.jpg`,
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: siteData.title,
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicons/favicon.ico",
	},
}

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
