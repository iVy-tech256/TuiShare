import { NextResponse } from "next/server";

// Simulated in-memory database
const students: { email: string }[] = [];

export async function POST(request: Request) {
  const { fullName, email, schoolId, schoolName } = await request.json();

  if (!fullName || !email || !schoolId || !schoolName) {
    return NextResponse.json({
      success: false,
      message: "All fields are required.",
    });
  }

  if (students.some((s) => s.email === email)) {
    return NextResponse.json({
      success: false,
      message: "Email already exists. Please use another email.",
    });
  }

  students.push({ email });

  return NextResponse.json({
    success: true,
    message: "Student registered successfully!",
  });
}
