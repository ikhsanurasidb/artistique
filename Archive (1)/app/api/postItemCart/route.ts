import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  try {
    const { nama_karya } = await request.json();
    const session = await getServerSession();
    const email = session.user.email;
    //tambahkan disini jika mau validasi email dan password

    const response = await sql`
        INSERT INTO carts (email, nama_karya, deskripsi, harga, image_url, first_name, last_name)
        SELECT ${email}, nama_karya, deskripsi, harga, image_url, first_name, last_name
        FROM products
        WHERE nama_karya = ${nama_karya};
        
        `;
  } catch (e) {
    console.log(e);
  }

  return NextResponse.json({ message: "success add to cart" });
}
