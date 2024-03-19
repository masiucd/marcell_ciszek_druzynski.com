"use client";
import {useState} from "react";

import {cn} from "@/lib/cn";

import {Lead} from "../typography";

type Answer = {
  title: string;
  isCorrect: boolean;
};

type Props = {
  question: string;
  answers: Answer[];
  className?: string;
};

export function Quiz({question, answers, className}: Props) {
  const [selectedAnswer, setSelectedAnswer] = useState<null | Answer>(null);
  return (
    <div
      className={cn(
        "bg-gray-100 p-2 rounded-sm shadow-md flex flex-col gap-2",
        selectedAnswer &&
          selectedAnswer.isCorrect &&
          "bg-green-100 border border-green-500",
        selectedAnswer &&
          !selectedAnswer.isCorrect &&
          "bg-red-100 border border-red-500",
        className,
      )}
    >
      <Lead className="my-0 dark:text-gray-600">{question}</Lead>
      {selectedAnswer && (
        <Lead
          className={cn(
            "m-0 ",
            selectedAnswer.isCorrect && "text-green-700 dark:text-green-700 ",
            !selectedAnswer.isCorrect && "text-red-700 dark:text-red-700",
          )}
        >
          {selectedAnswer.isCorrect ? "Correct!" : "Incorrect!"}
        </Lead>
      )}
      <ul className="my-0 flex flex-wrap gap-3 p-0">
        {answers.map((answer) => (
          <li key={answer.title} className="flex items-center gap-2 ">
            <button
              type="button"
              className={cn(
                "rounded-sm border border-gray-800  p-1 text-sm text-gray-900 shadow-sm",

                selectedAnswer?.title === answer.title &&
                  selectedAnswer.isCorrect &&
                  "border-green-500",

                selectedAnswer?.title === answer.title &&
                  !selectedAnswer.isCorrect &&
                  "border-red-500",
              )}
              onClick={() => {
                setSelectedAnswer(answer);
              }}
            >
              <span>{answer.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
