import React from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiTrendingUp,
  FiFileText,
  FiStar,
} from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../features/hooks/useAuth";
import QuestionList from "../component/QuestionList";

const Hero = () => {
  const { user } = useAuth();
  return (
    <main className="min-h-screen from-black via-zinc-900 to-zinc-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FiStar />
            AI Powered Interview Preparation
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            Crack Your
            <span className="block text-emerald-400">Dream Interview</span>
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-2xl">
            Upload your resume, paste the job description, and generate
            personalized interview reports with technical questions, behavioral
            preparation, answer guidance, and AI scoring.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5">
            <Link
              to={user ? "/generate" : "/login"}
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-7 py-4 rounded-2xl transition duration-300 flex items-center gap-3 shadow-lg shadow-emerald-500/20"
            >
              Generate Report
              <FiArrowRight />
            </Link>

            <Link
              to={"/demo-report"}
              className="bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 px-7 py-4 rounded-2xl transition duration-300"
            >
              View Demo Reports
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-14">
            <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-5">
              <FiCheckCircle className="text-emerald-400 text-2xl mb-3" />
              <h3 className="font-semibold mb-2">AI Questions</h3>
              <p className="text-zinc-400 text-sm">
                Personalized interview questions.
              </p>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-5">
              <FiTrendingUp className="text-blue-400 text-2xl mb-3" />
              <h3 className="font-semibold mb-2">Performance Score</h3>
              <p className="text-zinc-400 text-sm">
                Smart AI evaluation reports.
              </p>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-5">
              <FiFileText className="text-purple-400 text-2xl mb-3" />
              <h3 className="font-semibold mb-2">Resume Analysis</h3>
              <p className="text-zinc-400 text-sm">
                Deep resume based analysis.
              </p>
            </div>
          </div>
        </div>

        {/* Right Dummy Report */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full"></div>
          {!user && (
            <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-tl-none p-8 shadow-2xl">
              {/* Top */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-zinc-400 text-sm">AI Interview Report</p>

                  <h2 className="text-3xl font-bold mt-2">
                    Frontend Developer
                  </h2>
                </div>

                <div className="bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-2xl font-bold">
                  92%
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-5 mb-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-zinc-300">React</span>
                    <span className="text-emerald-400">95%</span>
                  </div>

                  <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="w-[95%] h-full bg-emerald-500 rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-zinc-300">JavaScript</span>
                    <span className="text-blue-400">90%</span>
                  </div>

                  <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="w-[90%] h-full bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-zinc-300">Communication</span>
                    <span className="text-purple-400">85%</span>
                  </div>

                  <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                <div className="bg-black/40 border border-zinc-800 rounded-2xl p-4">
                  <p className="text-sm text-zinc-500 mb-2">
                    Technical Question
                  </p>

                  <h3 className="font-medium">Explain React Virtual DOM?</h3>
                </div>

                <div className="bg-black/40 border border-zinc-800 rounded-2xl p-4">
                  <p className="text-sm text-zinc-500 mb-2">
                    Behavioral Question
                  </p>

                  <h3 className="font-medium">
                    Tell me about a difficult challenge you solved.
                  </h3>
                </div>
              </div>
            </div>
          )}
          <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-tl-none p-8 shadow-2xl">
            <QuestionList />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
