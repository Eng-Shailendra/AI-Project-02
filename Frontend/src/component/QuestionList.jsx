import React from "react";
import { FiCode, FiUser, FiDatabase, FiMonitor } from "react-icons/fi";

const questions = [
  {
    category: "React",
    icon: <FiMonitor />,
    questions: [
      "What is the Virtual DOM and how does React use it?",
      "Explain the difference between useMemo and useCallback.",
      "How does React reconciliation work?",
    ],
  },
  {
    category: "JavaScript",
    icon: <FiCode />,
    questions: [
      "Explain closures with an example.",
      "Difference between var, let, and const?",
      "What is event bubbling and event capturing?",
    ],
  },
  {
    category: "Backend",
    icon: <FiDatabase />,
    questions: [
      "What is middleware in Express?",
      "Explain JWT authentication.",
      "How do you secure REST APIs?",
    ],
  },
  {
    category: "Behavioral",
    icon: <FiUser />,
    questions: [
      "Tell me about yourself.",
      "Describe a difficult problem you solved.",
      "How do you handle tight deadlines?",
    ],
  },
];

const QuestionList = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-5xl font-black mb-4">
          AI Generated Sample Questions
        </h2>

        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          See the type of personalized interview questions our AI generates from
          your resume and job description.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {questions.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-emerald-500/30 transition"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">{item.category}</h3>
            </div>

            <div className="space-y-4">
              {item.questions.map((question, qIndex) => (
                <div
                  key={qIndex}
                  className="bg-black/30 border border-zinc-800 rounded-2xl p-4"
                >
                  <p className="text-zinc-300">{question}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuestionList;
