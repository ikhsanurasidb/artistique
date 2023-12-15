"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailPopup ({ item, onClose }) {
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
    }else{
      alert("Please login first!");
    }
  };

  console.log(productData[0]);



  return (
    <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative z-50 rounded-2xl border border-solid border-border-[#ADB4BE] bg-[#8E99AA] bg-opacity-20 backdrop-blur-lg flex justify-center items-center">
        {/* ====================== */}
        <div className="h-[80%] w-[100%] relative flex justify-center items-center">
      <div key={item.nama_karya} className="h-[700px] w-[950px] rounded-2xl border border-solid border-border-[#ADB4BE] bg-[#8E99AA] bg-opacity-20 backdrop-blur-lg flex justify-center items-center" >
        <div className="h-[600px] w-[850px] p-[35px] rounded-2xl bg-[#F7F7F7] flex justify-center items-center flex-col">
          <div className="h-[315px] w-[100%] flex flex-row">
            <div className="h-[315px] w-[40%]">
              <div className="h-[300px] w-[300px] bg-[#B9BFC9] rounded-2xl flex justify-center items-center">
                <Image
                  src={item.image_url}
                  alt="foto karya"
                  width={200}
                  height={200}
                  className="border rounded-lg"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="h-[315px] w-[60%] flex-col">
              <div className="h-[157.5px] w-[100%] pt-[30px]">
                <button className="h-[30px] w-[468px] text-[30px] text-black font-medium flex justify-end relative top-[-30px] right-[-10px] cursor-pointer" onClick={onClose}>X</button>
                <p className="text-[36px] font-normal text-black overflow-hidden whitespace-nowrap overflow-ellipsis">{item.nama_karya}</p>
                <p className="text-[24px] font-bold text-black">Rp {item.harga}</p>
              </div>
              <div className="h-[157.5px] w-[100%] flex flex-col justify-end items-start pb-[30px]">
                <div className="flex flex-row gap-[20px]">
                  <div bttn className="h-[35px] w-[150px] bg-[#B9BFC9] rounded-[5px] flex justify-center items-center text-[16px] font-medium cursor-pointer flex-none" onClick={() => handleCart(item.nama_karya)}>ADD TO CART</div>
                  <Link href="http://localhost:3000/profile/cart">
                  <div bttn className="h-[35px] w-[150px] border border-solid border-[#B9BFC9] rounded-[5px] flex justify-center items-center text-[16px] font-semibold text-[#B9BFC9] " onClick={() => handleCart(item.nama_karya)} >BUY NOW</div>
                  </Link>
                </div>
                <div className="h-[1px] w-[505px] bg-[#1A1919] relative left-[-5px] mt-[10px]"></div>
                <p className="text-[16px] font-medium text-[#1A1919] mt-[10px]">Categories : Painting</p>
                <p className="text-[16px] font-medium text-[#1A1919]">Artist : {item.first_name} {item.last_name}</p>
              </div>
            </div>
          </div>

          <div className="h-[265px] w-[100%] relative flex flex-col items-center text-[#1A1919]">
            <p className="text-[16px] font-medium mb-[5px] mt-[10px]">Description</p>
            <div className="h-[0.5px] w-[840px] bg-[#1A1919] mb-[5px]"></div>
            <p className="text-[16px] font-medium">{item.deskripsi}</p>
          </div>
        </div>
      </div>
    </div>
        {/* ====================== */}
      </div>
    </div>
  );
};

