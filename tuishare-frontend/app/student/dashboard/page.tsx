"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function StudentDashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;
  if (!session || !session.user)
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
    <div className="min-h-screen bg-background text-foreground font-sans pt-20 flex flex-col items-center">
      <div className="w-full max-w-4xl flex justify-end mb-4">
        <button
          onClick={() => signOut()}
          className="py-2 px-6 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow"
        >
          Sign Out
        </button>
      </div>
      <div className="w-full max-w-4xl">
        <header className="mb-8 text-center">
          <h2 className="text-4xl font-bold mb-2 text-green-600">
            Welcome, Student!
          </h2>
          <p className="text-lg text-gray-600">
            View your tuition status, payment history, and manage your profile.
          </p>
        </header>
        <section className="w-full bg-white rounded-lg shadow-lg p-8 mb-8 transition hover:scale-[1.02]">
          <h3 className="text-xl font-semibold mb-4 text-green-700">
            Tuition Payments
          </h3>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2">Date</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-green-50 transition">
                <td className="py-2">2024-06-01</td>
                <td className="py-2">UGX 1,200,000</td>
                <td className="py-2 text-green-600 font-semibold">Paid</td>
              </tr>
              <tr className="hover:bg-green-50 transition">
                <td className="py-2">2024-05-28</td>
                <td className="py-2">UGX 800,000</td>
                <td className="py-2 text-red-600 font-semibold">Pending</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="w-full bg-white rounded-lg shadow-lg p-8 transition hover:scale-[1.02]">
          <h3 className="text-xl font-semibold mb-4 text-green-700">Profile</h3>
          <p className="text-gray-600 mb-4">
            Name: {session.user?.name}
            <br />
            Email: {session.user?.email}
          </p>
        </section>
      </div>
    </div>
  );
}
