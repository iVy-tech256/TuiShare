"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Spinner from "@/components/Spinner";
import Toast from "@/components/Toast";

export default function SchoolRegister() {
  const [form, setForm] = useState({
    schoolName: "",
    schoolEmail: "",
    schoolAddress: "",
    contactPerson: "",
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground font-sans p-8">
      <Navbar />
      {toast && <Toast message={toast.message} type={toast.type} />}
      <h2 className="text-2xl font-bold mb-4">School Registration</h2>
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
            name="schoolName"
            placeholder="School Name"
            className="border p-3 rounded"
            value={form.schoolName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="schoolEmail"
            placeholder="School Email"
            className="border p-3 rounded"
            value={form.schoolEmail}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="schoolAddress"
            placeholder="School Address"
            className="border p-3 rounded"
            value={form.schoolAddress}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contactPerson"
            placeholder="Contact Person"
            className="border p-3 rounded"
            value={form.contactPerson}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="py-3 px-6 rounded bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Register"}
          </button>
        </form>
      )}
      <Link
        href="/school/login"
        className="mt-4 text-yellow-600 hover:underline text-center"
      >
        Already have an account? Login
      </Link>
    </div>
  );
}
