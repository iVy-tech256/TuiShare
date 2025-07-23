import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white py-4 px-8 flex justify-between items-center shadow">
      <Link href="/" className="text-2xl font-bold">
        Tuishare Plus
      </Link>
      <div className="flex gap-6">
        <Link href="/supporter/register" className="hover:underline">
          Supporter
        </Link>
        <Link href="/student/register" className="hover:underline">
          Student
        </Link>
        <Link href="/school/register" className="hover:underline">
          School
        </Link>
      </div>
    </nav>
  );
}
