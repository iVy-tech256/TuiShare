"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Spinner from "@/components/Spinner";
import Toast from "@/components/Toast";
import Link from "next/link";

export default function SchoolRegister() {
  const [form, setForm] = useState({
    schoolName: "",
    schoolEmail: "",
    schoolAddress: "",
    contactPerson: "",
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
    if (!validateEmail(form.schoolEmail)) {
      setToast({
        message: "Please enter a valid email address.",
        type: "error",
      });
      return;
    }
    setLoading(true);
    setToast(null);

    try {
      const res = await fetch("/api/school/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
        setToast({ message: result.message, type: "success" });
        setForm({
          schoolName: "",
          schoolEmail: "",
          schoolAddress: "",
          contactPerson: "",
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
          <h2 className="text-3xl font-bold mb-4 text-center text-yellow-600">
            School Registration
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Register your school to securely receive tuition payments, confirm
            student fees, and manage records with Tuishare Plus.
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
                name="schoolName"
                placeholder="School Name"
                className="border p-3 rounded w-full"
                value={form.schoolName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="schoolEmail"
                placeholder="School Email"
                className="border p-3 rounded w-full"
                value={form.schoolEmail}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="schoolAddress"
                placeholder="School Address"
                className="border p-3 rounded w-full"
                value={form.schoolAddress}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="contactPerson"
                placeholder="Contact Person"
                className="border p-3 rounded w-full"
                value={form.contactPerson}
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
                className="py-3 px-6 rounded bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition w-full"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Register School"}
              </button>
            </form>
          )}
          <Link
            href="/school/login"
            className="mt-4 text-yellow-600 hover:underline text-center block"
          >
            Already registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
}
