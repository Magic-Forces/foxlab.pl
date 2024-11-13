import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const text = "did:plc:nphaqeqv2llvg4vwgv7eqf4v";
  return new NextResponse(text, {
    headers: { "Content-Type": "text/plain" },
  });
}
