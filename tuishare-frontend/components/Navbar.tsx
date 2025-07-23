import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white py-4 px-8 flex justify-between items-center shadow">
      <Link href="/" className="text-2xl font-bold">
        Tuishare Plus
      </Link>
      <div className="flex gap-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/supporter/register" className="hover:underline">
          Supporter Register
        </Link>
        <Link href="/supporter/login" className="hover:underline">
          Supporter Login
        </Link>
        <Link href="/student/register" className="hover:underline">
          Student Register
        </Link>
        <Link href="/student/login" className="hover:underline">
          Student Login
        </Link>
        <Link href="/school/register" className="hover:underline">
          School Register
        </Link>
        <Link href="/school/login" className="hover:underline">
          School Login
        </Link>
      </div>
    </nav>
  );
}
