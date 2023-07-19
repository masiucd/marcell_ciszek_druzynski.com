"use client";
import {useEffect} from "react";

import {TypographyH1} from "@/components/common/typography";

export default function Error({error}: {error: Error; reset: () => void}) {
	useEffect(() => {
		// Log the error to an error reporting service
		// eslint-disable-next-line no-console
		console.error(error);
	}, [error]);

	return (
		<div>
			<TypographyH1>Oh nooo! Something went wrong!</TypographyH1>
		</div>
	);
}
