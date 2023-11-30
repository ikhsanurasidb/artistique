/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Main() {
  return (
    <div className="flex mt-[10vh] h-[90vh] bg-neutral">
      <div className="flex m-auto">
        {/* <div className="w-64">
          <div className="w-[300px] h-[300px]">
            <Image
              src="/image-list-2.jpg"
              height={300}
              width={300}
              alt="artwork"
            ></Image>
          </div>
        </div>
        <div className="w-32">
          <p className="text-base-200">Deskripsi</p>
        </div> */}
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="/image-list-2.jpg" alt="Album" />
          </figure>
          <div className="card-body justify-between">
            <div className="grid grid-cols-1 gap-4">
              <h2 className="card-title flex-none">Album: City Views</h2>
              <p className="flex-none">Live on Dec at 08.00 PM WIB</p>
              <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-2xl">
                    <span style={{ "--value": 15 }}></span>
                  </span>
                  days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-2xl">
                    <span style={{ "--value": 10 }}></span>
                  </span>
                  hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-2xl">
                    <span style={{ "--value": 24 }}></span>
                  </span>
                  min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-2xl">
                    <span style={{ "--value": 7 }}></span>
                  </span>
                  sec
                </div>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-outline">Register to Bid</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
