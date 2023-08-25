import "@/styles/globals.css";

import {type Metadata} from "next";
import localFont from "next/font/local";
import {ReactNode} from "react";

import ThemeProvider from "@/components/theme-provider";
import {siteData} from "@/config/site_data";
import {cn} from "@/lib/styles";

const ibm = localFont({
	src: [
		{
			// path: "../../public/fonts/operatormonolig-regular-webfont.woff2",
			path: "../../public/fonts/dankmono-regular-webfont.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/dankmono-regular-webfont.woff2",
			weight: "600",
			style: "bold",
		},
		{
			// path: "../../public/fonts/operatormonolig-regularitalic-webfont.woff2",
			path: "../../public/fonts/dankmono-italic-webfont.woff2",
			weight: "400",
			style: "italic",
		},
	],

	variable: "--font-mono",
	display: "swap",
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
			// className={cn("font-sans", ibm.variable, fontMono.variable)}
			className={cn("font-mono", ibm.variable)}
		>
			<body className="bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
