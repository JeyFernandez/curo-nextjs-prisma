import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "Gettin notes...",
  });
}

export function POST() {
  return NextResponse.json({
    message: "Creating notes...",
  });
}
