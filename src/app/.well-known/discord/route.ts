import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const text = "dh=1053cf417ee9de6cacbed8dd63672ec02a4db91e";
  return new NextResponse(text, {
    headers: { "Content-Type": "text/plain" },
  });
}
