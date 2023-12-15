import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";

export async function GET() {
  try {
    const result = await sql`
    SELECT *
    FROM auctions
    WHERE DATE_TRUNC('day', waktu) = CURRENT_DATE;    
    `;

    console.log(result.rows);
    const auctions = result.rows;

    return NextResponse.json(auctions, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Error fetching auctions', error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
