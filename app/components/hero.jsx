/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Main() {
  const [auctions, setAuctions] = useState([]);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/getAuctionLive");
        const data = await res.json();

        console.log(data);
        setAuctions(data);

        if (data.length > 0) {
          setLive(true);
        } else {
          setLive(false);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const Modal = ({ nama_karya, harga_final, image_url, modalId, pemenang }) => {
    const [bidValue, setBidValue] = useState("");

    const handleBidChange = (e) => {
      setBidValue(e.target.value);
    };

    const handleFormSubmit = async (e) => {
      e.preventDefault();

      // Memastikan nilai bid lebih besar atau sama dengan harga minimal
      if (Number(bidValue) <= harga_final || bidValue === null) {
        alert("Bid harus lebih besar atau sama dengan harga minimal");
      } else {
        const formData = new FormData(e.currentTarget);
        const response = await fetch("/api/postAuctionBid", {
          method: "POST",
          body: JSON.stringify({
            harga_final: formData.get("harga_final"),
            nama_karya: nama_karya,
          }),
        });
        
        if (response.ok) {
          console.log("Bid berhasil dipost");
          // Reload halaman setelah bid berhasil dipost
          window.location.reload();
        }
      }
    };

    return (
      <div>
        <button
          className="outline outline-offset-2 glass btn text-neutral p-4 rounded-md hover:text-neutral "
          onClick={() => document.getElementById(modalId).showModal()}
        >
          Bid Now
        </button>
        <dialog id={modalId} className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className=" absolute right-2 top-2">press esc to close</div>
            </form>
            <h3 className="font-bold text-lg mb-8">{nama_karya}</h3>
            <div className="grid grid-cols-2 gap-16">
              <div>
                <img src={image_url} alt="auction artwork" />
              </div>
              <form onSubmit={handleFormSubmit}>
                <div className="grid gap-4 text-left">
                  <p className="text-neutral">Harga Terakhir: {harga_final}</p>
                  <p className="text-neutral">Pemenang Sementara: {pemenang}</p>
                  <input
                    name="harga_final"
                    type="number"
                    min={harga_final}
                    placeholder="Bid disini"
                    className="input input-bordered w-full max-w-xs"
                    value={bidValue}
                    onChange={handleBidChange}
                  />
                  <button type="submit" className="btn btn-outline btn-neutral">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    );
  };

  return (
    <div>
      {live ? (
        <div className="h-[90vh] carousel rounded-box">
          {auctions.map((auction, index) => (
            <div key={index} className="carousel-item hero w-full">
              <img
                src={auction.image_url}
                alt="blabla"
                className=" object-cover w-[90vw] h-[80vh] rounded-md"
              />
              <div className="hero-content w-full h-full text-center ">
                <div className="max-w-md">
                  <h1 className="glass mb-5 text-5xl font-bold text-neutral p-4 rounded-md z-1">
                    {/* Live Auction NOW! */}
                    {auction.nama_karya}
                  </h1>
                  <Modal
                    nama_karya={auction.nama_karya}
                    harga_final={auction.harga_final}
                    image_url={auction.image_url}
                    modalId={`my_modal_${index}`}
                    pemenang={auction.pemenang}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="h-[90vh] text-center bg-center bg-cover bg-no-repeat rounded-box flex justify-center items-center"
          style={{
            backgroundImage: `url(https://news.artnet.com/app/news-upload/2017/11/GettyImages-50947488-1024x687.jpg)`,
          }}
        >
          <p className="text-neutral text-8xl bg-slate-500">
            No live auctions currently happening.
          </p>
        </div>
      )}
    </div>
  );
}
