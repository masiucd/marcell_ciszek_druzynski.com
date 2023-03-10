import fs from "node:fs"
import {join} from "node:path"

interface Props {
	file: string
}

const ABSOLUTE_PATH = process.cwd()

export default async function Content({file}: Props) {
	const fileContent = fs.readFileSync(file, "utf8")
	return <div>Content</div>
}
