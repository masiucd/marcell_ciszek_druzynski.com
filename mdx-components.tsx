import {Code} from "bright";
import type {MDXComponents} from "mdx/types";
import {focus, titleBar} from "./extentions";
import {H1, H2, H3, H4, List, P} from "./src/components/typography";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		// Add custom components here
		Foo: (props) => <H2 {...props}>Foo bar</H2>,
		h1: H1,
		h2: H2,
		h3: H3,
		h4: H4,
		p: P,
		ul: List,
		// CodeBlock,
		// code: ({children, ...props}: ComponentPropsWithoutRef<"code">) => {
		// 	const codeHTML = highlight(children as string);
		// 	// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
		// 	return <code dangerouslySetInnerHTML={{__html: codeHTML}} {...props} />;
		// },
		pre: (props) => <Code lineNumbers {...props} />,
		...components,
	};
}

Code.theme = {
	dark: "github-dark",
	light: "github-light",
	// using a different CSS selector:
	// lightSelector: '[data-theme="light"]',
	// lightSelector: 'html.light',
};

Code.extensions = [focus, titleBar];
