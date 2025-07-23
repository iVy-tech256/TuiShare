"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function StudentRegister() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    schoolId: "",
    schoolName: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground font-sans p-8">
      <Navbar />
      <Link
        href="/"
        className="mb-6 text-blue-600 hover:underline font-semibold"
      >
        ← Back to Home
      </Link>
      <h2 className="text-2xl font-bold mb-4">Student Registration</h2>
      {submitted ? (
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
            name="fullName"
            placeholder="Full Name"
            className="border p-3 rounded"
            value={form.fullName}
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
            name="schoolId"
            placeholder="School ID"
            className="border p-3 rounded"
            value={form.schoolId}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="schoolName"
            placeholder="School Name"
            className="border p-3 rounded"
            value={form.schoolName}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="py-3 px-6 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
}
