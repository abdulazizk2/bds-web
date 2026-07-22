'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { QuizQuestion } from '@/lib/types';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete?: (score: number, total: number) => void;
}

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);

  const score = questions.reduce(
    (acc, q) => acc + (answers[q.id] === q.correctIndex ? 1 : 0),
    0
  );

  const handleSelect = (questionId: string, optionIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onComplete?.(score, questions.length);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="space-y-6">
      {questions.map((q, qIndex) => {
        const selected = answers[q.id];
        return (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: qIndex * 0.05 }}
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4"
          >
            <p className="font-medium text-slate-900 dark:text-white mb-3">
              {qIndex + 1}. {q.question}
            </p>
            <div className="space-y-2">
              {q.options.map((option, optIndex) => {
                const isSelected = selected === optIndex;
                const isCorrect = optIndex === q.correctIndex;

                let stateClasses =
                  'border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-700';

                if (submitted) {
                  if (isCorrect) {
                    stateClasses = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40';
                  } else if (isSelected && !isCorrect) {
                    stateClasses = 'border-rose-400 bg-rose-50 dark:bg-rose-950/40';
                  } else {
                    stateClasses = 'border-slate-200 dark:border-slate-800 opacity-60';
                  }
                } else if (isSelected) {
                  stateClasses = 'border-brand-500 bg-brand-50 dark:bg-brand-950';
                }

                return (
                  <button
                    key={optIndex}
                    onClick={() => handleSelect(q.id, optIndex)}
                    disabled={submitted}
                    className={`w-full flex items-center justify-between text-left rounded-lg border px-4 py-2.5 text-sm transition-colors ${stateClasses}`}
                  >
                    <span className="text-slate-700 dark:text-slate-200">{option}</span>
                    {submitted && isCorrect && (
                      <CheckCircle2 size={17} className="text-emerald-500 shrink-0 ml-2" />
                    )}
                    {submitted && isSelected && !isCorrect && (
                      <XCircle size={17} className="text-rose-500 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        );
      })}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brand-600 text-white font-medium text-sm hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Submit Quiz
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl bg-brand-50 dark:bg-brand-950 border border-brand-100 dark:border-brand-900 p-4"
        >
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Your score</p>
            <p className="text-2xl font-bold text-brand-700 dark:text-brand-300">
              {score} / {questions.length}
            </p>
          </div>
          <button
            onClick={handleRetry}
            className="flex items-center gap-2 text-sm font-medium text-brand-700 dark:text-brand-300 hover:underline sm:ml-auto"
          >
            <RotateCcw size={15} /> Retake quiz
          </button>
        </motion.div>
      )}
    </div>
  );
}
