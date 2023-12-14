/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef } from "react";
import Link from "next/link";
import ItemData from "../../lib/data";
import Image from "next/image";
import { CartIcon } from "../../ui/icons";
import React, { useState, useEffect } from "react";
import ProductDetailPopup from "../../popup/ProductDetailPopup";

export default function Main({ category, carouselRef, textColor, isColorBgLight }) {
  const teksColor = isColorBgLight ? "text-neural" : "text-base-100";
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/getProductsFromDB", {
          method: "GET",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        console.log(data);
        setProductData(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const handleSession = async () => {
    const response = await fetch("/api/getUserSession", {
      method: "GET",
    });
    console.log(response);

    return response.json();
  };

  const handleCart = async (nama_karya) => {
    const session = await handleSession();
    console.log(session);

    if (session !== null) {
      const response = await fetch("/api/postItemCart", {
        method: "POST",
        body: JSON.stringify({
          nama_karya: nama_karya,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add item");
      } else {
        alert("Item added to cart!");
      }
    } else {
      alert("Please login first!");
    }
  };

  console.log(productData[0]);

  const openPopup = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedItem(null);
    setShowPopup(false);
  };

  const refresh = (e) => {
    e.preventDefault();
  };

  return (
    // ...
<div className="mt-[10vh] bg-neutral">
  <h1 className="text-4xl text-center text-base-200 pt-8 mb-[40px]">
    {category.toUpperCase()}
  </h1>
  <div className="flex flex-wrap">
    {productData.map((item) => (
      <div
        key={item.nama_karya}
        className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4"
      >
        <div
          className="carousel-item flex-auto mr-16 p-4 bg-accent rounded-lg shadow-lg"
          onClick={() => openPopup(item)}
        >
          <Link href="">
            <div
              onClick={refresh}
              className="carousel-item h-[250px] w-[250px] justify-center"
            >
              <Image
                src={item.image_url}
                alt="foto karya"
                width={250}
                height={250}
                className="border rounded-lg"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="true"
              />
            </div>
          </Link>
        </div>
        <div
          className="flex relative justify-between"
          data-aos="fade-right"
          data-aos-duration="1100"
          data-aos-once="true"
        >
          <div className="flex-initial w-[252px]">
            <p className="text-xl text-base-200 mt-4 overflow-hidden whitespace-nowrap overflow-ellipsis">
              {item.nama_karya}
            </p>
            <p className={teksColor}>
              {item.first_name} {item.last_name}
            </p>
            <p className={teksColor}>Rp {item.harga}</p>
          </div>
          <div className="flex flex-col-reverse">
            <button>
              <div
                className="flex-none"
                onClick={() => handleCart(item.nama_karya)}
              >
                <CartIcon />
              </div>
            </button>
          </div>
          <div className="flex-none w-[64px]"></div>
        </div>
      </div>
    ))}
    {showPopup && (
      <ProductDetailPopup item={selectedItem} onClose={closePopup} />
    )}
  </div>
  <div className="h-[100px] w-[100vw]"></div>
</div>
// ...

  );
}
