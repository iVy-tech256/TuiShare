"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Spinner from "@/components/Spinner";
import Toast from "@/components/Toast";
import Link from "next/link";

export default function StudentLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
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

    // Simulate login API call
    setTimeout(() => {
      setLoading(false);
      setToast({ message: "Login successful!", type: "success" });
      // TODO: Redirect to dashboard after successful login
    }, 1200);
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        {toast && <Toast message={toast.message} type={toast.type} />}
        <div className="w-full max-w-xl bg-white rounded-lg shadow p-12">
          <h2 className="text-3xl font-bold mb-4 text-center text-green-600">
            Student Login
          </h2>
          {loading ? (
            <Spinner />
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                type="password"
                name="password"
                placeholder="Password"
                className="border p-3 rounded w-full"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="py-3 px-6 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition w-full"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          )}
          <Link
            href="/student/register"
            className="mt-4 text-green-600 hover:underline text-center block"
          >
            Don&apos;t have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
