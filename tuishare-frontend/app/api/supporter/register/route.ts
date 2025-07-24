import { NextResponse } from "next/server";

// Simulated in-memory database
const supporters: { email: string }[] = [];

export async function POST(request: Request) {
  const { name, email, country } = await request.json();

  if (!name || !email || !country) {
    return NextResponse.json({
      success: false,
      message: "All fields are required.",
    });
  }

  if (supporters.some((s) => s.email === email)) {
    return NextResponse.json({
      success: false,
      message: "Email already exists. Please use another email.",
    });
  }

  supporters.push({ email });

  return NextResponse.json({
    success: true,
    message: "Supporter registered successfully!",
  });
}
