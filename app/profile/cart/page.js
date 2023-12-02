export default function Main() {
  return (
      <div className="h-[90vh] w-[100vw] bg-neutral relative flex flex row">
        <div className="h-[90vh] w-[70%] flex flex-col items-center pt-[70px]">
          <div className="h-[40px] w-[850px] text-[30px] font-medium">
            <p>My Cart</p>
          </div>
          <div className="h-[70vh] w-[850px] bg-scroll overflow-y-scroll">
            <div className="h-[30%] w-[800px] rounded-[10px] bg-[#B9BFC9] mb-[20px] flex flex-row items-center justify-around">
              <div className="h-[120px] w-[120px] bg-white rounded-[10px] flex justify-center items-center ml-[-80px]">
                FotoProduct
              </div>
              <div className="text-[22px] font-semibold ml-[-200px]">
                <p>Nama Product</p>
              </div>
              <div className="text-[22px] font-semibold mr-[-50px]">
                <p>$9999</p>
              </div>
            </div>
            <div className="h-[30%] w-[800px] rounded-[10px] bg-[#B9BFC9] mb-[20px] flex flex-row items-center justify-around">
              <div className="h-[120px] w-[120px] bg-white rounded-[10px] flex justify-center items-center ml-[-80px]">
                FotoProduct
              </div>
              <div className="text-[22px] font-semibold ml-[-200px]">
                <p>Nama Product</p>
              </div>
              <div className="text-[22px] font-semibold mr-[-50px]">
                <p>$9999</p>
              </div>
            </div>
            <div className="h-[30%] w-[800px] rounded-[10px] bg-[#B9BFC9] mb-[20px] flex flex-row items-center justify-around">
              <div className="h-[120px] w-[120px] bg-white rounded-[10px] flex justify-center items-center ml-[-80px]">
                FotoProduct
              </div>
              <div className="text-[22px] font-semibold ml-[-200px]">
                <p>Nama Product</p>
              </div>
              <div className="text-[22px] font-semibold mr-[-50px]">
                <p>$9999</p>
              </div>
            </div>
            <div className="h-[30%] w-[800px] rounded-[10px] bg-[#B9BFC9] mb-[20px] flex flex-row items-center justify-around">
              <div className="h-[120px] w-[120px] bg-white rounded-[10px] flex justify-center items-center ml-[-80px]">
                FotoProduct
              </div>
              <div className="text-[22px] font-semibold ml-[-200px]">
                <p>Nama Product</p>
              </div>
              <div className="text-[22px] font-semibold mr-[-50px]">
                <p>$9999</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[90vh] w-[30%] flex flex-col items-center pt-[110px]">
          <div className="h-[250px] w-[250px] bg-[#C1C4C9] rounded-[15px] flex flex-col p-[20px]">
            <div className="h-[70%] w-[100%] flex flex-col">
              <div className="relative flex flex-col items-center">
                <p className="text-[31px] font-medium mb-[-5px]">Summary</p>
                <div className="h-[1.5px] w-[200px] bg-black mb-[10px]"></div>
              </div>
              <p className="text-[18px]">Total Product : 4</p>
              <p className="text-[20px] font-semibold">Subtotal : $9999</p>
            </div>
            <div className="h-[30%] w-[100%]">
              <div className="h-[100%] flex justify-center items-center">
                <div className="h-[41px] w-[177px] rounded-[30px] bg-[#D9D9D9] flex justify-center items-center text-[19px] font-semibold cursor-pointer transition-transform transform hover:translate-y-[-3px] hover:bg-gray-500">Checkout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
