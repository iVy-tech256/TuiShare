"use client";
import Link from "next/link";

export default function LandingNavbar() {
  return (
    <nav className="w-full bg-blue-600 text-white py-4 px-8 flex items-center justify-center shadow fixed top-0 left-0 z-50">
      <Link href="/" className="text-2xl font-bold tracking-wide">
        Tuishare Plus
      </Link>
    </nav>
  );
}
