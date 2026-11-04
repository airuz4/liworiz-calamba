import { useState } from "react";
import { LOREM_SHORT } from "../data/pages";

/**
 * Question shape:
 * { prompt: string, options: string[], answer: number (index), explanation: string }
 * Pass real questions to <ModulePage quiz={[...]} /> later.
 */
const PLACEHOLDER_QUESTIONS = [
  { answer: 1 },
  { answer: 0 },
  { answer: 2 },
].map((q, i) => ({
  prompt: `Question ${i + 1} placeholder. Lorem ipsum dolor sit amet, consectetur?`,
  options: [
    "Answer A placeholder",
    "Answer B placeholder",
    "Answer C placeholder",
    "Answer D placeholder",
  ],
  explanation: LOREM_SHORT,
  ...q,
}));

export default function Quiz({ questions = PLACEHOLDER_QUESTIONS }) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[index];
  const answered = picked !== null;
  const isLast = index === questions.length - 1;

  const choose = (i) => {
    if (answered) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const advance = () => {
    if (isLast) {
      setFinished(true);
    } else {
      setIndex((n) => n + 1);
      setPicked(null);
    }
  };

  const restart = () => {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="border-2 border-ink bg-ink p-8 text-paper" role="status">
        <p className="font-display text-6xl font-black text-wax-light">
          {score}/{questions.length}
        </p>
        <p className="mt-3 font-display text-3xl">Quiz complete</p>
        <button
          onClick={restart}
          className="mt-6 bg-wax px-5 py-2 font-ui text-lg text-paper transition-colors duration-150 hover:bg-paper hover:text-ink"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="border-2 border-ink">
      <div className="flex items-center justify-between border-b-2 border-ink bg-ink px-5 py-2 font-ui text-lg text-paper">
        <span>
          Question {index + 1} of {questions.length}
        </span>
        <span className="opacity-70">Score: {score}</span>
      </div>

      <div className="p-5 md:p-8">
        <p className="font-display text-2xl font-semibold leading-snug md:text-3xl">{q.prompt}</p>

        <ul className="mt-6 space-y-3">
          {q.options.map((opt, i) => {
            const isAnswer = i === q.answer;
            const isPicked = i === picked;
            let state = "border-ink hover:bg-paper-deep";
            if (answered && isAnswer) state = "border-ink bg-ink text-paper";
            else if (answered && isPicked) state = "border-wax bg-wax text-paper";
            else if (answered) state = "border-ink/30 opacity-60";

            return (
              <li key={i}>
                <button
                  onClick={() => choose(i)}
                  disabled={answered}
                  className={`flex w-full items-baseline justify-between gap-4 border-2 px-4 py-3 text-left font-body text-xl transition-colors duration-150 ${state}`}
                >
                  <span>{opt}</span>
                  {answered && isAnswer && <span className="font-ui text-base">Correct</span>}
                  {answered && isPicked && !isAnswer && <span className="font-ui text-base">Not quite</span>}
                </button>
              </li>
            );
          })}
        </ul>

        <div aria-live="polite" className="min-h-[1px]">
          {answered && (
            <div className="mt-6 border-l-4 border-wax pl-4">
              <p className="max-w-2xl text-base">{q.explanation}</p>
              <button
                onClick={advance}
                className="mt-4 bg-ink px-5 py-2 font-ui text-lg text-paper transition-colors duration-150 hover:bg-wax"
              >
                {isLast ? "See score" : "Next question"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}