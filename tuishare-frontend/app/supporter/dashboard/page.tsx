"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function SupporterDashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;
  if (!session)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="mb-4">You must be signed in to view this page.</p>
        <button
          className="py-2 px-6 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      </div>
    );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-20 flex flex-col items-center">
      {/* Top bar for Sign Out */}
      <div className="w-full max-w-4xl flex justify-end mb-4">
        <button
          onClick={() => signOut()}
          className="py-2 px-6 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow"
        >
          Sign Out
        </button>
      </div>
      <div className="w-full max-w-4xl">
        <header className="mb-8 text-center">
          <h2 className="text-4xl font-bold mb-2 text-blue-600">
            Welcome, Supporter!
          </h2>
          <p className="text-lg text-gray-600">
            Track your contributions, view supported students, and manage your
            impact.
          </p>
        </header>
        <section className="w-full bg-white rounded-lg shadow-lg p-8 mb-8 transition hover:scale-[1.02]">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">
            Recent Contributions
          </h3>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2">Date</th>
                <th className="py-2">Student</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-blue-50 transition">
                <td className="py-2">2024-06-01</td>
                <td className="py-2">Jane Doe</td>
                <td className="py-2">UGX 1,200,000</td>
                <td className="py-2 text-green-600 font-semibold">Confirmed</td>
              </tr>
              <tr className="hover:bg-blue-50 transition">
                <td className="py-2">2024-05-28</td>
                <td className="py-2">John Okello</td>
                <td className="py-2">UGX 800,000</td>
                <td className="py-2 text-green-600 font-semibold">Confirmed</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="w-full bg-white rounded-lg shadow-lg p-8 transition hover:scale-[1.02]">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">
            Supported Students
          </h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center border-b pb-2">
              <span className="font-medium">Jane Doe</span>
              <span className="text-green-600 font-semibold">Paid</span>
            </li>
            <li className="flex justify-between items-center border-b pb-2">
              <span className="font-medium">John Okello</span>
              <span className="text-red-600 font-semibold">Pending</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
