import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import Supporter from "@/models/Supporter";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  await connectDB();
  const { name, email, country, password } = await request.json();

  if (!name || !email || !country || !password) {
    return NextResponse.json({
      success: false,
      message: "All fields are required.",
    });
  }

  // Check for unique email
  const exists = await Supporter.findOne({ email });
  if (exists) {
    return NextResponse.json({
      success: false,
      message: "Email already exists. Please use another email.",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await Supporter.create({
    name,
    email,
    country,
    password: hashedPassword,
  });

  return NextResponse.json({
    success: true,
    message: "Supporter registered successfully!",
  });
}
