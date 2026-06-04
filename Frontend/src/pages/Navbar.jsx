import React from "react";
import {
  FiUploadCloud,
  FiFileText,
  FiUser,
  FiZap,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../features/hooks/useAuth";
import Features from "./Features";

const Navbar = () => {
  const { user, handleLogout } = useAuth();

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <FiZap className="text-black text-xl" />
            </div>

            <div>
              <h1 className="text-xl font-black tracking-wide text-white">
                InterviewAI
              </h1>
              <p className="text-xs text-zinc-500">
                Smart Interview Preparation
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <Link
              to={"/"}
              className="hover:text-emerald-400 transition duration-300"
            >
              Home
            </Link>

            <Link
              to={"/features"}
              className="hover:text-emerald-400 transition duration-300"
            >
              Features
            </Link>
            {/* Report */}
            <Link
              to={"/all-ai-report"}
              className="hover:text-emerald-400 transition duration-300"
            >
              Reports
            </Link>

            <Link
              to={"/contact"}
              className="hover:text-emerald-400 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Button */}
          {!user ? (
            <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-5 py-2.5 rounded-xl transition duration-300 shadow-lg shadow-emerald-500/20">
              Get Started
            </button>
          ) : (
            <button
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-5 py-2.5 rounded-xl transition duration-300 shadow-lg shadow-emerald-500/20"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
