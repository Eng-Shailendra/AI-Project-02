import React, { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../features/hooks/useAuth.js";
import LoadingOverlay from "../component/LodingOverlay.jsx";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(formData);
    navigate("/");
  };

  return (
    <>
      {loading && <LoadingOverlay />}
      <div className="min-h-screen  from-blue-100 to-indigo-200 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-3xl shadow-2xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
              S
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Login to your account
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
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
                value={formData.email}
                onChange={handlechange}
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
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                  value={formData.password}
                  onChange={handlechange}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-m text-indigo-600 font-semibold "
                >
                  {showPassword ? <GoEyeClosed /> : <GoEye />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#" className="text-indigo-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-1px w-full bg-gray-300"></div>

              <span className="text-gray-400 text-sm">OR</span>

              <div className="h-1px w-full bg-gray-300"></div>
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full border border-gray-300 py-3 rounded-xl font-semibold hover:bg-amber-700 transition"
            >
              Continue with Google
            </button>

            {/* Signup */}
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to={"/signup"}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
