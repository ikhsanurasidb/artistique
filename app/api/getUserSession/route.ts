import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function GET() {
  
  try {
    const session = await getServerSession();
    console.log(session);
    return NextResponse.json(session);
  } catch (error) {
    console.error('Nothing session', error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}