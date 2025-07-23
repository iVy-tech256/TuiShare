import Link from "next/link";

export default function SchoolDashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans p-8 flex flex-col items-center">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Welcome, School Admin!</h2>
        <p className="text-lg text-gray-600">
          Manage tuition payments, confirm receipts, and oversee student records
          securely.
        </p>
      </header>
      <section className="w-full max-w-2xl bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Recent Payments Received</h3>
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
              <td className="py-2 text-green-600">Confirmed</td>
            </tr>
            <tr>
              <td className="py-2">2024-05-28</td>
              <td className="py-2">John Okello</td>
              <td className="py-2">UGX 800,000</td>
              <td className="py-2 text-green-600">Confirmed</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="w-full max-w-2xl bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Student Records</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Jane Doe</span>
            <span className="text-green-600">Paid</span>
          </li>
          <li className="flex justify-between">
            <span>John Okello</span>
            <span className="text-red-600">Pending</span>
          </li>
        </ul>
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
