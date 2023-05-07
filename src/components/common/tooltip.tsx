"use client";

import * as TooltipRadixUI from "@radix-ui/react-tooltip";
import {PropsWithChildren} from "react";

interface Props {
	text: string;
	side?: "top" | "right" | "bottom" | "left";
	align?: "start" | "center" | "end";
	collisionPadding?: number;
	disabled?: boolean;
	onClick?: () => void;
}

function Tooltip({
	children,
	text,
	side = "top",
	align = "center",
	collisionPadding = 0,
	disabled = false,
	onClick,
}: PropsWithChildren<Props>) {
	if (disabled) return <>{children}</>;
	return (
		<TooltipRadixUI.Provider delayDuration={300}>
			<TooltipRadixUI.Root>
				<TooltipRadixUI.Trigger onClick={onClick}>
					{children}
				</TooltipRadixUI.Trigger>
				<TooltipRadixUI.Portal>
					<TooltipRadixUI.Content
						side={side}
						align={align}
						sideOffset={5}
						collisionPadding={collisionPadding}
						datatype="tooltip"
						className="z-20 select-none rounded-[4px] bg-slate-950 px-[15px] py-[10px] text-[15px] leading-none text-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade dark:bg-white dark:text-slate-950"
					>
						{text}
						<TooltipRadixUI.Arrow className="fill-slate-950 dark:fill-white" />
					</TooltipRadixUI.Content>
				</TooltipRadixUI.Portal>
			</TooltipRadixUI.Root>
		</TooltipRadixUI.Provider>
	);
}

export default Tooltip;
