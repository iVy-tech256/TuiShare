import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import School from "@/models/School";

export async function POST(request: Request) {
  await connectDB();
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({
      success: false,
      message: "Email and password are required.",
    });
  }

  const school = await School.findOne({ schoolEmail: email });
  if (!school) {
    return NextResponse.json({
      success: false,
      message: "No account found. Please sign up first.",
    });
  }

  // TODO: Add password check when you implement authentication
  return NextResponse.json({
    success: true,
    message: "Login successful!",
  });
}
