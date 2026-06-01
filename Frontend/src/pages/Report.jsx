import React from "react";
import {
  FiFileText,
  FiClock,
  FiArrowRight,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";

const reports = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Google",
    score: 92,
    date: "28 May 2026",
    status: "Completed",
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "Amazon",
    score: 85,
    date: "25 May 2026",
    status: "Completed",
  },
  {
    id: 3,
    role: "MERN Stack Developer",
    company: "Microsoft",
    score: 88,
    date: "20 May 2026",
    status: "Completed",
  },
];

const Reports = () => {
  return (
    <main className="min-h-screen  from-black via-zinc-900 to-zinc-950 text-white px-6 py-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 text-2xl">
            <FiFileText />
          </div>

          <div>
            <h1 className="text-4xl font-black tracking-tight">
              Interview Reports
            </h1>

            <p className="text-zinc-400 mt-1">
              View all your generated AI interview reports.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-zinc-400 text-sm">Total Reports</p>
              <h2 className="text-3xl font-bold mt-2">12</h2>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 text-2xl">
              <FiFileText />
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-zinc-400 text-sm">Average Score</p>
              <h2 className="text-3xl font-bold mt-2">88%</h2>
            </div>

            <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 text-2xl">
              <FiTrendingUp />
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-zinc-400 text-sm">Completed</p>
              <h2 className="text-3xl font-bold mt-2">10</h2>
            </div>

            <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 text-2xl">
              <FiCheckCircle />
            </div>
          </div>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {reports.map((report) => (
          <div
            key={report.id}
            className="group bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 hover:border-emerald-500/30 rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
          >
            {/* Top */}
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 text-2xl">
                <FiFileText />
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                {report.status}
              </span>
            </div>

            {/* Content */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">{report.role}</h2>

              <p className="text-zinc-400 mb-4">{report.company}</p>

              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <FiClock />
                {report.date}
              </div>
            </div>

            {/* Score */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-zinc-400">Interview Score</span>

                <span className="text-emerald-400 font-bold">
                  {report.score}%
                </span>
              </div>

              <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{ width: `${report.score}%` }}
                ></div>
              </div>
            </div>

            {/* Button */}
            <button className="group w-full bg-zinc-800 hover:bg-emerald-500 text-white hover:text-black font-semibold py-3 rounded-2xl transition duration-300 flex items-center justify-center gap-3">
              View Full Report
              <FiArrowRight className="group-hover:translate-x-1 transition" />
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Reports;
