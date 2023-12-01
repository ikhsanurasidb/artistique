import Image from "next/image";
import Link from "next/link";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

export default function Main() {
  return (
    <div className="flex mt-[10vh] h-[90vh] text-base-200 bg-neutral tracking-widest">
      <div className="flex flex-col justify-between items-center h-[85vh] w-[10vh] my-auto">
        <div className="grid gap-16 grid-cols-1">
          <div className=" w-10 rounded-full hover:bg-gray-200 active:bg-gray-300">
            <Link href="#">
              <AccountCircleRoundedIcon fontSize="large" />
            </Link>
          </div>
          <div className="hover:bg-gray-200 active:bg-gray-300 rounded">
            <Link href="#">
              <ShoppingCartRoundedIcon fontSize="large" />
            </Link>
          </div>
        </div>
        <div className="hover:bg-gray-200 active:bg-gray-300 rounded">
          <LogoutRoundedIcon fontSize="large" />
        </div>
      </div>
      <div className="h-[90vh] w-[0.1px] outline outline-1 outline-primary"></div>
      <div className="flex flex-col w-[75%] h-[75%] justify-center items-center gap-4 m-auto">
        <h1>- Profile -</h1>
        <div className="flex bg-accent w-[100%] h-[100%] m-auto rounded-xl">
          <div className="grid grid-cols-2 gap-8 m-auto content-center">
            <div className="flex flex-col justify-end items-end">
              <div className="w-[300px] h-[300px] glass p-4 rounded-md">
                <Image
                  src="/hero-image.jpg"
                  width={300}
                  height={300}
                  alt="profile-photo"
                  className="rounded-md"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4 w-[295px]">
                <button className="btn btn-lg btn-neutral outline-dashed outline-2 outline-offset-2 outline-primary">
                  Save
                </button>
                <button className="btn btn-lg btn-neutral outline-dashed outline-2 outline-offset-2 outline-primary col-span-2">
                  <div className="flex">
                  <FileUploadOutlinedIcon className="flex-none"/><p className="flex-inital">Upload Photo</p> 
                  </div>
                </button>
              </div>
            </div>
            <div className="grid grid-rows-5 gap-4">
              <div>
                <p>Nama</p>
                <p>Asep Surasep</p>
              </div>
              <div>
                <p>Email</p>
                <p>asep@mail.com</p>
              </div>
              <div>
                <p>Nomor HP</p>
                <p>081234567890</p>
              </div>
              <div>
                <p>Alamat</p>
                <p>Jl. Jalan</p>
              </div>
              <div>
                <button className="btn btn-otline btn-neutral">
                  EDIT PROFILE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
