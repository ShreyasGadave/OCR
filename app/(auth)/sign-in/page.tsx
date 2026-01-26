"use client";

import React from "react";
import { Mail, Lock } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-black px-4">
      <div className="w-full max-w-md rounded-2xl bg-zinc-700 p-8 shadow-xl border border-zinc-800">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-black text-white text-2xl font-bold">
            a
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-white text-center">
          Welcome Back
        </h1>
        <p className="text-sm text-zinc-400 text-center mt-2">
          Enter your credentials to access your account.
        </p>

        {/* Google */}
        <button className="mt-6 w-full flex items-center justify-center gap-3 rounded-lg bg-zinc-100 text-black py-2.5 font-medium hover:bg-zinc-200 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="h-5 w-5"
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-zinc-700 flex-1" />
          <span className="text-xs text-zinc-400">OR</span>
          <div className="h-px bg-zinc-700 flex-1" />
        </div>

        {/* 🔐 Email + Password Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg bg-zinc-800 border border-zinc-700 py-2.5 pl-10 pr-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full rounded-lg bg-zinc-800 border border-zinc-700 py-2.5 pl-10 pr-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-white text-black py-2.5 font-medium hover:bg-zinc-200 transition"
          >
            Sign In
          </button>
        </form>

        {/* Skip */}
        <button className="mt-6 w-full rounded-lg border border-zinc-700 py-2.5 text-white hover:bg-zinc-800 transition">
          Skip for now
        </button>

        {/* Footer */}
        <p className="mt-6 text-xs text-zinc-500 text-center">
          By logging in, you agree to our{" "}
          <span className="underline cursor-pointer">Terms of Service</span> and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Page;
