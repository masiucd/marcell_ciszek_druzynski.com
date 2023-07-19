"use client";
import {useToggle} from "@/lib/hooks/toggle";
import {cn} from "@/lib/styles";

import {Button} from "../ui/button";

// Toggle element for MDX
function Toggle() {
	const [isOn, {toggle}] = useToggle();
	return (
		<div className="rounded-md bg-gray-100 p-2 shadow dark:bg-gray-700">
			<p
				className={cn(
					"text-bold",
					isOn ? "text-blue-500" : "text-gray-900 dark:text-gray-50"
				)}
			>
				Click the button to toggle the state of the toggle element.
			</p>
			<p>
				<strong>Current state:</strong> {isOn ? "on" : "off"}
			</p>
			<div className="mx-2 flex justify-between">
				<Button variant="tertiary" onClick={toggle}>
					Toggle {isOn ? "off" : "on"}
				</Button>
			</div>
		</div>
	);
}

export default Toggle;
