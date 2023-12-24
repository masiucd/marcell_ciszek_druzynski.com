import {ReactNode} from "react";

import Icons from "@/components/icons";
import {cn} from "@/lib/styles";

function IconWrapper({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<span className={cn("flex h-7 w-7 items-center justify-center", className)}>
			{children}
		</span>
	);
}

type Props = {
	hasAnsweredCorrect: boolean;
	correctAnswer: string | null;
};

function Result({hasAnsweredCorrect, correctAnswer}: Props) {
	if (correctAnswer === null) return null;
	if (hasAnsweredCorrect) {
		return (
			<p className="flex items-center gap-2 text-green-900 dark:text-green-100 ">
				Correct!{" "}
				<IconWrapper>
					<Icons.check />
				</IconWrapper>
			</p>
		);
	}
	return (
		<p className="flex items-center gap-2 text-red-500 dark:text-red-100">
			Incorrect!{" "}
			<IconWrapper className="bg-transparent">
				<Icons.alert />
			</IconWrapper>
		</p>
	);
}

export default Result;
