"use client";

import * as TooltipRadixUI from "@radix-ui/react-tooltip";
import {type ReactNode} from "react";

type BaseProps = {
	asChild?: boolean;
	children: ReactNode;
};

type ContentProps = BaseProps & {content: ReactNode; text?: never};
type TextProps = BaseProps & {text: string; content?: never};
type TooltipProps = ContentProps | TextProps;

export function Tooltip({
	asChild = true,
	children,
	content,
	text,
}: TooltipProps) {
	return (
		<TooltipRadixUI.Provider>
			<TooltipRadixUI.Root>
				<TooltipRadixUI.Trigger asChild={asChild}>
					{children}
				</TooltipRadixUI.Trigger>
				<TooltipRadixUI.Portal>
					<TooltipRadixUI.Content className="z-50 rounded-md bg-gray-900 p-2 text-white shadow-lg dark:bg-white dark:text-gray-900">
						{content ?? text}
						<TooltipRadixUI.Arrow className="fill-gray-900 dark:fill-white" />
					</TooltipRadixUI.Content>
				</TooltipRadixUI.Portal>
			</TooltipRadixUI.Root>
		</TooltipRadixUI.Provider>
	);
}
