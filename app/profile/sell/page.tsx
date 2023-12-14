/* eslint-disable @next/next/no-img-element */
"use client";

import UploadForm from "../../components/upload-form";
import KaryaForm from "../../components/karya-form";
import { FormEvent } from "react";
import { useState } from "react";
import path from "path";

export default function SellPage() {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [fileUrl, setFileUrl] = useState<string | undefined>(undefined);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);

    if (fileUrl) URL.revokeObjectURL(fileUrl);

    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    } else {
      setFileUrl(undefined);
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    const formElement = document.querySelector("form");
    const formData = new FormData(formElement);

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
    const formElement = document.querySelector("form");
    const formData = new FormData(formElement);
  
    try {
      const response = await fetch("/api/upload-karya", {
        method: "POST",
        body: formData, // send formData directly
      });
      console.log(response);
    } catch (error) {
      alert("Nama karya yang sama sudah ada!");
      console.log(error);
    }
  };
  

  const handleBothSubmits = async (e) => {
    e.preventDefault();

    await handleSubmitForm(e);
    await handleSubmit(e as FormEvent<HTMLFormElement>);
  };

  console.log(fileUrl);
  return (
    <div className="flex justify-center items-center m-auto w-[80vh] h-auto rounded glass pt-[30px] pb-[30px]">
      <div className="grid gap-4 p-8">
        <form onSubmit={handleBothSubmits}>
          <input
            name="nama_karya"
            type="text"
            placeholder="Nama Karya"
            className="input input-bordered w-full max-w-xs text-neutral"
          />
          <br />
          <br />
          <input
            name="deskripsi"
            type="text"
            className="textarea textarea-bordered text-neutral"
            placeholder="Deskripsi"
          ></input>
          <br />
          <br />
          <input
            name="harga"
            type="number"
            placeholder="Harga"
            className="input input-bordered w-full max-w-xs text-neutral"
          />
          <br />
          <br />
          {fileUrl && file && (
            <div className="flex gap-4 justify-center items-center">
              <div className="rounded-lg overflow-hidden w-32 h-32 relative mb-4">
                <img
                  src={fileUrl}
                  alt={file.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <button
                type="button"
                className="border rounded-xl px-4 py-2 w-32 h-10"
                onClick={() => {
                  setFile(undefined);
                  setFileUrl(undefined);
                }}
              >
                Remove
              </button>
            </div>
          )}

          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            name="media"
            accept="image/*"
            onChange={handleFileChange}
          />
          <br />
          <br />
          <button type="submit" className="btn btn-base-200 text-neutral">
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
}
