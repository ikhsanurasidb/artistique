"use client"

// Contoh halaman yang memanggil endpoint dan menampilkan daftar gambar
import { useState, useEffect } from "react";

const SellPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/list-images");
        const data = await response.json();
        setImages(data.images);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Images in Bucket:</h2>
      <ul>
        {images.map((image) => (
          <li key={image.key}>
            <p>Key: {image.key}</p>
            <p>Last Modified: {image.lastModified}</p>
            <p>Size: {image.size} bytes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

module.exports = SellPage;
