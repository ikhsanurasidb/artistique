/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div role="tablist" className="tabs tabs-bordered w-[80vw] ">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        id="tab1"
        className="tab text-xl text-base-200 h-[100px] mr-[50px]"
        aria-label="14 January 2024"
        checked={activeTab === 1}
        onChange={() => handleTabChange(1)}
      />
      <div
        role="tabpanel"
        className={`tab-content h-[60vh] w-[80vw] p-10 ${
          activeTab === 1 ? "active" : ""
        }`}
      >
        <div className="grid grid-cols-3 gap-8 w-full">
          <div className="grid">
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Auction 1-pengertian-patung.jpg"
              alt="asd"
            />
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Auction 2-3gunung.jpeg"
              alt="asd"
            />
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Izin Ambil Lagi Bang-dayandnight.jpeg"
              alt="asd"
            />
          </div>
          <div className="grid">
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Izin Ambil Lagi Bang-dayandnight.jpeg"
              alt="asd"
            />
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Auction 1-pengertian-patung.jpg"
              alt="asd"
            />
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Auction 2-3gunung.jpeg"
              alt="asd"
            />
          </div>
          <div className="grid gap-8">
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Auction 2-3gunung.jpeg"
              alt="asd"
            />
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Izin Ambil Lagi Bang-dayandnight.jpeg"
              alt="asd"
            />
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Auction 1-pengertian-patung.jpg"
              alt="asd"
            />
          </div>
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        id="tab2"
        className="tab text-xl text-base-200 h-[100px] mr-[50px]"
        aria-label="15 January 2024"
        checked={activeTab === 2}
        onChange={() => handleTabChange(2)}
      />
      <div
        role="tabpanel"
        className={`tab-content w-[80vw] p-10 ${
          activeTab === 2 ? "active" : ""
        }`}
      >
        <div className="grid grid-cols-3 gap-8 w-full">
          <div className="grid gap-8">
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Auction 2-3gunung.jpeg"
              alt="asd"
            />
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Izin Ambil Lagi Bang-dayandnight.jpeg"
              alt="asd"
            />
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Auction 1-pengertian-patung.jpg"
              alt="asd"
            />
          </div>
          <div className="grid">
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Auction 1-pengertian-patung.jpg"
              alt="asd"
            />
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Auction 2-3gunung.jpeg"
              alt="asd"
            />
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Izin Ambil Lagi Bang-dayandnight.jpeg"
              alt="asd"
            />
          </div>
          <div className="grid">
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Izin Ambil Lagi Bang-dayandnight.jpeg"
              alt="asd"
            />
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Auction 1-pengertian-patung.jpg"
              alt="asd"
            />
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Auction 2-3gunung.jpeg"
              alt="asd"
            />
          </div>
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_3"
        role="tab"
        id="tab3"
        className="tab text-xl text-base-200 h-[100px] w-[800px]"
        aria-label="16 January  2024"
        checked={activeTab === 3}
        onChange={() => handleTabChange(3)}
      />
      <div
        role="tabpanel"
        className={`tab-content h-[60vh] w-[80vw] p-10 ${
          activeTab === 3 ? "active" : ""
        }`}
      >
        <div className="grid grid-cols-3 gap-8 w-full">
          <div className="grid gap-8">
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Auction 2-3gunung.jpeg"
              alt="asd"
            />
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Izin Ambil Lagi Bang-dayandnight.jpeg"
              alt="asd"
            />
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Auction 1-pengertian-patung.jpg"
              alt="asd"
            />
          </div>
          <div className="grid">
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Izin Ambil Lagi Bang-dayandnight.jpeg"
              alt="asd"
            />
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Auction 1-pengertian-patung.jpg"
              alt="asd"
            />
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Auction 2-3gunung.jpeg"
              alt="asd"
            />
          </div>
          <div className="grid">
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Auction 1-pengertian-patung.jpg"
              alt="asd"
            />
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Auction 2-3gunung.jpeg"
              alt="asd"
            />
            <img
              src="https://artistique-filestorage.s3.ap-southeast-1.amazonaws.com/image/Izin Ambil Lagi Bang-dayandnight.jpeg"
              alt="asd"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Tabs;
