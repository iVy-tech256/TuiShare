import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import Student from "@/models/Student";

export async function POST(request: Request) {
  await connectDB();
  const { fullName, email, schoolId, schoolName } = await request.json();

  if (!fullName || !email || !schoolId || !schoolName) {
    return NextResponse.json({
      success: false,
      message: "All fields are required.",
    });
  }

  // Check for unique email
  const exists = await Student.findOne({ email });
  if (exists) {
    return NextResponse.json({
      success: false,
      message: "Email already exists. Please use another email.",
    });
  }

  await Student.create({
    fullName,
    email,
    schoolId,
    schoolName,
  });

  return NextResponse.json({
    success: true,
    message: "Student registered successfully!",
  });
}
