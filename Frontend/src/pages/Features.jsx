
import React from "react";
import {
  FiFileText,
  FiUploadCloud,
  FiCpu,
  FiUser,
  FiTrendingUp,
  FiCheckCircle,
  FiDownload,
  FiZap,
} from "react-icons/fi";

const Features = () => {
  const features = [
    {
      icon: <FiUploadCloud />,
      title: "Resume Upload",
      description:
        "Upload your PDF resume and let AI analyze your skills, experience, and projects.",
    },
    {
      icon: <FiFileText />,
      title: "Job Description Analysis",
      description:
        "Paste any job description and get interview questions tailored to that role.",
    },
    {
      icon: <FiCpu />,
      title: "AI Technical Questions",
      description:
        "Generate role-specific technical questions with detailed answers and explanations.",
    },
    {
      icon: <FiUser />,
      title: "Behavioral Questions",
      description:
        "Prepare for HR rounds with personalized behavioral interview questions.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Skill Evaluation",
      description:
        "Receive AI-generated skill assessments and readiness scores.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Answer Guidance",
      description:
        "Learn how to answer interview questions with confidence and structure.",
    },
    {
      icon: <FiDownload />,
      title: "Download Reports",
      description:
        "Save and access interview reports whenever you need them.",
    },
    {
      icon: <FiZap />,
      title: "Instant Generation",
      description:
        "Generate comprehensive interview reports in seconds.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Hero */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium">
            Powerful AI Features
          </span>

          <h1 className="text-5xl md:text-6xl font-black mt-6 mb-6">
            Everything You Need To
            <span className="block text-emerald-400">
              Ace Your Interview
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-zinc-400 text-lg leading-relaxed">
            Interview AI transforms your resume and job description into
            personalized interview preparation reports, helping you become
            confident and job-ready.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 hover:border-emerald-500/30 rounded-3xl p-7 transition duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-3xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Workflow Section */}
        <section className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-14">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <span className="text-emerald-400 text-5xl font-black">
                01
              </span>

              <h3 className="text-2xl font-bold mt-4 mb-3">
                Upload Resume
              </h3>

              <p className="text-zinc-400">
                Upload your PDF resume so AI can understand your background,
                skills, and experience.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <span className="text-emerald-400 text-5xl font-black">
                02
              </span>

              <h3 className="text-2xl font-bold mt-4 mb-3">
                Add Job Description
              </h3>

              <p className="text-zinc-400">
                Paste the target job description to align interview preparation
                with employer expectations.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <span className="text-emerald-400 text-5xl font-black">
                03
              </span>

              <h3 className="text-2xl font-bold mt-4 mb-3">
                Get AI Report
              </h3>

              <p className="text-zinc-400">
                Receive technical questions, behavioral questions, answer tips,
                and readiness analysis instantly.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 text-center bg-zinc-900 border border-zinc-800 rounded-[32px] p-12">
          <h2 className="text-4xl font-black mb-4">
            Ready To Start Preparing?
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Generate your first AI-powered interview report and prepare smarter,
            faster, and with more confidence.
          </p>

          <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-4 rounded-2xl transition">
            Generate Report
          </button>
        </section>
      </div>
    </main>
  );
};

export default Features;

