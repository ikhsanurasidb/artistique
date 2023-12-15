import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  try {
    const { harga_final, nama_karya } = await request.json();
    const session = await getServerSession();

    const result = await sql`
    UPDATE auctions
    SET 
      harga_final = ${harga_final},
      pemenang = ${session.user.email}
    WHERE nama_karya = ${nama_karya};   
    `;

    console.log(result);

    return NextResponse.json({
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("Error fetching auctions", error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
