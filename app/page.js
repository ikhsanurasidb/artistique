/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ArrowBack, ArrowForward } from "./ui/button";
import itemData from "./lib/data.ts";
import ArtCategory from "./ui/arts-carousel";
import Artists from "./ui/artists-carousel";

const Hero = () => {
  return (
    <div className=" flex flex-col-reverse lg:flex-row lg:mt-[9vh] lg:min-h-[91vh] bg-neutral mt-[22vh] min-h-[90vh]">
      <div className="flex-1">
        <p
          dir="rtl"
          className="flex-1 text-2xl text-base-200 tracking-[.12em] mt-2 lg:mt-52 lg:ms-20 font-bold lg:text-3xl lg:text-base-200 text-center lg:text-start"
        >
          Discover Masterpieces
        </p>
        <div
          dir="rtl"
          className="flex-1 mt-8 lg:mb-16 lg:ms-20 text-base-200 text-center lg:text-start"
        >
          <p className="tracking-[.38em] mt-8 mb-6">
            Find the artwork
            <br />
            .you want
          </p>
          <button className="btn w-20 lg:h-12 lg:w-44 btn-primary rounded-full text-neutral">
            Find
          </button>
        </div>
        <div
          dir="ltr"
          className="flex-1 mt-8 lg:ms-20 text-base-200 text-center lg:text-start"
        >
          <p className="tracking-[.38em] mb-6">
            Showcase your
            <br />
            artwork.
          </p>
          <button className="btn w-20 mb-8 lg:h-12 lg:w-44 btn-primary rounded-full text-neutral">
            Sell
          </button>
        </div>
      </div>
      <div className="flex-1 lg:flex-shrink-0 p-4">
        <Image
          src="/hero-image.jpg"
          alt="hero"
          width={1920}
          height={1080}
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

const AuctionArea = () => {
  return (
    <div className="mt-32" id="auction-area">
      <div className="min-h-[10vh] text-center p-4">
        <a className="text-2xl tracking-[.2em] mt-2 text-base-200 font-bold lg:text-5xl">
          Auction
        </a>
      </div>
      <div className="flex gap-8 items-center justify-center min-h-[80vh] bg-neutral">
        <ArrowBack buttonColor={"btn-primary"}/>
        <Card
          className="flex-1 p-8 bg-primary text-base-200"
          sx={{ maxWidth: 1133 }}
        >
          <CardActionArea>
            <div className="grid grid-cols-4 gap-4 grid">
              {itemData.map((item, index) =>
                item.title === "Painting1" ? (
                  <img
                    key={index}
                    src={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                    height="140"
                    className={
                      "rounded hover:scale-105 transform transition-all duration-500 ease-in-out row-span-2 col-span-2"
                    }
                  />
                ) : (
                  <div
                    key={index}
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                      height: "100%",
                    }}
                    className={
                      "rounded hover:scale-105 transform transition-all duration-500 ease-in-out"
                    }
                  />
                )
              )}
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Painting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Albums : City Views <br />
                Live on Dec at 08.00 PM WIB
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <ArrowForward buttonColor={"btn-primary"}/>
      </div>
    </div>
  );
};

const ArtsArea = () => {
  return (
    <div className="bg-neutral mt-32" id="arts-area">
      <div className="min-h-[10vh] p-4 ">
        <p className="text-2xl tracking-[.2em] text-center text-base-200 font-bold mb-16 lg:text-5xl">
          Arts
        </p>
        <ArtCategory category="Painting" isColorBgLight={true} />
        <ArtCategory category="Sculpture" isColorBgLight={true} />
        <ArtCategory category="Digital Art" isColorBgLight={true} />
        <ArtCategory category="Photography" isColorBgLight={true} />
      </div>
    </div>
  );
};

const ArtistsArea = () => {
  return (
    <div className="bg-neutral mt-32" id="artists-area">
      <div className="min-h-[10vh] p-4 ">
        <p className="text-2xl tracking-[.2em] text-center text-base-200 font-bold mb-16 lg:text-5xl">
          Artists
        </p>
        <div className="bg-primary w-[100%] rounded p-4">
          <Artists isColorBgLight={false} />
          <Artists isColorBgLight={false}/>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-neutral">
      <Hero />
      <AuctionArea />
      <ArtsArea />
      <ArtistsArea />
    </div>
  );
}
