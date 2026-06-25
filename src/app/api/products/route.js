import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "iPhone 17 Pro",
      price: 129999
    },
    {
      id: 2,
      name: "MacBook Air",
      price: 99999
    }
  ]);
}