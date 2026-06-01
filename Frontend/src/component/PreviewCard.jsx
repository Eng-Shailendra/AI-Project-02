import React from "react";
import { Link } from "react-router-dom";

const PreviewCard = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 h-[700px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">AI Report Preview</h2>

        <button className="bg-emerald-500 text-black px-4 py-2 rounded-xl">
          Download PDF
        </button>
      </div>

      <div className="bg-white rounded-2xl h-[580px] text-black p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Interview Analysis Report</h1>

        <p className="mb-4">Candidate: Suraj Sahu</p>

        <p className="mb-4">Target Role: Frontend Developer</p>

        <p className="mb-6">Overall Match Score: 88%</p>

        <h2 className="font-bold text-xl mb-3">Key Strengths</h2>

        <ul className="list-disc pl-6 mb-6">
          <li>Strong React knowledge</li>
          <li>JavaScript Fundamentals</li>
          <li>API Integration</li>
        </ul>

        <h2 className="font-bold text-xl mb-3">Areas for Improvement</h2>

        <ul className="list-disc pl-6">
          <li>System Design</li>
          <li>Testing</li>
          <li>Performance Optimization</li>
        </ul>
        <div className="mt-10 ">
          <Link
            to={"/generate"}
            className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-xl"
          >
            Generate Your Report
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
