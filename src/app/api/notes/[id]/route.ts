import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "Gettin single note...",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "Deleting single note...",
  });
}

export function PUT() {
  return NextResponse.json({
    message: "Updating single note...",
  });
}
