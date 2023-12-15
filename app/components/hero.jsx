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

  return (
    <div>
      {live ? (
        <div className="h-[90vh] carousel rounded-box">
          {auctions.map((auction, index) => (
            <div
              key={index}
              className="carousel-item hero w-full"
              // style={{
              //   backgroundImage: `url(${auction.image_url})`,
              // }}
            >
                <img
                  src={auction.image_url}
                  alt="blabla"
                  className=" object-cover w-[90vw] h-[80vh] rounded-md"
                />
              <div className="hero-content w-full h-full text-center ">
                <div className="max-w-md">
                  <h1 className="glass mb-5 text-5xl font-bold text-base-200 p-4 rounded-md z-1">
                    Live Auction NOW!
                  </h1>
                  <Link href="../menu/auction/bid/">
                    <button className="outline outline-offset-2 glass btn text-base-200 p-4 rounded-md hover:text-neutral z-1">
                      Enter the Room
                    </button>
                  </Link>
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
