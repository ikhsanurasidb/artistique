import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";

export async function GET() {
  
  try {
    const session = await getServerSession();
    // 
    const result = await sql`
    SELECT *
    FROM auctions
    WHERE DATE_TRUNC('day', waktu) > CURRENT_DATE;    
        `;
    const dates = result.rows;

    return NextResponse.json(dates, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Error fetching dates', error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

