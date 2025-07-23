"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Spinner from "@/components/Spinner";
import Toast from "@/components/Toast";

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
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        {toast && <Toast message={toast.message} type={toast.type} />}
        <h2 className="text-2xl font-bold mb-4">Supporter Registration</h2>
        {loading ? (
          <Spinner />
        ) : submitted ? (
          <div className="bg-green-100 text-green-800 p-4 rounded mb-4">
            Registration submitted! We will contact you soon.
          </div>
        ) : (
          <form
            className="w-full max-w-md flex flex-col gap-4 bg-white p-6 rounded-lg shadow"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border p-3 rounded"
              value={form.name}
              onChange={handleChange}
              required
            />
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
              type="text"
              name="country"
              placeholder="Country"
              className="border p-3 rounded"
              value={form.country}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="py-3 px-6 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Register"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
