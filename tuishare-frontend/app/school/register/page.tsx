"use client";
import { useState } from "react";
import Link from "next/link";

export default function SchoolRegister() {
  const [form, setForm] = useState({
    schoolName: "",
    schoolEmail: "",
    schoolAddress: "",
    contactPerson: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Send form data to backend API
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground font-sans p-8">
      <Link
        href="/"
        className="mb-6 text-blue-600 hover:underline font-semibold"
      >
        ← Back to Home
      </Link>
      <h2 className="text-2xl font-bold mb-4">School Registration</h2>
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
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
}
