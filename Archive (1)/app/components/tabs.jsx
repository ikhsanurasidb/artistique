/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [dates, setDates] = useState([]);
  const [artworks, setArtworks] = useState([]);

  const convertISO8601ToPostgresFormat = (iso8601) => {
    const date = new Date(iso8601);
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };

    return date.toLocaleString("en-US", options);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/getAuctionDates");
        const data = await res.json();

        // Konversi format waktu untuk setiap objek tanggal
        const formattedDates = data.map((dateObj) => ({
          ...dateObj,
          waktu: convertISO8601ToPostgresFormat(dateObj.waktu),
        }));

        setDates(formattedDates);
        console.log(formattedDates);

        // Fetch artworks for the default active tab
        if (formattedDates.length > 0) {
          // Pilih indeks tanggal yang ingin Anda gunakan sebagai default
          const defaultDateIndex = 0;
          await getArtworks(formattedDates[defaultDateIndex].waktu);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); // Run only once on mount

  const getArtworks = async (date) => {
    try {
      const res = await fetch("/api/getAuctionArtworks", {
        method: "POST",
        body: JSON.stringify({ date }),
      });
      const data = await res.json();
      setArtworks(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTabChange = async (tabIndex) => {
    setActiveTab(tabIndex);

    // Fetch artworks for the selected tab
    getArtworks(dates[tabIndex - 1].waktu);
  };

  return (
    <div role="tablist" className="tabs tabs-bordered w-[80vw] gap-[50px]">
      {dates.map((date, index) => (
        <div key={index}>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            id={`tab${index + 1}`}
            className="tab text-xl text-base-200 h-[100px] mr-[50px] focus:underline bg-accent pr-[80%] border border-black border-[2px] rounded-[20px]"
            aria-label={date.waktu}
            checked={activeTab === index + 1}
            onChange={() => handleTabChange(index + 1)}
          />
          <div
            role="tabpanel"
            className={`tab-content w-[80vw] p-10 ${
              activeTab === index + 1 ? "active" : ""
            }`}
          >
            <div className="grid grid-cols-3 gap-8 w-full">
              {artworks.map((artwork, artworkIndex) => (
                <div key={artworkIndex} className="p-4 rounded bg-accent ">
                  <img src={artwork.image_url} alt="artwork" />
                  <div className="text-base-200">
                    <h1 className="text-xl">{artwork.nama_karya}</h1>
                    <p>{artwork.first_name + " " + artwork.last_name}</p>
                    <p>{"Rp " + artwork.harga_minimal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
