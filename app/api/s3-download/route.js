import { NextResponse } from "next/server";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  },
});

async function downloadFileFromS3(key) {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: key,
  };

  const command = new GetObjectCommand(params);
  const response = await s3Client.send(command);

  // Handle the response here, for example, you can return the file content
  return response.Body.toString('utf-8');
}

export async function GET(request) {
  try {
    // Assuming you pass the key as a query parameter in the request
    const key = request.query.key;

    if (!key) {
      return NextResponse.json({ error: "No key provided" }, { status: 400 });
    }

    const fileContent = await downloadFileFromS3(key);

    return NextResponse.json({ success: true, fileContent });
  } catch (error) {
    return NextResponse.json({ error: "Error downloading file" });
  }
}
