"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Spinner from "@/components/Spinner";
import Toast from "@/components/Toast";
import Link from "next/link";

export default function SupporterRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type?: "success" | "error";
  } | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setToast({
        message: "Registration submitted successfully!",
        type: "success",
      });
    }, 1500);
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans pt-20">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {toast && <Toast message={toast.message} type={toast.type} />}
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">
            Supporter Registration
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Register as a supporter (parent, sponsor, or guardian) to help
            students pay tuition, track your impact, and receive digital proof
            of your contributions.
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
                name="name"
                placeholder="Full Name"
                className="border p-3 rounded w-full"
                value={form.name}
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
                name="country"
                placeholder="Country"
                className="border p-3 rounded w-full"
                value={form.country}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="py-3 px-6 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition w-full"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Register"}
              </button>
            </form>
          )}
          <Link
            href="/supporter/login"
            className="mt-4 text-blue-600 hover:underline text-center block"
          >
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
}
