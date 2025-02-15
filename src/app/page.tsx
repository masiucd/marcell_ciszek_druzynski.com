import Image from "next/image";

export default function Home() {
	return (
		<>
			<h1>
				<Image src="/logo.svg" alt="Logo" width={100} height={100} />
			</h1>
		</>
	);
}
