"use client"
import {useEffect} from "react"

export default function Error({error}: {error: Error; reset: () => void}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<div>
			<h1>Oh nooo! Something went wrong!</h1>
		</div>
	)
}
