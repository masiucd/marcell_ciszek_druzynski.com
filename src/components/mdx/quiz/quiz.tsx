"use client";
import {useState} from "react";

import {cn} from "@/lib/styles";

import Result from "./result";

type Answer = {
	id: number;
	text: string;
	isCorrect: boolean;
};

type Props = {
	question: string;
	answers: Answer[];
	className?: string;
};

const Quiz = ({question, answers, className}: Props) => {
	const [hasAnsweredCorrect, setHasAnsweredCorrect] = useState(false);
	const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
	const [id, setId] = useState<number | null>(null);
	return (
		<div
			className={cn(
				"mb-3 rounded-md bg-gray-950/10 p-2 shadow-md flex flex-col gap-1 border-2 border-gray-700",
				hasAnsweredCorrect ? "bg-green-500/50 dark:bg-green-500" : "",
				correctAnswer !== null && !hasAnsweredCorrect
					? "bg-red-500/50 dark:bg-red-500"
					: "",
				className,
			)}
		>
			<p className="mb-1 font-bold text-gray-950/100 dark:text-gray-100 dark:drop-shadow-2xl">
				{question}
			</p>
			<ul className="flex list-none flex-wrap gap-1 p-0">
				{answers.map((answer) => (
					<li key={answer.id}>
						<button
							className={cn(
								"rounded-md bg-gray-950/50 p-2 text-gray-950/100",
								id === answer.id ? "bg-gray-950/100 text-gray-50" : "",
							)}
							type="button"
							onClick={() => {
								setHasAnsweredCorrect(answer.isCorrect);
								setCorrectAnswer(answer.text);
								setId(answer.id);
							}}
						>
							{answer.text}
						</button>
					</li>
				))}
			</ul>
			<div className="min-h-[2rem] p-1">
				<Result
					hasAnsweredCorrect={hasAnsweredCorrect}
					correctAnswer={correctAnswer}
				/>
			</div>
		</div>
	);
};

export default Quiz;
