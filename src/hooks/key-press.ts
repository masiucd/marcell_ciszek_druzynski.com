"use client";

import {useEffect, useState} from "react";

export function useKeyPress(
	keys: string[],
	callBack: () => void,
	node: HTMLElement | Window | null = null,
) {
	let [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set<string>());
	useEffect(() => {
		let onKeyDown = (e: Event) => {
			const event = e as KeyboardEvent;
			setPressedKeys((prevState) => {
				let newKeys = new Set(prevState);
				newKeys.add(event.key);
				return newKeys;
			});
		};

		let onKeyUp = (e: Event) => {
			const event = e as KeyboardEvent;
			setPressedKeys((prevState) => {
				let newKeys = new Set(prevState);
				newKeys.delete(event.key);
				return newKeys;
			});
		};
		// TODO us a abort controller

		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("keyup", onKeyUp);

		return () => {
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("keyup", onKeyUp);
		};
	}, []);

	useEffect(() => {
		if (keys.every((key) => pressedKeys.has(key))) {
			callBack();
		}
	}, [keys, pressedKeys, callBack]);
}
