import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import School from "@/models/School";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  await connectDB();
  const { schoolName, schoolEmail, schoolAddress, contactPerson, password } =
    await request.json();

  if (
    !schoolName ||
    !schoolEmail ||
    !schoolAddress ||
    !contactPerson ||
    !password
  ) {
    return NextResponse.json({
      success: false,
      message: "All fields are required.",
    });
  }

  // Check for unique email
  const exists = await School.findOne({ schoolEmail });
  if (exists) {
    return NextResponse.json({
      success: false,
      message: "Email already exists. Please use another email.",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await School.create({
    schoolName,
    schoolEmail,
    schoolAddress,
    contactPerson,
    password: hashedPassword,
  });

  return NextResponse.json({
    success: true,
    message: "School registered successfully!",
  });
}
