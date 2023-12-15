import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();
    
    if (!requestBody.date) {
      throw new Error("Invalid request. 'date' parameter is missing.");
    }

    const { date } = requestBody;
    const waktu = date;

    console.log(waktu);
    const result = await sql`
      SELECT *
      FROM auctions
      WHERE waktu = ${waktu};
    `;

    console.log(result.rows);
    const dates = result.rows;

    return NextResponse.json(dates, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Error fetching dates', error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
