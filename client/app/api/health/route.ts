import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  console.log(request);
  console.log(response);
  return NextResponse.json({ message: "OK" });
}
