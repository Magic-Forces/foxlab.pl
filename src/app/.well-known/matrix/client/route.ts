import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const jsonResponse = {
    "m.homeserver": {
      base_url: "https://matrix.foxlab.pl",
    },
    "m.identity_server": {
      base_url: "https://matrix.foxlab.pl",
    },
  };

  return NextResponse.json(jsonResponse);
}
