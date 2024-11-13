import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const jsonResponse = {
    "m.server": "matrix.foxlab.pl:443",
  };

  return NextResponse.json(jsonResponse);
}
