import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";

export async function GET() {
  
  try {
    const session = await getServerSession();
    // 
    const result = await sql`
          SELECT email, first_name, last_name, image_url FROM users
          WHERE email = ${session.user.email}
        `;
    const products = result.rows;

    return NextResponse.json(products, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Error fetching products', error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

