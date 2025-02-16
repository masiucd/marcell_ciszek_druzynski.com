import type {MDXComponents} from "mdx/types";
import type {ComponentPropsWithoutRef} from "react";
import {highlight} from "sugar-high";
import {H2} from "./src/components/typography";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		// Add custom components here
		Foo: (props) => <H2 {...props}>Foo bar</H2>,
		code: ({children, ...props}: ComponentPropsWithoutRef<"code">) => {
			const codeHTML = highlight(children as string);
			// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
			return <code dangerouslySetInnerHTML={{__html: codeHTML}} {...props} />;
		},
		...components,
	};
}
