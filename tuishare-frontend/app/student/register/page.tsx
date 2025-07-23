export default function StudentRegister() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground font-sans p-8">
      <h2 className="text-2xl font-bold mb-4">Student Registration</h2>
      <form className="w-full max-w-md flex flex-col gap-4 bg-white p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-3 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="border p-3 rounded"
          required
        />
        <input
          type="text"
          placeholder="School ID"
          className="border p-3 rounded"
          required
        />
        <input
          type="text"
          placeholder="School Name"
          className="border p-3 rounded"
          required
        />
        <button
          type="submit"
          className="py-3 px-6 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
