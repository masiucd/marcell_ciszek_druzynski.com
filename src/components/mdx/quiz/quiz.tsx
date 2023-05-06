"use client";
import {useState} from "react";

import Button from "@/components/common/buttons";
import {cn} from "@/lib/styles";

import Result from "./result";

interface Answer {
	id: number
	text: string
	isCorrect: boolean
}

interface Props {
	question: string
	answers: Answer[]
	className?: string
}

const Quiz = ({question, answers, className}: Props) => {
	const [hasAnsweredCorrect, setHasAnsweredCorrect] = useState(false);
	const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
	const [id, setId] = useState<number | null>(null);
	return (
		<div
			className={cn(
				"mb-3 rounded-md bg-slate-950/10 p-4 shadow-md flex flex-col gap-1 border-2 border-slate-700",
				hasAnsweredCorrect ? "bg-green-500/10" : "",
				correctAnswer !== null && !hasAnsweredCorrect ? "bg-red-500/10" : "",
				className
			)}
		>
			<p className="mb-3 font-bold text-slate-950/100">{question}</p>
			<ul className="flex list-none flex-wrap gap-3 p-0">
				{answers.map((answer) => (
					<li key={answer.id}>
						<Button
							className={cn(
								"rounded-md bg-slate-950/20 p-2 text-slate-950/100",
								id === answer.id ? "bg-slate-950/100 text-slate-50" : ""
							)}
							buttonType="tertiary"
							type="button"
							onClick={() => {
								setHasAnsweredCorrect(answer.isCorrect);
								setCorrectAnswer(answer.text);
								setId(answer.id);
							}}
						>
							{answer.text}
						</Button>
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
