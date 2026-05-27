import React from "react";

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      {/* Loader Box */}
      <div className="bg-white px-8 py-6 rounded-2xl shadow-2xl flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <h1 className="text-lg font-semibold text-gray-700">Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingOverlay;
