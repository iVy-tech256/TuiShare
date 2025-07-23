import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  // TODO: Authenticate student user
  return NextResponse.json({ success: true, message: "Login successful!" });
}
