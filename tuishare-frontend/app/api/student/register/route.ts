import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import Student from "@/models/Student";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  await connectDB();
  const { fullName, email, schoolId, schoolName, password } =
    await request.json();

  if (!fullName || !email || !schoolId || !schoolName || !password) {
    return NextResponse.json({
      success: false,
      message: "All fields are required.",
    });
  }

  const exists = await Student.findOne({ email });
  if (exists) {
    return NextResponse.json({
      success: false,
      message: "Email already exists. Please use another email.",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await Student.create({
    fullName,
    email,
    schoolId,
    schoolName,
    password: hashedPassword,
  });

  return NextResponse.json({
    success: true,
    message: "Student registered successfully!",
  });
}
