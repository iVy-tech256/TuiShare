"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function StudentDashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;
  if (!session)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="mb-4">You must be signed in to view this page.</p>
        <button
          className="py-2 px-6 rounded bg-green-600 text-white font-semibold hover:bg-green-700"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {session.user.name} (Student)
      </h1>
      <p className="mb-8">This is your student dashboard.</p>
      <button
        className="py-2 px-6 rounded bg-green-600 text-white font-semibold hover:bg-green-700"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
}
