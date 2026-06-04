import { Link } from "react-router-dom";
import { FiArrowRight, FiFileText } from "react-icons/fi";
import { useEffect } from "react";
import { useInterview } from "../features/hooks/useInterview";
import LoadingOverlay from "../component/LodingOverlay";

const ReportsList = () => {
  const { loading, reports, showAllReport } = useInterview();
  useEffect(() => {
    showAllReport();
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {loading && <LoadingOverlay />}
      <div className="flex justify-between items-center mb-10 bg-zinc-900 border rounded-3xl border-zinc-800 p-5  ">
        <div>
          <h1 className="text-4xl font-bold text-white">Your Reports</h1>
          <p className="text-zinc-400 mt-2">
            {!reports
              ? "You have not generated any report yet"
              : "View all generated interview reports"}
          </p>
        </div>
        <Link
          to="/generate"
          className="bg-emerald-500 text-black px-5 py-3 rounded-xl font-semibold"
        >
          Generate Report
        </Link>
      </div>

      <div className="space-y-5">
        {reports
          ? reports.map((report) => (
              <div
                key={report._id}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-emerald-500 transition"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <FiFileText className="text-emerald-400" />

                      <h2 className="text-xl font-semibold text-white">
                        {report.title}
                      </h2>
                    </div>

                    <p className="text-zinc-400">
                      Created: {new Date(report.createdAt).toLocaleDateString()}
                    </p>

                    <p className="text-zinc-400">
                      Match Score: {report.matchScore}%
                    </p>
                  </div>
                  <Link
                    to={`/ai-report/${report._id}`}
                    className="flex items-center gap-2 bg-emerald-500 text-black px-5 py-3 rounded-xl font-medium"
                  >
                    View Report
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default ReportsList;
