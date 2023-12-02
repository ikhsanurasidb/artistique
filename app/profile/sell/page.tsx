"use client";

import UploadForm from "../../components/upload-form";
import KaryaForm from "../../components/karya-form";
import { FormEvent } from "react";
import { useState } from "react";
import path from "path";

export default function SellPage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data.status);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Ambil path dari path-config.json
    try {
      const response = await fetch("/api/upload-karya", {
        method: "POST",
        body: JSON.stringify({
          nama_karya: formData.get("nama_karya"),
          deskripsi: formData.get("deskripsi"),
          harga: formData.get("harga"),
          image_url: `https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/`,
        }),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBothSubmits = async (e) => {
    e.preventDefault();

    await handleSubmit(e as FormEvent<HTMLFormElement>);
    await handleSubmitForm(e);
  };

  return (
    <div className="flex justify-center items-center m-auto w-[80vh] h-[60vh] rounded glass">
      <div className="grid gap-4 p-8">
        <form onSubmit={handleBothSubmits}>
          <KaryaForm />
          <input type="file" className="file-input file-input-bordered w-full max-w-xs" accept="image/*" onChange={handleFileChange}/>
          <br/>
          <br/>
          <button type="submit" className="btn btn-base-200 text-neutral">
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
}
