import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await request.json(); // Read and ignore for now
  // TODO: Save student registration data to database
  return NextResponse.json({
    success: true,
    message: "Student registered successfully!",
  });
}
