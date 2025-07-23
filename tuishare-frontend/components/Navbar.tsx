"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-blue-600 text-white py-4 px-8 flex items-center justify-between shadow fixed top-0 left-0 z-50">
      <Link href="/" className="text-2xl font-bold tracking-wide">
        Tuishare Plus
      </Link>
      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/" className="hover:text-blue-200 transition font-medium">
          Home
        </Link>
        <Link
          href="/supporter/register"
          className="hover:text-blue-200 transition font-medium"
        >
          Supporter
        </Link>
        <Link
          href="/student/register"
          className="hover:text-blue-200 transition font-medium"
        >
          Student
        </Link>
        <Link
          href="/school/register"
          className="hover:text-blue-200 transition font-medium"
        >
          School
        </Link>
      </div>
      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden flex items-center"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-blue-700 flex flex-col gap-4 py-4 px-8 md:hidden shadow-lg">
          <Link
            href="/"
            className="hover:text-blue-200 transition font-medium"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/supporter/register"
            className="hover:text-blue-200 transition font-medium"
            onClick={() => setOpen(false)}
          >
            Supporter
          </Link>
          <Link
            href="/student/register"
            className="hover:text-blue-200 transition font-medium"
            onClick={() => setOpen(false)}
          >
            Student
          </Link>
          <Link
            href="/school/register"
            className="hover:text-blue-200 transition font-medium"
            onClick={() => setOpen(false)}
          >
            School
          </Link>
        </div>
      )}
    </nav>
  );
}
