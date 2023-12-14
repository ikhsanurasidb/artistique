"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

interface CartItem {
  nama_karya: string;
  image_url: string;
  harga: number;
}

export default function Main() {
  const [cartData, setCartData] = useState([]);
  const [shouldRerender, setShouldRerender] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/getFromDB", {
          method: "GET",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setCartData(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [shouldRerender]); // Include shouldRerender in the dependency array

  const handleRemoveItem = async (nama_karya) => {
    try {
      const response = await fetch("/api/removeItemCart", {
        method: "DELETE",
        body: JSON.stringify({
          nama_karya: nama_karya,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove item");
      }

      // Trigger a re-render by updating shouldRerender
      setShouldRerender((prev) => !prev);
    } catch (error) {
      console.error("Error removing item", error);
    }
  };

  console.log(cartData);

  const totalProducts = cartData.length;
  const subtotal = cartData.reduce(
    (acc, item) => acc + parseInt(item.harga),
    0
  );
  const formattedSubtotal = subtotal.toLocaleString();

  return (
    <div className="h-[90vh] w-[100vw] bg-neutral relative flex row">
      <div className="h-[90vh] w-[70%] flex flex-col items-center pt-[50px]">
        <div className="h-[40px] w-[850px] mb-4 text-[30px] font-medium">
          <p>My Cart</p>
        </div>
        <div className="h-[70vh] w-[850px] bg-scroll overflow-y-scroll">
          {cartData.map((item: CartItem) => (
            <div key={item.nama_karya}>
              <div className="h-[30%] w-[800px] rounded-[10px] bg-[#B9BFC9] mb-[20px] grid grid-cols-9 justify-items-center content-center items-center">
                <div className="h-[160px] w-[120px] p-4 bg-white rounded-[10px] ml-2 col-span-2 flex">
                  <div className="m-auto">
                    <Image
                      src={item.image_url}
                      alt={item.nama_karya}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="text-[18px] font-semibold col-span-3">
                  <p>{item.nama_karya}</p>
                </div>
                <div className="text-[18px] font-semibold col-span-3">
                  <p>{item.harga.toLocaleString()}</p>
                </div>
                <button onClick={() => handleRemoveItem(item.nama_karya)}>
                  <RemoveCircleRoundedIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[90vh] w-[30%] flex flex-col items-center pt-[110px]">
        <div className="h-[250px] w-[250px] bg-[#C1C4C9] rounded-[15px] flex flex-col p-[20px]">
          <div className="h-[70%] w-[100%] flex flex-col">
            <div className="relative flex flex-col items-center">
              <p className="text-[31px] font-medium mb-[-5px]">Summary</p>
              <div className="h-[1.5px] w-[200px] bg-black mb-[10px]"></div>
            </div>
            <p className="text-[18px]">Total Product : {totalProducts}</p>
            <p className="text-[20px] font-semibold">
              Subtotal : Rp {formattedSubtotal}
            </p>
          </div>
          <div className="h-[30%] w-[100%]">
            <div className="h-[100%] flex justify-center items-center">
              <div className="h-[41px] w-[177px] rounded-[30px] bg-[#D9D9D9] flex justify-center items-center text-[19px] font-semibold cursor-pointer transition-transform transform hover:translate-y-[-3px] hover:bg-gray-500">
                Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
