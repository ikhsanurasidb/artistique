'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import itemData from "../lib/data";
import Link from "next/link";
import { CartIcon } from "./icons";
import ProductDetailPopup from "../popup/ProductDetailPopup";

interface ProductItem {
  nama_karya: string;
  deskripsi: string;
  harga: number;
  image_url: string;
  first_name: string;
  last_name: string;
}

export default function Carousel({ carouselRef, textColor }) {
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
        setProductData(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

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
    <div ref={carouselRef} className="flex carousel p-8">
      {productData.map((item) => (
        <div key={item.nama_karya} className="flex flex-col">
          <div
            className="carousel-item flex-auto mr-16 p-4 bg-accent rounded-lg shadow-lg"
            onClick={() => openPopup(item)}
          >
            <Link href="">
              <div onClick={refresh} className="carousel-item h-[250px] w-[250px] justify-center">
                <Image
                  src={item.image_url}
                  alt='foto karya'
                  width={250}
                  height={250}
                />
              </div>
            </Link>
          </div>
          <div className="flex relative">
            <div className="flex-initial max-w-[252px]">
              <p className="text-xl text-base-200 mt-4">{item.nama_karya}</p>
              <p className={textColor}>
                {item.first_name} {item.last_name}
              </p>
              <p className={textColor}>Rp {item.harga}</p>
            </div>
            <div className="flex flex-col-reverse">
              <div className="flex-none">
                <CartIcon />
              </div>
            </div>
            <div className="flex-none w-[64px]"></div>
          </div>
        </div>
      ))}
      {showPopup && (
        <ProductDetailPopup item={selectedItem} onClose={closePopup} />
      )}
    </div>
  );
}
