"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Spinner from "@/components/Spinner";
import Toast from "@/components/Toast";
import Link from "next/link";

export default function SchoolLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type?: "success" | "error";
  } | null>(null);
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    try {
      const res = await fetch("/api/school/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (result.success) {
        setToast({ message: result.message, type: "success" });
        setForm({ email: "", password: "" }); // Reset form fields
        setTimeout(() => {
          router.push("/school/dashboard");
        }, 1000);
      } else {
        setToast({ message: result.message || "Login failed.", type: "error" });
        setForm({ ...form, password: "" }); // Clear only password field on error
      }
    } catch {
      setToast({ message: "Network error. Please try again.", type: "error" });
      setForm({ ...form, password: "" }); // Clear only password field on error
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans pt-20">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {toast && <Toast message={toast.message} type={toast.type} />}
        <div className="w-full max-w-xl bg-white rounded-lg shadow p-12">
          <h2 className="text-3xl font-bold mb-4 text-center text-yellow-600">
            School Login
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
                autoComplete="email"
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
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={togglePassword}
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
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
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          )}
          <Link
            href="/school/register"
            className="mt-4 text-yellow-600 hover:underline text-center block"
          >
            Don&apos;t have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
