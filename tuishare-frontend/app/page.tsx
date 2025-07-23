import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground font-sans p-8">
      <header className="mb-8 flex flex-col items-center">
        <Image
          src="/file.svg"
          alt="Tuishare Plus Logo"
          width={64}
          height={64}
        />
        <h1 className="text-4xl font-bold mt-4 mb-2">Tuishare Plus</h1>
        <p className="text-lg text-center max-w-xl">
          Web3-powered tuition payment platform connecting sponsors to African
          students. Pay tuition and school expenses using Bitcoin (BTC) and USDT
          stablecoins.
        </p>
      </header>
      <main className="flex flex-col gap-6 items-center w-full max-w-md">
        <Link
          href="/sponsor/register"
          className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 transition"
        >
          Sponsor a Student
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
      </main>
      <footer className="mt-12 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Tuishare Plus. All rights reserved.
      </footer>
    </div>
  );
}
