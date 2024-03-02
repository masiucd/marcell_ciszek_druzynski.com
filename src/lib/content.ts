import {readdirSync, readFileSync} from "node:fs";
import {join} from "node:path";

export function getPostsData() {
	let path = join(process.cwd(), "content", "posts");

	return readdirSync(path)
		.map((x) => {
			let data = readFileSync(join(path, x), "utf-8");
			let frontMatter = getFrontMatter(data);
			return {
				...frontMatter,
				slug: slugify(frontMatter.title),
				tags: frontMatter.tags.split(", "),
			};
		})
		.toSorted((a, b) => {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		});
}

function getAllPosts() {
	let path = join(process.cwd(), "content", "posts");

	return readdirSync(path).map((x) => {
		let data = readFileSync(join(path, x), "utf-8");
		let frontMatter = getFrontMatter(data);

		let content = getContent(data);

		return {
			frontMatter: {
				...frontMatter,
				slug: slugify(frontMatter.title),
				tags: frontMatter.tags.split(", "),
			},
			content,
		};
	});
}

export function getPost(slug: string) {
	return getAllPosts().find((x) => {
		return slugify(x.frontMatter.title) === slug;
	});
}

export function slugify(text: string) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, "-") // Replace spaces with -
		.replace(/[^\w-]+/g, "") // Remove all non-word chars
		.replace(/--+/g, "-") // Replace multiple - with single -
		.replace(/^-+/, "") // Trim - from start of text
		.replace(/-+$/, ""); // Trim - from end of text
}

let regexForFrontMatter = /---\n([\s\S]+?)\n---/;

type FrontMatter = {
	title: string;
	about: string;
	date: string;
	tags: string;
	updated: string;
};

function getFrontMatter(data: string): FrontMatter {
	let match = data.match(regexForFrontMatter);
	if (!match) {
		return {
			title: "",
			about: "",
			date: "",
			tags: "",
			updated: "",
		};
	}
	let frontMatter = match[1];
	let lines = frontMatter.split("\n");
	let obj = lines.reduce<FrontMatter>((acc, line) => {
		let [key, value] = line.split(": ");
		acc[key as keyof FrontMatter] = value.replace(/"/g, "");
		return acc;
	}, {} as FrontMatter);
	return obj;
}

function getContent(data: string) {
	let match = data.match(regexForFrontMatter);
	if (!match) {
		return "";
	}
	let content = data.slice(match[0].length);
	return content;
}

export function allPotFiles() {
	let path = join(process.cwd(), "content", "posts");
	let xs = readdirSync(path);
	return xs.map((x) => x.replaceAll(".mdx", ""));
}
