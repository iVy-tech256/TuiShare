"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Spinner from "@/components/Spinner";
import Toast from "@/components/Toast";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground font-sans p-8">
      <Navbar />
      {toast && <Toast message={toast.message} type={toast.type} />}
      <h2 className="text-2xl font-bold mb-4">Student Login</h2>
      {loading ? (
        <Spinner />
      ) : (
        <form
          className="w-full max-w-md flex flex-col gap-4 bg-white p-6 rounded-lg shadow"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="border p-3 rounded"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border p-3 rounded"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="py-3 px-6 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      )}
    </div>
  );
}
