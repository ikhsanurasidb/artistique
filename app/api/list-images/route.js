// pages/api/list-images.js
const { S3Client, ListObjectsCommand } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  },
});

module.exports = async (req, res) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
  };

  try {
    const command = new ListObjectsCommand(params);
    const response = await s3Client.send(command);

    const images = response.Contents.map((object) => ({
      key: object.Key,
      lastModified: object.LastModified,
      size: object.Size,
    }));

    res.status(200).json({ images });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
