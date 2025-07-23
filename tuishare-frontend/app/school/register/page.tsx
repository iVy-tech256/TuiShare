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
        message: "School registration submitted successfully!",
        type: "success",
      });
    }, 1500);
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
