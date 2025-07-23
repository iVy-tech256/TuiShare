export default function SchoolRegister() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground font-sans p-8">
      <h2 className="text-2xl font-bold mb-4">School Registration</h2>
      <form className="w-full max-w-md flex flex-col gap-4 bg-white p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="School Name"
          className="border p-3 rounded"
          required
        />
        <input
          type="email"
          placeholder="School Email"
          className="border p-3 rounded"
          required
        />
        <input
          type="text"
          placeholder="School Address"
          className="border p-3 rounded"
          required
        />
        <input
          type="text"
          placeholder="Contact Person"
          className="border p-3 rounded"
          required
        />
        <button
          type="submit"
          className="py-3 px-6 rounded bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
