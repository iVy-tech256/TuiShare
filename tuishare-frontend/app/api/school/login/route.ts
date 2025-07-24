import { NextResponse } from "next/server";

// Simulated in-memory database
const schools: { email: string }[] = [];

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({
      success: false,
      message: "Email and password are required.",
    });
  }

  if (!schools.some((s) => s.email === email)) {
    return NextResponse.json({
      success: false,
      message: "No account found. Please sign up first.",
    });
  }

  return NextResponse.json({ success: true, message: "Login successful!" });
}
