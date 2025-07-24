"use client";

import Link from "next/link";
import LandingNavbar from "@/components/LandingNavbar"; // Fixed import path

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans pt-20">
      <LandingNavbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <section className="max-w-2xl w-full text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-blue-700">
            Tuishare Plus
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Empowering African students with seamless, secure, and accountable
            tuition payments. Connect supporters (parents, sponsors, guardians),
            students, and schools using modern Web3 technology.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
            <Link
              href="/supporter/register"
              className="py-3 px-8 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow hover:bg-blue-700 transition-all duration-200"
            >
              Register as Supporter
            </Link>
            <Link
              href="/student/register"
              className="py-3 px-8 rounded-lg bg-green-600 text-white font-semibold text-lg shadow hover:bg-green-700 transition-all duration-200"
            >
              Register as Student
            </Link>
            <Link
              href="/school/register"
              className="py-3 px-8 rounded-lg bg-yellow-500 text-white font-semibold text-lg shadow hover:bg-yellow-600 transition-all duration-200"
            >
              Register School
            </Link>
          </div>
        </section>
        <section className="max-w-3xl w-full mx-auto grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow p-6 transition hover:scale-105">
            <h3 className="text-xl font-bold mb-2 text-blue-700">
              For Supporters
            </h3>
            <p className="text-gray-600 mb-4">
              Support students directly, track your impact, and receive digital
              proof of your contributions.
            </p>
            <Link
              href="/supporter/register"
              className="text-blue-600 hover:underline font-medium"
            >
              Start Supporting &rarr;
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6 transition hover:scale-105">
            <h3 className="text-xl font-bold mb-2 text-green-700">
              For Students
            </h3>
            <p className="text-gray-600 mb-4">
              Register to receive tuition support, manage your virtual card, and
              access educational resources.
            </p>
            <Link
              href="/student/register"
              className="text-green-600 hover:underline font-medium"
            >
              Register Now &rarr;
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6 transition hover:scale-105">
            <h3 className="text-xl font-bold mb-2 text-yellow-600">
              For Schools
            </h3>
            <p className="text-gray-600 mb-4">
              Join the platform to receive secure payments, confirm tuition, and
              manage student records.
            </p>
            <Link
              href="/school/register"
              className="text-yellow-600 hover:underline font-medium"
            >
              Join as School &rarr;
            </Link>
          </div>
        </section>
      </main>
      <footer className="mt-12 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Tuishare Plus. All rights reserved.
      </footer>
    </div>
  );
}
