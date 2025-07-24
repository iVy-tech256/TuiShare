import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import Supporter from "@/models/Supporter";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  await connectDB();
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({
      success: false,
      message: "Email and password are required.",
    });
  }

  const supporter = await Supporter.findOne({ email });
  if (!supporter) {
    return NextResponse.json({
      success: false,
      message: "No account found. Please sign up first.",
    });
  }

  const isMatch = await bcrypt.compare(password, supporter.password);
  if (!isMatch) {
    return NextResponse.json({
      success: false,
      message: "Incorrect password.",
    });
  }

  return NextResponse.json({
    success: true,
    message: "Login successful!",
  });
}
