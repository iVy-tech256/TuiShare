"use client";
import Link from "next/link";

export default function SchoolDashboard() {
  function handleSignOut() {
    // TODO: Add sign out logic here (e.g., clear auth, redirect)
    window.location.href = "/";
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-20 flex flex-col items-center">
      <div className="w-full max-w-5xl relative">
        {/* Sign Out Button */}
        <button
          onClick={handleSignOut}
          className="absolute top-0 right-0 mt-4 mr-4 py-2 px-6 rounded bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition shadow"
        >
          Sign Out
        </button>
        <header className="mb-10 text-center">
          <h2 className="text-4xl font-bold mb-2 text-yellow-600">
            School Dashboard
          </h2>
          <p className="text-lg text-gray-600">
            Manage tuition payments, confirm receipts, and oversee student
            records securely.
          </p>
        </header>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <section className="bg-white rounded-xl shadow-lg p-8 transition hover:scale-[1.02]">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">
              Recent Payments Received
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
                <tr className="hover:bg-yellow-50 transition">
                  <td className="py-2">2024-06-01</td>
                  <td className="py-2">Jane Doe</td>
                  <td className="py-2">UGX 1,200,000</td>
                  <td className="py-2 text-green-600 font-semibold">
                    Confirmed
                  </td>
                </tr>
                <tr className="hover:bg-yellow-50 transition">
                  <td className="py-2">2024-05-28</td>
                  <td className="py-2">John Okello</td>
                  <td className="py-2">UGX 800,000</td>
                  <td className="py-2 text-green-600 font-semibold">
                    Confirmed
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="bg-white rounded-xl shadow-lg p-8 transition hover:scale-[1.02]">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">
              Student Records
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
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-xl font-semibold mb-2 text-yellow-700">
            School Profile
          </h3>
          <p className="text-gray-600 mb-4">
            Kampala High School
            <br />
            Email: info@kampalahigh.ac.ug
            <br />
            Address: 123 Main St, Kampala
          </p>
          <Link
            href="/school/register"
            className="text-yellow-600 hover:underline font-medium"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
