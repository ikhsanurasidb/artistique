import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request){
    try {
        const {first_name, last_name, email, password} = await request.json();
        //tambahkan disini jika mau validasi email dan password

        const hashedPassword = await hash(password, 10);

        const response = await sql`
            INSERT INTO users (first_name, last_name, email, password)
            VALUES (${first_name}, ${last_name}, ${email}, ${hashedPassword})
        `;
    } catch (e) {
        console.log(e);
    }

    return NextResponse.json({message: "success"});
}