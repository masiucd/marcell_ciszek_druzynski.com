import {Code} from "bright";
import type {MDXComponents} from "mdx/types";
import {focus, titleBar} from "./extentions";
import {H2} from "./src/components/typography";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		// Add custom components here
		Foo: (props) => <H2 {...props}>Foo bar</H2>,
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
