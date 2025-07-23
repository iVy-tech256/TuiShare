import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  // TODO: Save school registration data to database
  return NextResponse.json({
    success: true,
    message: "School registered successfully!",
  });
}
