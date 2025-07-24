"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Spinner from "@/components/Spinner";
import Toast from "@/components/Toast";
import Link from "next/link";

export default function StudentRegister() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    schoolId: "",
    schoolName: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type?: "success" | "error";
  } | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      setToast({
        message: "Please enter a valid email address.",
        type: "error",
      });
      return;
    }
    setLoading(true);
    setToast(null);

    try {
      const res = await fetch("/api/student/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
        setToast({ message: result.message, type: "success" });
        setForm({
          fullName: "",
          email: "",
          schoolId: "",
          schoolName: "",
          password: "",
        });
      } else {
        setToast({
          message: result.message || "Registration failed.",
          type: "error",
        });
      }
    } catch {
      setToast({ message: "Network error. Please try again.", type: "error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans pt-20">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {toast && <Toast message={toast.message} type={toast.type} />}
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-12">
          <h2 className="text-3xl font-bold mb-4 text-center text-green-600">
            Student Registration
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Register to receive tuition support, manage your virtual card, and
            access educational resources with Tuishare Plus.
          </p>
          {loading ? (
            <Spinner />
          ) : submitted ? (
            <div className="bg-green-100 text-green-800 p-4 rounded mb-4 text-center">
              Registration submitted! We will contact you soon.
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="border p-3 rounded w-full"
                value={form.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="border p-3 rounded w-full"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="schoolId"
                placeholder="School ID"
                className="border p-3 rounded w-full"
                value={form.schoolId}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="schoolName"
                placeholder="School Name"
                className="border p-3 rounded w-full"
                value={form.schoolName}
                onChange={handleChange}
                required
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="border p-3 rounded w-full pr-10"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={togglePassword}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <span aria-label="Hide password">&#128065;</span>
                  ) : (
                    <span aria-label="Show password">&#128064;</span>
                  )}
                </button>
              </div>
              <button
                type="submit"
                className="py-3 px-6 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition w-full"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Register"}
              </button>
            </form>
          )}
          <Link
            href="/student/login"
            className="mt-4 text-green-600 hover:underline text-center block"
          >
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
}
