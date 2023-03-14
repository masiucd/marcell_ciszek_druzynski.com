interface Props {
	text: string
}

export default async function Content({text}: Props) {
	return <div>{text}</div>
}
