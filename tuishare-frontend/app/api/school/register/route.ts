import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import School from "@/models/School";

export async function POST(request: Request) {
  await connectDB();
  const { schoolName, schoolEmail, schoolAddress, contactPerson } =
    await request.json();

  if (!schoolName || !schoolEmail || !schoolAddress || !contactPerson) {
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

  await School.create({
    schoolName,
    schoolEmail,
    schoolAddress,
    contactPerson,
  });

  return NextResponse.json({
    success: true,
    message: "School registered successfully!",
  });
}
