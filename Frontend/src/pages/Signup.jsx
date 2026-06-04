import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerApi } from "../features/api/api-auth.js";
import LoadingOverlay from "../component/LodingOverlay.jsx";
import { useAuth } from "../features/hooks/useAuth.js";
import toast from "react-hot-toast";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { loading, handleLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const userData = {
      username: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    await registerApi(userData);
    navigate("/login");
    toast("Account Created Successfully!");
  };

  return (
    <>
      {loading && <LoadingOverlay />}
      <div className="min-h-screen from-purple-100 to-indigo-200 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-3xl shadow-2xl p-8">
          {/* Logo */}
          {/* <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
            S
          </div>
        </div> */}

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Create Account
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Sign up to get started
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 text-sm text-indigo-600 font-semibold"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" required />

              <p>
                I agree to the{" "}
                <span className="text-indigo-600 font-semibold cursor-pointer">
                  Terms & Conditions
                </span>
              </p>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300"
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-px w-full bg-gray-300"></div>

              <span className="text-gray-400 text-sm">OR</span>

              <div className="h-1px w-full bg-gray-300"></div>
            </div>

            {/* Google Signup */}
            <button
              type="button"
              className="w-full border border-gray-300 py-3 rounded-xl font-semibold hover:bg-amber-700 transition"
            >
              Continue with Google
            </button>

            {/* Login */}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
