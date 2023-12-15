import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  try {
    const session = await getServerSession();
    const email = session.user.email;

    const userQuery = await sql`
              SELECT first_name, last_name
              FROM users
              WHERE email = ${email}
            `;
    const userData = userQuery.rows[0];
    const { first_name, last_name } = userData || {};
    console.log("User Query: "+userQuery);
    console.log("User Data: "+userData);
    console.log("First Name: "+first_name);
    console.log("Last Name: "+last_name);


    const formData = await request.formData();
    const nama_karya = formData.get("nama_karya") as string;
    const deskripsi = formData.get("deskripsi") as string;
    const harga = formData.get("harga") as string;
    const kategori = formData.get("kategori") as string;

    const file = formData.get("media") as File;
    const image_url =
      "https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/" +
      (nama_karya + "-" + file.name);

    const sqlResponse = await sql`
            INSERT INTO products (email, nama_karya, deskripsi, harga, image_url, first_name, last_name, kategori)
            VALUES (${email}, ${nama_karya}, ${deskripsi}, ${harga}, ${image_url}, ${first_name}, ${last_name}, ${kategori})
        `;
  } catch (e) {
    console.error(e); 
    return NextResponse.json({ message: "error" }, { status: 500 });
  }

  return NextResponse.json({ message: "success" });
}
