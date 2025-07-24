import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await request.json(); // Read and ignore for now
  // TODO: Save school registration data to database
  return NextResponse.json({
    success: true,
    message: "School registered successfully!",
  });
}
