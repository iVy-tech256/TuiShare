import { NextResponse } from "next/server";

// Simulated in-memory database
const schools: { email: string }[] = [];

export async function POST(request: Request) {
  const { schoolName, schoolEmail, schoolAddress, contactPerson } =
    await request.json();

  if (!schoolName || !schoolEmail || !schoolAddress || !contactPerson) {
    return NextResponse.json({
      success: false,
      message: "All fields are required.",
    });
  }

  if (schools.some((s) => s.email === schoolEmail)) {
    return NextResponse.json({
      success: false,
      message: "Email already exists. Please use another email.",
    });
  }

  schools.push({ email: schoolEmail });

  return NextResponse.json({
    success: true,
    message: "School registered successfully!",
  });
}
