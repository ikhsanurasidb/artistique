import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession();

    const { nama_karya } = await req.json();

    if (!nama_karya) {
      return NextResponse.json({ message: "Product name is required" }, { status: 400 });
    }

    // Perform the delete operation
    const result = await sql`
      DELETE FROM products
      WHERE email = ${session.user.email} AND nama_karya = ${nama_karya}
    `;

    if (result.rowCount === 0) {
      // No rows were deleted, product not found
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error('Error deleting product', error);
    return NextResponse.json({ message: "Error deleting product" }, { status: 500 });
  }
}
