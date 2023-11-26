import Image from "next/image";
import React from "react";
import itemData from "../lib/data";
import Link from "next/link";

export default function Carousel({carouselRef, textColor}){
    return(
        <div ref={carouselRef} className="flex carousel p-8">
        {itemData.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="carousel-item flex-auto mr-16 p-4 bg-accent rounded-lg shadow-lg">
              <Link href="">
                <div className="carousel-item h-[250px] w-[250px] justify-center">
                  <Image
                    src={`${item.img}`}
                    alt={item.title}
                    width={250}
                    height={250}
                  />
                </div>
              </Link>
            </div>
            <div>
              <p className="text-xl text-base-200 mt-4">Apaan Ya Namanya</p>
              <p className={textColor}>Budiawan Lstntntntnt</p>
              <p className={textColor}>Rp9.999.999</p>
            </div>
          </div>
        ))}
      </div>
    )
}