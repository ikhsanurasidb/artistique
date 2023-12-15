import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  
  try {
    const {kategori} = await request.json();
    // 
    const result = await sql`
          SELECT nama_karya, deskripsi, harga, image_url, first_name, last_name 
          FROM products
          WHERE kategori = ${kategori};
        `;
    const products = result.rows;

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products', error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

