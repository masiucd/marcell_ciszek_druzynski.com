"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import {type VariantProps, cva} from "class-variance-authority";

import {cn} from "@/lib/utils";
import type {ComponentPropsWithoutRef} from "react";

const labelVariants = cva(
	"font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

function Label({
	className,
	...props
}: ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
	VariantProps<typeof labelVariants>) {
	return (
		<LabelPrimitive.Root
			className={cn(labelVariants(), className)}
			{...props}
		/>
	);
}
Label.displayName = LabelPrimitive.Root.displayName;

export {Label};
