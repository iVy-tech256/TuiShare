import Link from "next/link";

export default function SchoolDashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground font-sans p-8">
      <h2 className="text-3xl font-bold mb-6">School Dashboard</h2>
      <p className="mb-4 text-center max-w-lg">
        Welcome! Here you can view received payments, confirm tuition, and
        manage student records.
      </p>
      <Link href="/" className="text-blue-600 hover:underline font-semibold">
        ← Back to Home
      </Link>
    </div>
  );
}
