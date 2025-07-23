"use client";

export default function StudentDashboard() {
  function handleSignOut() {
    // TODO: Add sign out logic here (e.g., clear auth, redirect)
    window.location.href = "/";
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-20 flex flex-col items-center">
      {/* Top bar for Sign Out */}
      <div className="w-full max-w-3xl flex justify-end mb-4">
        <button
          onClick={handleSignOut}
          className="py-2 px-6 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow"
        >
          Sign Out
        </button>
      </div>
      <div className="w-full max-w-3xl">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-2 text-green-600">
            Welcome, Student!
          </h2>
          <p className="text-lg text-gray-600">
            View your tuition status, recent payments, and manage your virtual
            card for school expenses.
          </p>
        </header>
        <section className="w-full bg-white rounded-lg shadow-lg p-8 mb-8 transition hover:scale-[1.02]">
          <h3 className="text-xl font-semibold mb-4 text-green-700">
            Tuition Status
          </h3>
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
        <section className="w-full bg-white rounded-lg shadow-lg p-8 mb-8 transition hover:scale-[1.02]">
          <h3 className="text-xl font-semibold mb-4 text-green-700">
            Recent Payments
          </h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>2024-06-01</span>
              <span className="text-green-600">UGX 1,200,000</span>
              <span>Supporter: Jane Doe</span>
            </li>
          </ul>
        </section>
        <section className="w-full bg-white rounded-lg shadow-lg p-8 transition hover:scale-[1.02]">
          <h3 className="text-xl font-semibold mb-4 text-green-700">
            Virtual Card
          </h3>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                UGX 150,000
              </div>
              <div className="text-sm text-gray-500">Card Balance</div>
            </div>
            <button className="py-2 px-4 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              View Card Details
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
