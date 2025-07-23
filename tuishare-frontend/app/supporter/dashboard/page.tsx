import Link from "next/link";

export default function SupporterDashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans p-8 flex flex-col items-center">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Welcome, Supporter!</h2>
        <p className="text-lg text-gray-600">
          Empower students by funding tuition and school expenses. Track your
          impact and manage your contributions.
        </p>
      </header>
      <section className="w-full max-w-2xl bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Your Sponsored Students</h3>
        <ul className="space-y-4">
          <li className="border-b pb-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Jane Doe</span>
              <span className="text-green-600 font-semibold">
                UGX 1,200,000 paid
              </span>
            </div>
            <div className="text-sm text-gray-500">Kampala High School</div>
          </li>
          <li className="border-b pb-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">John Okello</span>
              <span className="text-green-600 font-semibold">
                UGX 800,000 paid
              </span>
            </div>
            <div className="text-sm text-gray-500">Makerere College</div>
          </li>
        </ul>
      </section>
      <section className="w-full max-w-2xl bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
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
            <tr>
              <td className="py-2">2024-06-01</td>
              <td className="py-2">Jane Doe</td>
              <td className="py-2">UGX 1,200,000</td>
              <td className="py-2 text-green-600">Completed</td>
            </tr>
            <tr>
              <td className="py-2">2024-05-28</td>
              <td className="py-2">John Okello</td>
              <td className="py-2">UGX 800,000</td>
              <td className="py-2 text-green-600">Completed</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="w-full max-w-2xl bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Your Impact</h3>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">2</div>
            <div className="text-sm text-gray-500">Students Sponsored</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              UGX 2,000,000
            </div>
            <div className="text-sm text-gray-500">Total Paid</div>
          </div>
        </div>
      </section>
      <Link
        href="/"
        className="mt-8 text-blue-600 hover:underline font-semibold"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
