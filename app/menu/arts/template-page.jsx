import ItemData from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
import { CartIcon } from "../../ui/icons";

export default function Main({ category }) {
  return (
    <div className="mt-[10vh] bg-neutral">
      <h1 className="text-4xl text-center text-base-200 pt-8">
        {category.toUpperCase()}
      </h1>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8">
        {ItemData.map((item, index) => (
          <div key={index} className="flex flex-col w-[250px]">
            <div className="carousel-item flex-auto w-[250px] p-4 bg-accent rounded-lg shadow-lg">
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
            <div className="grid grid-cols-9 grid place-items-end w-[282px]">
              <div className="col-start-1 col-span-8">
                <p className="text-xl text-base-200 mt-4">Apaan Ya Namanya</p>
                <p className="text-base-200">
                  Budiawan Lstntntntntas dfasdfasdfasdfsfdsdf
                </p>
                <p className="text-base-200">Rp9.999.999</p>
              </div>
              <div>
                  <div className="grid place-items-end">
                    <CartIcon />
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
