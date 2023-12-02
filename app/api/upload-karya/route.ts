import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  try {

    const session = await getServerSession();
    console.log(session);
    const email = session.user.email;

    const { nama_karya, deskripsi, harga, image_url } = await request.json();

    const sqlResponse = await sql`
            INSERT INTO carts (email, nama_karya, deskripsi, harga)
            VALUES (${email}, ${nama_karya}, ${deskripsi}, ${harga})
        `;
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }

  return  NextResponse.json({ message: "success" });
}
