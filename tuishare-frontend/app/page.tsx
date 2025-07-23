import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground font-sans p-8">
      <Navbar />
      <header className="mb-8 flex flex-col items-center">
        <Image
          src="/file.svg"
          alt="Tuishare Plus Logo"
          width={64}
          height={64}
        />
        <h1 className="text-4xl font-bold mt-4 mb-2">Tuishare Plus</h1>
        <p className="text-lg text-center max-w-xl mb-4">
          Seamless, secure tuition payments for African students. Choose to
          register or login below.
        </p>
      </header>
      <main className="flex flex-col gap-8 items-center w-full max-w-md">
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-2 text-center">Register</h2>
          <div className="flex flex-col gap-4">
            <Link
              href="/supporter/register"
              className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 transition"
            >
              Supporter Registration
            </Link>
            <Link
              href="/student/register"
              className="w-full py-3 px-6 rounded-lg bg-green-600 text-white font-semibold text-center hover:bg-green-700 transition"
            >
              Student Registration
            </Link>
            <Link
              href="/school/register"
              className="w-full py-3 px-6 rounded-lg bg-yellow-500 text-white font-semibold text-center hover:bg-yellow-600 transition"
            >
              School Registration
            </Link>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-2 text-center">Login</h2>
          <div className="flex flex-col gap-4">
            <Link
              href="/supporter/login"
              className="w-full py-3 px-6 rounded-lg bg-blue-100 text-blue-800 font-semibold text-center hover:bg-blue-200 transition"
            >
              Supporter Login
            </Link>
            <Link
              href="/student/login"
              className="w-full py-3 px-6 rounded-lg bg-green-100 text-green-800 font-semibold text-center hover:bg-green-200 transition"
            >
              Student Login
            </Link>
            <Link
              href="/school/login"
              className="w-full py-3 px-6 rounded-lg bg-yellow-100 text-yellow-800 font-semibold text-center hover:bg-yellow-200 transition"
            >
              School Login
            </Link>
          </div>
        </div>
      </main>
      <footer className="mt-12 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Tuishare Plus. All rights reserved.
      </footer>
    </div>
  );
}
