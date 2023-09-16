import {cva} from "class-variance-authority";
export const linkVariants = cva(
	"inline-block rounded p-1 capitalize text-gray-900 transition-colors duration-200 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-300",
	{
		variants: {
			variant: {
				subtile: "p-0",
				default: "hover:text-gray-600 dark:hover:text-gray-400",
				fancyHover:
					"relative pb-[2px] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:rounded-md after:bg-gray-900 after:transition-all after:content-[''] hover:after:w-full dark:after:bg-blue-200",
			},
			size: {
				default: "text-base",
				sm: "text-sm",
				md: "text-base",
				lg: "text-lg",
				xl: "text-xl",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	}
);
