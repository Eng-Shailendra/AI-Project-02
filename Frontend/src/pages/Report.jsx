import React, { useState } from "react";
import {
  FiCheckCircle,
  FiAlertCircle,
  FiBookOpen,
  FiTarget,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

import { useInterview } from "../features/hooks/useInterview";
import LoadingOverlay from "../component/LodingOverlay";

const Report = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  let { loading, report } = useInterview();

  const temp = {
    matchScore: 88,
    technicalQuestions: [
      {
        question:
          "How do different components of the MERN stack (MongoDB, Express.js, React.js, Node.js) interact in a typical full-stack application, and how do you ensure efficient data flow between them?",
        intention:
          "To assess the candidate's understanding of the architectural flow, data communication, and integration patterns within a MERN application.",
        answer:
          "Explain that React.js on the client-side sends HTTP requests (e.g., using Axios or Fetch) to the Express.js/Node.js backend. The Express.js server handles routing, middleware (for authentication, logging), and calls controller functions. These controllers interact with MongoDB (via Mongoose ORM) to perform CRUD operations. The data retrieved from MongoDB is then sent back to the React client as JSON, which updates the UI. Emphasize concepts like RESTful API design, statelessness, and error handling.",
      },
      {
        question:
          "You mentioned designing RESTful API endpoints and implementing user authentication in your projects. Describe your approach to designing a robust RESTful API and explain common strategies for securing it with authentication and authorization in an Express.js application.",
        intention:
          "To evaluate knowledge of API design principles, security best practices, and practical implementation in an Express.js context.",
        answer:
          "For API design, discuss using clear, resource-based URLs (e.g., /api/users, /api/listings), appropriate HTTP methods (GET, POST, PUT, DELETE), standard HTTP status codes, and statelessness. For authentication, explain using JSON Web Tokens (JWTs): users log in, receive a JWT, and send it with subsequent requests in the Authorization header. For authorization, describe using middleware to verify the JWT and check user roles or permissions before granting access to specific resources or actions.",
      },
      {
        question:
          "In your Zerodha Clone project, you utilized React.js with a component-based architecture and state management. Can you explain the React component lifecycle and how you manage state effectively in complex applications?",
        intention:
          "To probe deeper into React knowledge, beyond basic usage, and assess understanding of core concepts like component lifecycles and advanced state management.",
        answer:
          "Explain the three main phases of a component's lifecycle: Mounting (component created and inserted into DOM), Updating (component re-renders due to state/prop changes), and Unmounting (component removed from DOM). Discuss how hooks like `useEffect` can be used to handle side effects in these phases (e.g., data fetching on mount, cleanup on unmount). For state management, explain using `useState` for local component state, `useContext` for sharing state across a component tree without prop drilling, and potentially mentioning external libraries like Redux/Zustand for global application state in very large applications.",
      },
      {
        question:
          "You have experience with both MongoDB and MySQL. When would you typically choose a NoSQL database like MongoDB over a relational database like MySQL, and vice-versa, for a web application?",
        intention:
          "To understand the candidate's decision-making process for database selection based on project requirements and data characteristics.",
        answer:
          "Explain that MongoDB (NoSQL, document-oriented) is suitable for projects with rapidly evolving or unstructured data, high data volume, need for horizontal scalability, and when a flexible schema is preferred (e.g., content management, IoT data). MySQL (relational) is better for applications requiring strict schema, complex transactions (ACID properties), strong data consistency, and when data relationships are well-defined and critical (e.g., financial systems, traditional CRM). Give examples for each.",
      },
    ],
    behavioralQuestions: [
      {
        question:
          "Describe a challenging technical problem you encountered during one of your MERN stack projects and how you approached solving it. What was the outcome, and what did you learn?",
        intention:
          "To evaluate the candidate's problem-solving methodology, critical thinking, debugging skills, and ability to learn from technical challenges.",
        answer:
          "Use the STAR method: Describe the 'Situation' (the project and specific problem), 'Task' (what needed to be done), 'Action' (steps taken to diagnose, research, debug, and implement a solution, possibly involving documentation, community forums, or collaboration), and 'Result' (the successful outcome and key learning points, emphasizing resilience and improved technical understanding).",
      },
      {
        question:
          "You mentioned your interest in AI integration and learning Gemini API. How do you approach learning a new technology or API, especially when it's complex or outside your primary stack?",
        intention:
          "To assess the candidate's proactiveness in learning, resourcefulness, ability to adapt to new tools, and self-directed growth mindset.",
        answer:
          "Explain a structured approach: start with official documentation and tutorials, build small proof-of-concept projects to gain hands-on experience, break down complex features into smaller manageable parts, utilize online courses or community resources (Stack Overflow, GitHub examples), and apply the new skill in a practical project. Emphasize persistence and continuous practice.",
      },
      {
        question:
          "The job description highlights collaboration with a development team. Describe a situation where you worked as part of a team on a project. What was your role, and how did you contribute to the team's success?",
        intention:
          "To gauge the candidate's interpersonal skills, ability to work effectively in a group, contribution to team goals, and understanding of team dynamics.",
        answer:
          "Use the STAR method: Describe a 'Situation' where teamwork was involved (e.g., a group project, open-source contribution), your specific 'Task' or responsibilities, the 'Actions' you took to collaborate (e.g., pair programming, code reviews, active communication, sharing knowledge, resolving conflicts), and the positive 'Result' for the team and project, highlighting your contribution to shared success.",
      },
      {
        question:
          "Tell me about a time when you received constructive feedback on your code or work. How did you react to it, and what steps did you take as a result?",
        intention:
          "To assess the candidate's openness to feedback, ability to learn from criticism, self-awareness, and commitment to continuous improvement.",
        answer:
          "Describe a specific 'Situation' where feedback was given. Explain your initial 'Reaction' (e.g., listened actively, asked clarifying questions). Detail the 'Actions' you took to implement the feedback (e.g., refactored code, learned a new pattern, adjusted approach). Conclude with the 'Result' of your actions and what you learned from the experience, demonstrating your growth mindset.",
      },
    ],
    skillGap: [
      {
        skill: "Tailwind CSS",
        severity: "low",
      },
      {
        skill: "Advanced Deployment & CI/CD",
        severity: "medium",
      },
      {
        skill: "Cross-functional Communication",
        severity: "medium",
      },
    ],
    preparationPlan: [
      {
        day: 1,
        focus: "MERN Stack Fundamentals Review",
        task: [
          "Review core JavaScript (ES6+) concepts, asynchronous programming (Promises, async/await).",
          "Solidify understanding of React.js Hooks (useState, useEffect, useContext) and component lifecycle.",
          "Revisit Node.js event loop and Express.js middleware architecture.",
          "Practice basic CRUD operations with MongoDB and Mongoose.",
        ],
        _id: "6a1ea4527d2d46b1ab2706e2",
      },
      {
        day: 2,
        focus: "RESTful APIs and Authentication",
        task: [
          "Deep dive into RESTful API design principles (statelessness, resource-based URLs, HTTP methods/status codes).",
          "Implement JWT-based authentication and authorization from scratch in a mini-Express.js app.",
          "Understand password hashing (bcrypt) and secure token handling.",
        ],
        _id: "6a1ea4527d2d46b1ab2706e3",
      },
      {
        day: 3,
        focus: "React.js Advanced Concepts & Performance",
        task: [
          "Explore advanced React patterns (higher-order components, render props, custom hooks).",
          "Understand and apply performance optimization techniques (React.memo, useCallback, useMemo).",
          "Review responsive design principles and practice building responsive layouts.",
        ],
        _id: "6a1ea4527d2d46b1ab2706e4",
      },
      {
        day: 4,
        focus: "Database Management & System Design Basics",
        task: [
          "Review MongoDB indexing, aggregation framework, and common query patterns.",
          "Understand the trade-offs between SQL and NoSQL databases for different use cases.",
          "Practice sketching out high-level system designs for scalable MERN applications, considering data flow and service interactions.",
        ],
        _id: "6a1ea4527d2d46b1ab2706e5",
      },
      {
        day: 5,
        focus: "Behavioral Interview Preparation",
        task: [
          "Practice answering common behavioral questions using the STAR method (Situation, Task, Action, Result).",
          "Prepare clear and concise explanations of your project experiences, focusing on challenges and achievements.",
          "Conduct a mock interview focusing on communication and storytelling.",
        ],
        _id: "6a1ea4527d2d46b1ab2706e6",
      },
      {
        day: 6,
        focus: "Skill Gap Focus & Deployment Knowledge",
        task: [
          "Spend 2-3 hours learning the basics of Tailwind CSS by following a quick tutorial and building a small UI component.",
          "Research CI/CD pipelines (e.g., GitHub Actions) and containerization with Docker.",
          "Understand basic deployment workflows for MERN apps on cloud platforms like Vercel/Netlify (frontend) and Heroku/Render (backend) or AWS EC2/Lightsail.",
        ],
        _id: "6a1ea4527d2d46b1ab2706e7",
      },
      {
        day: 7,
        focus: "Final Review & Rest",
        task: [
          "Quick review of all learned concepts and key notes.",
          "Practice explaining your projects concisely, focusing on technical decisions and impact.",
          "Ensure you are well-rested and mentally prepared for the interview.",
        ],
        _id: "6a1ea4527d2d46b1ab2706e8",
      },
    ],
    _id: "6a1ea4527d2d46b1ab2706e1",
    createdAt: "2026-06-02T09:37:22.324Z",
  };
  if (!report) report = temp;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 text-white">
      {loading && <LoadingOverlay />}
      {/* Header */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4">AI Interview Report</h1>

        <div className="flex items-center gap-6">
          <div className="relative w-28 h-28">
            <div className="absolute inset-0 rounded-full border-[10px] border-emerald-500"></div>

            <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-emerald-400">
              {report.matchScore}%
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Match Score</h2>
            <p className="text-zinc-400">
              Strong alignment with the target role.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Questions */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Technical Questions</h2>

        <div className="space-y-4">
          {report.technicalQuestions.map((q, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl"
            >
              <button
                onClick={() =>
                  setOpenQuestion(
                    openQuestion === `tech-${index}` ? null : `tech-${index}`,
                  )
                }
                className="w-full p-5 flex justify-between items-center text-left"
              >
                <span className="font-medium">{q.question}</span>

                {openQuestion === `tech-${index}` ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )}
              </button>

              {openQuestion === `tech-${index}` && (
                <div className="px-5 pb-5 border-t border-zinc-800">
                  <div className="mt-4">
                    <h4 className="font-semibold text-emerald-400 mb-2">
                      Interviewer Intention
                    </h4>

                    <p className="text-zinc-400">{q.intention}</p>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-blue-400 mb-2">
                      Suggested Answer
                    </h4>

                    <p className="text-zinc-300">{q.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Behavioral Questions */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Behavioral Questions</h2>

        <div className="space-y-4">
          {report.behavioralQuestions.map((q, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
            >
              <h3 className="font-semibold mb-3">{q.question}</h3>

              <p className="text-zinc-400 mb-3">{q.intention}</p>

              <div className="bg-zinc-950 rounded-xl p-4">{q.answer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skill Gap */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Skill Gap Analysis</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {report.skillGap.map((skill, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                {skill.severity === "low" ? (
                  <FiCheckCircle className="text-green-400" />
                ) : (
                  <FiAlertCircle className="text-yellow-400" />
                )}

                <h3 className="font-semibold">{skill.skill}</h3>
              </div>

              <span className="capitalize text-zinc-400">
                Severity: {skill.severity}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Preparation Plan */}
      <section>
        <h2 className="text-3xl font-bold mb-6">7 Day Preparation Plan</h2>

        <div className="space-y-5">
          {report.preparationPlan.map((day) => (
            <div
              key={day.day}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <FiBookOpen className="text-emerald-400" />

                <h3 className="text-xl font-semibold">
                  Day {day.day} - {day.focus}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Report;
