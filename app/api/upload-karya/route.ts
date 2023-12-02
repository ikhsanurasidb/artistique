import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions } from "next-auth"
import { authOptions } from '../auth/[...nextauth]/route'

export async function POST(request: Request) {
  try {

    const session = await getServerSession();
    console.log(session);
    const email = session.user.email;

    const { nama_karya, deskripsi, harga } = await request.json();

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
