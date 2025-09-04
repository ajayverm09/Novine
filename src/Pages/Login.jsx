// src/pages/Login.jsx
import React from "react";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8"
      >
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Please login to continue
        </p>

        {/* Login Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:bg-white focus:ring-2 focus:ring-black outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:bg-white focus:ring-2 focus:ring-black outline-none transition"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              Remember me
            </label>
            <a href="#" className="text-black hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Login */}
        <div className="flex gap-3">
          <button className="flex-1 border rounded-lg py-2 hover:bg-gray-100 transition">
            Google
          </button>
          <button className="flex-1 border rounded-lg py-2 hover:bg-gray-100 transition">
            Facebook
          </button>
        </div>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-black font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
