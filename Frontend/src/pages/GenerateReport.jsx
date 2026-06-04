import React, { useState } from "react";
import {
  FiUploadCloud,
  FiFileText,
  FiUser,
  FiZap,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import {} from "../features/hooks/useAuth.js";
import { useInterview } from "../features/hooks/useInterview.js";
import LoadingOverlay from "../component/LodingOverlay.jsx";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const GenerateReport = () => {
  const { loading, generateInterviewReport } = useInterview();
  const resumeRef = useRef(null);

  const [formData, setFormData] = useState({
    selfDescription: "",
    jobDescription: "",
  });
  const navigate = useNavigate();

  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSummit = async () => {
    const data = await generateInterviewReport({
      ...formData,
      resume: resumeRef.current.files[0],
    });
    navigate(`/ai-report/${data._id}`);
  };
  return (
    <>
      <div className="min-h-screen  from-black via-zinc-900 to-zinc-950 text-gray-100 flex items-center justify-center px-6 py-10 overflow-hidden">
        <div className="absolute w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-emerald-400/5 blur-3xl rounded-full bottom-0 right-0"></div>
        {loading && <LoadingOverlay />}
        <div className="relative w-full max-w-7xl bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Left Section */}
          <div className="p-10 lg:p-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-zinc-800  from-zinc-950 to-zinc-900">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium w-fit mb-6">
              <FiZap />
              AI Powered Interview Assistant
            </div>

            <h1 className="text-5xl font-black leading-tight mb-6 tracking-tight">
              Build Your
              <span className="block text-emerald-400 drop-shadow-lg">
                Dream Interview
              </span>
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl">
              Generate personalized technical and behavioral interview reports
              instantly using your resume and job description with advanced AI.
            </p>

            <div className="space-y-5">
              <div className="group flex items-start gap-4 bg-zinc-900/70 border border-zinc-800 hover:border-emerald-500/30 rounded-2xl p-5 transition duration-300 hover:-translate-y-1">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 text-xl">
                  <FiCheckCircle />
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Smart AI Questions
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    AI generates real-world interview questions based on your
                    role.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 bg-zinc-900/70 border border-zinc-800 hover:border-emerald-500/30 rounded-2xl p-5 transition duration-300 hover:-translate-y-1">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 text-xl">
                  <FiFileText />
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Resume Based Analysis
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Personalized reports crafted directly from your uploaded
                    resume.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 bg-zinc-900/70 border border-zinc-800 hover:border-emerald-500/30 rounded-2xl p-5 transition duration-300 hover:-translate-y-1">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 text-xl">
                  <FiUser />
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Behavioral Preparation
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Improve communication and confidence with behavioral
                    guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-10 lg:p-14 bg-zinc-900/70 backdrop-blur-lg">
            <div className="mb-10">
              <h2 className="text-4xl font-bold mb-3 tracking-tight">
                Generate Report
              </h2>

              <p className="text-zinc-400 leading-relaxed">
                Fill the details below and let AI create a complete interview
                preparation experience for you.
              </p>
            </div>

            <div className="space-y-7">
              <div>
                <label
                  htmlFor="jobDescription"
                  className="flex items-center gap-2 mb-3 text-sm font-semibold text-zinc-300"
                >
                  <FiFileText className="text-emerald-400" />
                  Job Description
                </label>

                <textarea
                  name="jobDescription"
                  id="jobDescription"
                  placeholder="Paste the complete job description here..."
                  value={formData.jobDescription}
                  onChange={handleChanges}
                  className="w-full min-h-28 bg-black/40 border border-zinc-800 rounded-2xl p-5 text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 resize-none transition duration-300"
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="resume"
                  className="flex items-center gap-2 mb-3 text-sm font-semibold text-zinc-300"
                >
                  <FiUploadCloud className="text-emerald-400" />
                  Upload Resume (PDF)
                </label>

                <input
                  type="file"
                  name="resume"
                  id="resume"
                  accept=".pdf"
                  ref={resumeRef}
                  className="w-full bg-black/40 border border-zinc-800 rounded-2xl p-4 text-zinc-400 cursor-pointer file:bg-emerald-500 file:border-0 file:text-white file:px-5 file:py-2.5 file:rounded-xl hover:file:bg-emerald-600 transition duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="selfDescription"
                  className="flex items-center gap-2 mb-3 text-sm font-semibold text-zinc-300"
                >
                  <FiUser className="text-emerald-400" />
                  Self Description
                </label>

                <textarea
                  name="selfDescription"
                  id="selfDescription"
                  value={formData.selfDescription}
                  onChange={handleChanges}
                  placeholder="Tell us about your experience, achievements, and career goals..."
                  className="w-full min-h-28 bg-black/40 border border-zinc-800 rounded-2xl p-5 text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 resize-none transition duration-300"
                ></textarea>
              </div>

              <button
                onClick={handleSummit}
                className="group w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-2xl transition duration-300 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-3 text-lg"
              >
                Generate Interview Report
                <FiArrowRight className="group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateReport;
