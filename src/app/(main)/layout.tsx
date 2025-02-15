export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<header>
				<div className="h-[5rem]">header</div>
			</header>
			<main className="flex min-h-[calc(100dvh-10rem)] flex-col border border-blue-500">
				{children}
			</main>
			<footer>
				<div className="h-[5rem]">footer</div>
			</footer>
		</>
	);
}
