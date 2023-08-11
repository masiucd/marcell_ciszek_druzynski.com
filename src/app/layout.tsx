import "@/styles/globals.css";

import {type Metadata} from "next";
import {Fira_Code as FontMono} from "next/font/google";
import localFont from "next/font/local";
import {ReactNode} from "react";

import ThemeProvider from "@/components/theme-provider";
import {siteData} from "@/config/site_data";
import {cn} from "@/lib/styles";

const graphik = localFont({
	src: [
		{
			path: "../../public/fonts/Graphik-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/Graphik-Medium.ttf",
			weight: "600",
			style: "bold",
		},
	],
	variable: "--font-sans",
	display: "swap",
});

const fontMono = FontMono({
	subsets: ["latin"],
	variable: "--font-mono",
	weight: ["400", "600"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://www.marcellcd.com/"),
	applicationName: siteData.title,
	authors: [{name: "Marcell Ciszek Druzynski", url: siteData.url}],
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
};

export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<html
			lang="en"
			className={cn("font-serif", graphik.variable, fontMono.variable)}
		>
			<body className="bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-50">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
