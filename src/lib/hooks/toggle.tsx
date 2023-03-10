"use client"

import {useMemo, useState} from "react"

interface ToggleHandlers {
	toggle: () => void
	setTrue: () => void
	setFalse: () => void
	reset: () => void
}

type Toggle = [boolean, ToggleHandlers]

export function useToggle(initialState = false): Toggle {
	const [state, setState] = useState(initialState)
	const handlers = useMemo(
		() => ({
			toggle: () => setState((prev) => !prev),
			setTrue: () => setState(true),
			setFalse: () => setState(false),
			reset: () => setState(initialState),
		}),
		[initialState]
	)
	return [state, handlers]
}
