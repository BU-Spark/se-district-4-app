import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://www.instagram.com/d4worrell/?__a=1&__d=dis",
      {
        headers: {
          "User-Agent": "Mozilla/5.0", // Helps avoid blocks
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Instagram data");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("SERVER FETCH ERROR:", error);
    return NextResponse.json(
      { error: "Error fetching Instagram data" },
      { status: 500 }
    );
  }
}
