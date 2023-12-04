// app/api/removeItem/route.ts
import fs from "fs";
import path from "path";

export async function POST(req, res) {
  const itemToRemove = req.body;

  // Baca file JSON
  const filePath = path.join(
    process.cwd(),
    "public",
    "response-carts-data.json"
  );

  console.log(filePath);

  const fileData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileData);

  // Hapus item dari data
  const updatedData = data.filter(
    (item) => item.nama_karya !== itemToRemove.nama_karya
  );

  // Tulis data yang diperbarui kembali ke file
  fs.writeFileSync(filePath, JSON.stringify(updatedData));

  res.status(200).json({ message: "Item removed successfully" });
}
