import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/providers/theme";
import siteData from "@/config/site-data";
import {cn} from "../lib/utils";

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });

// const roboto = Roboto({
// 	weight: "400",
// 	subsets: ["latin"],
// 	variable: "--font-roboto",
// });

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: siteData.site.title,
	description: siteData.site.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-lt-installed="true">
			<body
				// className={cn(roboto, "antialiased")}
				// className={`${geistSans.variable} ${geistMono.variable} ${inter} antialiased`}
				className={cn(inter.variable, "antialiased")}
			>
				<ThemeProvider enableSystem attribute="class" defaultTheme="system">
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
