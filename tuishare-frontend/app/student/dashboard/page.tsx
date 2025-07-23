import Link from "next/link";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans p-8 flex flex-col items-center">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Welcome, Student!</h2>
        <p className="text-lg text-gray-600">
          View your tuition status, recent payments, and manage your virtual
          card for school expenses.
        </p>
      </header>
      <section className="w-full max-w-2xl bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Tuition Status</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">Total Tuition Required:</span>
          <span className="font-bold">UGX 1,500,000</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">Amount Paid:</span>
          <span className="font-bold text-green-600">UGX 1,200,000</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Balance:</span>
          <span className="font-bold text-red-600">UGX 300,000</span>
        </div>
      </section>
      <section className="w-full max-w-2xl bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Recent Payments</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>2024-06-01</span>
            <span className="text-green-600">UGX 1,200,000</span>
            <span>Sponsor: Jane Doe</span>
          </li>
        </ul>
      </section>
      <section className="w-full max-w-2xl bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Virtual Card</h3>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">UGX 150,000</div>
            <div className="text-sm text-gray-500">Card Balance</div>
          </div>
          <button className="py-2 px-4 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            View Card Details
          </button>
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
